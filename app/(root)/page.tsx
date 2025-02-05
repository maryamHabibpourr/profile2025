import Heading from "@/shared/Heading";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {  Mail, Globe } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa"



const socialLinks = [
  {
    href: "https://www.linkedin.com/in/maryam-habibpour-0a6071142/",
    icon: <FaLinkedin className="w-6 h-6 text-gray-600" />, 
    label: "LinkedIn",
  },
  {
    href: "https://github.com/maryamHabibpourr",
    icon: <FaGithub className="w-6 h-6 text-gray-600" />, 
    label: "GitHub",
  },
  {
    href: "mailto:e.maryamhabibpour@gmail.com",
    icon: <Mail className="w-6 h-6 text-gray-600" />, 
    label: "Email",
  },
  {
    href: "https://deepai.org/profile/maryam-habibpour",
    icon: <Globe className="w-6 h-6 text-gray-600" />, 
    label: "DeepAI Profile",
  },
];



const Home = () => {
  return (
    <main className="w-full h-fit-content py-12 px-4">
      <section className="container flex flex-col gap-2 items-center mt-2 mb-4">
        <div className="font-semibold italic text-gray-600 text-lg mb-8">
          <p>Hello world..!</p>
          <p>My name is Maryam Habibpour</p>
          <p>
            and in Persian language is {" "}
            <span className="font-light italic text-gray-600 text-lg">مریم</span>
          </p>
        </div>
        <section>
          <Heading
            className="text-justify"
            tag="What I did?"
            title="History."
            text={[
              "I studied Industrial Management at university, but my passion for computers started much earlier. At 15, I began programming with ",
              <span key="pascal" className="text-red-800 font-semibold">Pascal</span>,
              " and ",
              <span key="vb" className="text-red-800 font-semibold">Visual Basic</span>,
              ". After university, I worked with my brother and started my own business, exploring different paths along the way. However, my love for technology brought me back to IT about eight years ago. Since then, I have worked on various projects, often incorporating ",
              <span key="ai" className="text-red-800 font-semibold">AI</span>,
              " in different ways, especially in areas like automation and optimization. Alongside my professional work, I have also been involved in academic research, contributing to projects in ",
              <span key="datascience" className="text-red-800 font-semibold">AI and data science</span>,
              ". Although I excelled academically, I realized my true passion lies in building real-world applications. This led me to ",
              <span key="webdev" className="text-red-800 font-semibold">web development</span>,
              ", where I combine my technical skills with creating impactful software."
            ]}
          />
        </section>
        <section className="flex gap-6 mt-6">
          <TooltipProvider>
            {socialLinks.map((link, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="py-2 px-2 rounded-full bg-transparent">
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
        </section>
      </section>
    </main>
  );
};

export default Home;
