"use client";
import React, { useState } from "react";
import { BrainCircuit, Database } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

type CaseStudy = {
  index?: number;
  title?: string;
  className?: string;
  source_code_link?: string;
  dataset_link?: string;
};

const CaseStudyCard: React.FC<CaseStudy> = ({
  index,
  title,
  className,
  source_code_link,
  dataset_link,
}) => {
  return (
    <div className={`${className} w-full my-1 px-4`}>
      <div className="flex flex-col md:flex-row items-start justify-between md:gap-1">
        <div className="flex items-center gap-2">
          <h5 className="font-semibold text-sx text-red-800">{title}</h5>
        </div>

        <div className="flex gap-2">
          <TooltipProvider>
            {source_code_link && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="py-2 px-3 rounded-full bg-transparent"
                    >
                      <BrainCircuit size={20} className="text-red-600" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Source Code</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>

          <TooltipProvider>
            {dataset_link && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={dataset_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="py-2 px-3 rounded-full bg-transparent"
                    >
                      <Database size={20} className="text-green-600" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Dataset</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
