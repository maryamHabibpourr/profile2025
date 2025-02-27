import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getPostsMeta } from '@/lib/posts'; 

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.NEXT_PUBLIC_MY_SECRET_TOKEN) {
    return new NextResponse(JSON.stringify({ message: 'Invalid Token' }), {
      status: 401,
      statusText: 'Unauthorized',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const pathParam = request.nextUrl.searchParams.get('path');

  if (pathParam) {
    revalidatePath(pathParam);
    return NextResponse.json({ revalidated: true, path: pathParam });
  } else {
    const posts = await getPostsMeta();
    if (!posts || posts.length === 0) {
      return NextResponse.json({ message: 'No posts found' });
    }
    posts.forEach(post => {
      revalidatePath(`/docs/${post.id}`);
    });
    return NextResponse.json({
      revalidated: true,
      paths: posts.map(post => `/docs/${post.id}`),
    });
  }
}
