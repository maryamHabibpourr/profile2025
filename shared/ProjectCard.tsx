"use client";
import React, { useState } from "react";
import Viewer from "react-viewer";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

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
  source_code_link_front?: string;
  source_code_link_back?: string;
  website_link?: string;
  imageUrl?: string;
};

const ProjectCard: React.FC<Project> = ({
  index,
  name,
  year,
  description,
  tags,
  source_code_link_front,
  source_code_link_back,
  website_link,
  imageUrl,
  className,
}) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <div
      className={`${className} w-full flex flex-col-reverse md:flex-row items-center justify-center gap-2 my-2 p-4 rounded-xl`}
      key={index}
      style={{
        boxShadow:
          "0 -4px 6px -2px rgba(0,0,0,0.1), -4px 4px 6px -2px rgba(0,0,0,0.1), 4px 4px 6px -2px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h5 className="font-semibold text-sm text-red-800">{name}</h5>
          <span className="text-xs text-green-600">({year})</span>
        </div>
        <p className="font-semibold text-sm text-gray-800">{description}</p>

        <div className="mt-2 flex flex-wrap gap-1">
          {tags?.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-sm ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="flex gap-2 mt-2">
          <TooltipProvider>
            {source_code_link_front && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={source_code_link_front}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="py-2 px-3 rounded-full bg-transparent"
                    >
                      <FaGithub size={20} className="text-green-600" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>frontend codebase</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>
          <TooltipProvider>
            {source_code_link_back && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={source_code_link_back}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="py-2 px-3 rounded-full bg-transparent"
                    >
                      <FaGithub size={20} className="text-red-600" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>backend codebase</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>

          <TooltipProvider>
            {website_link && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="py-2 px-3 rounded-full bg-transparent"
                    >
                      <Globe size={20} className="text-red-600" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Application URL</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>
        </div>
      </div>

      <div className="relative cursor-pointer">
        {imageUrl && (
          <>
            <Image
              src={imageUrl}
              width={250}
              height={250}
              alt="image"
              className="object-cover"
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
