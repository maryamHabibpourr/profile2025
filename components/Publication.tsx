"use client"; 

import React,{useState} from "react";
import dynamic from 'next/dynamic';
import Heading from "@/shared/Heading";
import Link from "next/link";
import Image from "next/image";

const Viewer = dynamic(
  () => import('react-viewer'),
  { 
    ssr: false,
    loading: () => <p>Loading viewer...</p>
  }
);


const Publication = () => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
 
    return (
   
        <section className="container flex flex-col items-center mt-2 mb-4">
          <Heading
            tag="What I staudid in AI"
            title="Publication."
            text="
              Exceptionally adept professional, proficient in researching,
              coding, and deploying deep learning models. Passionate for
              opportunities in research work that will open the door of career
              progression in AI industry."
          />
          <div className="w-full flex flex-row gap-2">
            <ul className="list-disc pl-6">
              <li className="text-gray-600">
                <Link
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0952197623004323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-800 text-left font-semibold hover:text-red-600"
                >
                  Uncertainty-aware credit card fraud detection using deep learning
                </Link>
              </li>
              <li className="text-gray-600">
                <Link
                  href="https://arxiv.org/abs/2107.11643"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-800 text-left font-semibold hover:text-red-600"
                >
                  An uncertainty-aware deep learning framework for defect detection in casting products
                </Link>
              </li>
            </ul>
            <div 
              onClick={() => setIsViewerOpen(true)}
              className="cursor-pointer"
            >
              <Image
                src="/uncertainty.jpg"
                alt="uncertainty"
                width={200}
                height={200}
                quality={100}
              />
            </div>
            <Viewer
              visible={isViewerOpen}
              onClose={() => setIsViewerOpen(false)}
              images={[{ src: '/uncertainty.jpg', alt: 'uncertainty' }]}
              scalable={false}
              zoomSpeed={0.5}
              rotatable={true}
              noClose={false}
              changeable={false}
            />
          </div>
        </section>
    );
  };
export default Publication
