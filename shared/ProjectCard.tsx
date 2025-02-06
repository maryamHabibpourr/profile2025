"use client";
import React, { useState } from "react";
import Viewer from "react-viewer";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Tag = {
  name?: string;
  color?: string;
};

type Project = {
  index: number;
  name?: string;
  year?: number;
  className?: string;
  description?: string;
  tags?: Tag[];
  source_code_link?: string;
  website_link?: string;
  imageUrl?: string;
};

const ProjectCard: React.FC<Project> = ({
  index,
  name,
  year,
  description,
  tags,
  source_code_link,
  website_link,
  imageUrl,
  className,
}) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <div className={`${className} w-full mx-auto my-4`} key={index}>
      <div className="flex flex-col">
        <div className="flex items-center gap-2 py-2">
          <h5 className="font-semibold text-red-800">{name}</h5>
          <span className="text-xs text-green-600">({year})</span>
        </div>
        <p className="font-semibold text-gray-800">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="flex flex-row gap-6 items-center justify-between mt-4">
          {source_code_link && (
            <Link
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition"
            >
              <FaGithub size={20} className="text-gray-600" />
            </Link>
          )}

          {website_link && (
            <Link
              href={website_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition"
            >
              <Globe size={20} className="text-gray-600" />
            </Link>
          )}
        </div>
      </div>

      <div className="relative mt-4 cursor-pointer">
        {imageUrl && (
          <>
            <Image
              src={imageUrl}
              width={380}
              height={362}
              alt="image"
              className="w-full h-full object-cover"
              onClick={() => setIsViewerOpen(true)}     
            />
            <Viewer
              visible={isViewerOpen}
              onClose={() => setIsViewerOpen(false)}
              images={[{ src: imageUrl, alt: name }]} 
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
