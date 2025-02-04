"use client"; 

import React,{useState} from "react";
import Viewer from 'react-viewer';
import Image from "next/image"

type Props = {
    src: string,
    alt: string,
    priority?: string,
}

export default function CustomImage({ src, alt, priority }: Props) {
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const prty = priority ? true : false

    return (
        <main className="w-full h-full">
       
            <div 
              onClick={() => setIsViewerOpen(true)}
              className="cursor-pointer"
            >
            <Image
            className="rounded-lg mx-auto"
            src={src}
            alt={alt}
            width={400}
            height={300}
            priority={prty}
              />
            </div>
            <Viewer
              visible={isViewerOpen}
              onClose={() => setIsViewerOpen(false)}
              images={[{ src: src, alt: alt }]}
              scalable={false}
              zoomSpeed={0.5}
              rotatable={true}
              noClose={false}
              changeable={false}
            />
        </main>
    )
}