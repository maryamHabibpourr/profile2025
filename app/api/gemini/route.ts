import { streamText, Message } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import {  profileData } from "@/lib/data";
// import { initialMessage } from "@/lib/data";

const google = createGoogleGenerativeAI({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
});

export const runtime = "edge";



const generateId = () => Math.random().toString(36).slice(2, 15);

// const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
//   {
//     id: generateId(),
//     role: "user",
//     content: initialMessage.content,
//   },
//   ...messages.map((message) => ({
//     id: message.id || generateId(),
//     role: message.role,
//     content: message.content,
//   })),
// ];


const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
    {
        id: generateId(),
        role: "system",
        content: `You are an AI assistant for Maryam's profile. Here's her experience data: ${JSON.stringify(profileData)}. 
        Answer questions about her projects, experience, and skills accordingly.`
    },
    ...messages.map((message) => ({
        id: message.id || generateId(),
        role: message.role,
        content: message.content,
    })),
];



export async function POST(request: Request) {
  const { messages } = await request.json();
  const stream = await streamText({
    model: google("gemini-1.5-pro"),
    messages: buildGoogleGenAIPrompt(messages),
    temperature: 0.7,
  });
  return stream?.toDataStreamResponse();
}
