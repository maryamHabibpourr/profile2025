"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Heading from "@/shared/Heading";
import { Mail, BrainCircuit } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import Section from "@/shared/Section";

const socialLinks = [
  {
    href: "https://github.com/maryamHabibpourr",
    icon: <FaGithub className="w-6 h-6 text-red-600" />,
    label: "GitHub",
  },
  {
    href: "https://deepai.org/profile/maryam-habibpour",
    icon: <BrainCircuit className="w-6 h-6 text-red-600" />,
    label: "DeepAI Profile",
  },
  {
    href: "https://www.linkedin.com/in/maryam-habibpour-0a6071142/",
    icon: <FaLinkedin className="w-6 h-6 text-red-600" />,
    label: "LinkedIn",
  },
  {
    href: "mailto:e.maryamhabibpour@gmail.com",
    icon: <Mail className="w-6 h-6 text-red-600" />,
    label: "Email",
  },
];

const Hero = () => {
  return (
    <Section>
      <div className="font-dancing-script text-gray-600 text-lg my-2">
        <p>Hello world..!</p>
        <p>My name is Maryam Habibpour,</p>
        <p>
          in Persian language is{" "}
          <span className="font-light italic text-gray-600 text-lg">مریم</span>
        </p>
      </div>
      <section>
        <Heading
          className="md:text-justify"
          tag="What I did?"
          title="History."
          text={[
            <p key="para1" className="mb-4 indent-8">
              My name is Maryam, and my journey into programming started at 15
              with
              <span className="text-red-800 font-semibold"> Pascal </span>
              and
              <span className="text-red-800 font-semibold"> Visual Basic </span>
              . Although I studied Industrial Management at university, my
              passion for technology never faded.
            </p>,
            <p key="para2" className="mb-4 indent-8">
              About eight years ago, I found my way back to IT and have been
              exploring different areas, including
              <span className="text-red-800 font-semibold"> AI </span>
              for automation and optimization. Alongside my professional work, I
              have also been involved in academic research, contributing to
              projects in
              <span className="text-red-800 font-semibold">
                {" "}
                AI and data science{" "}
              </span>
              .
            </p>,
            <p key="para3" className="mb-4 indent-8">
              Although I excelled academically, I realized my true passion lies
              in building real-world applications. That's why I’m drawn to
              <span className="text-red-800 font-semibold">
                {" "}
                web development{" "}
              </span>
              with
              <span className="text-red-800 font-semibold">
                {" "}
                JavaScript and TypeScript{" "}
              </span>
              . I love how fast the ecosystem evolves, constantly pushing me to
              learn more and stay on my toes. There's nothing more exciting than
              creating impactful applications with modern web technologies.
            </p>,
          ]}
        />
      </section>
      <section className="w-full">
        <Heading
          className="md:text-justify mt-6
          "
          title="Check Out."
          text={[
            "My recent résumé can be found ",
            <a
              key="resume-link"
              href="/resume/maryamHabibpour.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-800"
            >
              here
            </a>,
            " and I can be reached at",
            <span key="webdev" className="text-red-800 font-semibold px-1">
              e.maryamhabibpour@gmail.com
            </span>,
            "if needed.",
          ]}
        />
        <div className="flex  items-center justify-center gap-6 mt-4">
          <TooltipProvider>
            {socialLinks.map((link, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="py-2 px-3 rounded-full bg-transparent"
                    >
                      {link.icon}
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </section>
    </Section>
  );
};

export default Hero;
