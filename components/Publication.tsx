"use client"; 

import React,{useState} from "react";
import Viewer from 'react-viewer';
import Heading from "@/shared/Heading";
import Link from "next/link";
import Image from "next/image";

const images = [
  { src: '/uncertainty.jpg', alt: 'Uncertainty' },
  { src: '/transaction.jpg', alt: 'Defect Detection' }
];



const Publication = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };
 


    return (
   
      <section className="container flex flex-col items-center mt-2 mb-4">
      <Heading
        tag="What I did in AI"
        title="Publication."
        text="
        Uncertainty Quantification (UQ) enhances the reliability of AI models by
        estimating confidence in predictions, crucial for fraud detection
        and defect identification. In fraud detection, deep learning models 
        struggle with unseen data and can make overconfident errors. Similarly,
        in manufacturing, CNN-based defect detection models face challenges with 
        limited training data and real-world variations. UQ methods, like Monte Carlo 
        Dropout and Ensemble Learning, address these issues by identifying uncertain predictions, 
        allowing expert intervention when needed. This improves trust, interpretability,
        and decision-making in AI-driven systems."
      />
      <div className="w-full flex flex-row gap-2 mt-4">
        <ul className="list-disc pl-6">
          <li className="text-gray-600 mt-2">
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
        <div className="flex flex-col gap-2">
          {images.map((image, index) => (
            <div key={index} onClick={() => openViewer(index)} className="cursor-pointer">
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>

      <Viewer
        visible={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        images={images.map(img => ({ src: img.src, alt: img.alt }))}
        activeIndex={Number(currentIndex)}
        scalable={false}
        zoomSpeed={0.5}
        rotatable={true}
        noClose={false}
        changeable={true}
      />
    </section>
    );
  };
export default Publication
