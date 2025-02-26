"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
// import Viewer from 'react-viewer';
import Heading from "@/shared/Heading";
import Link from "next/link";
import Image from "next/image";

const Viewer = dynamic(() => import("react-viewer"), {
  ssr: false,
});

const images = [
  { src: "/uncertainty.jpg", alt: "Uncertainty" },
  { src: "/transaction.jpg", alt: "Defect Detection" },
];

const Publication = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  // In Collaboration with Deakin University

  return (
    <section className="container flex flex-col items-center">
      <Heading
        className="md:text-justify"
        tag="What I did in AI?"
        title="Publication."
        text={[
          <span key="uncertain" className="text-red-800 font-semibold pr-1">
            Uncertainty Quantification (UQ)
          </span>,
          "enhances the reliability of AI models by estimating confidence in predictions, crucial for ",
          <span key="fraud" className="text-red-800 font-semibold">
            fraud detection
          </span>,
          " and ",
          <span key="defect" className="text-red-800 font-semibold">
            defect identification
          </span>,
          ". ",
          <br key="br1" />,
          "In fraud detection, deep learning models struggle with unseen data and can make overconfident errors. Similarly, in manufacturing, ",
          <span key="cnn" className="">
            CNN-based defect detection
          </span>,
          " models face challenges with limited training data and real-world variations. ",
          <br key="br3" />,
          "UQ methods, like ",
          <span key="mc_dropout" className="">
            Monte Carlo Dropout
          </span>,
          " and ",
          <span key="ensemble" className="">
            Ensemble Learning
          </span>,
          ", address these issues by identifying uncertain predictions, allowing expert intervention when needed. ",
          <br key="br5" />,
          "This improves ",
          <span key="trust" className="">
            trust
          </span>,
          ", ",
          <span key="interpretability" className="">
            interpretability
          </span>,
          ", and ",
          <span key="decision" className="text-red-800 font-semibold">
            decision-making
          </span>,
          " in AI-driven systems.",
        ]}
      />
      <div className="w-full flex flex-col md:flex-row gap-2 mt-4">
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
              An uncertainty-aware deep learning framework for defect detection
              in casting products
            </Link>
          </li>
        </ul>
        <div className="flex flex-col items-center justify-center gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openViewer(index)}
              className="cursor-pointer"
            >
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
        images={images.map((img) => ({ src: img.src, alt: img.alt }))}
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
export default Publication;
