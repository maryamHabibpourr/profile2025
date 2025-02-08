"use client";
import Heading from "@/shared/Heading";
import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  X,
  MessageCircle,
  Send,
  Loader2,
  ArrowDownCircleIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Mail, Globe } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import LandingSections from "@/components/LandingSections";

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatIcon, setShowChatIcon] = useState(false);
  const chatIconRef = useRef<HTMLButtonElement>(null);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    reload,
    error,
  } = useChat({ api: "/api/gemini" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowChatIcon(true);
      } else {
        setShowChatIcon(false);
        setIsChatOpen(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <main className="flex-1 h-fit-content py-12 px-4">
      <div className="flex flex-col min-h-screen">
        <LandingSections />
        <AnimatePresence>
          {showChatIcon && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-4 right-4 z-50"
            >
              <Button
                ref={chatIconRef}
                onClick={toggleChat}
                size="icon"
                className="rounded-full size-14 p-2 shadow-lg"
              >
                {!isChatOpen ? (
                  <MessageCircle className="size-12" />
                ) : (
                  <ArrowDownCircleIcon />
                )}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-20 right-4 z-50 w-[95%] md:w-[500px] "
            >
              <Card className="border-2 bg-red-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-lg font-bold">
                    chat with MARYAM AI
                  </CardTitle>
                  <Button
                    onClick={toggleChat}
                    size="sm"
                    variant="ghost"
                    className="px-2 py-0"
                  >
                    <X className="size-4" />
                    <span className="sr-only">Close chat</span>
                  </Button>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px] pr-4">
                    {messages?.length === 0 && (
                      <div className="w-full mt-32 text-gray-500 items-center justify-center flex gap-3">
                        no massage yet.
                      </div>
                    )}
                    {messages?.map((message, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start space-y-2 px-4 py-3 text-sm"
                      >
                        gfhdjyr
                      </div>
                    ))}
                    {isLoading && (
                      <div className="w-full items-center flex justify-center gap-3">
                        <Loader2 className="animate-spin h-5 w-5 text-primary" />
                        <button
                          className="underline"
                          type="button"
                          onClick={() => stop()}
                        >
                          abort
                        </button>
                      </div>
                    )}
                    {error && (
                      <div className="w-full items-center flex justify-center gap-3">
                        <div>An error occoured.</div>
                        <button
                          className="underline"
                          type="button"
                          onClick={() => reload()}
                        >
                          Retry
                        </button>
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
                <CardFooter
                  onSubmit={handleSubmit}
                  className="flex w-full items-center space-x-2"
                >
                  <form
                    onSubmit={handleSubmit}
                    className="flex w-full items-center space-x-2"
                  >
                    <Input
                      value={input}
                      onChange={handleInputChange}
                      className="flex-1"
                      placeholder="type your message here..."
                    />
                    <Button
                      type="submit"
                      className="size-9"
                      disabled={isLoading}
                      size="icon"
                    >
                      <Send className="size-4" />
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Home;

// const socialLinks = [
//   {
//     href: "https://www.linkedin.com/in/maryam-habibpour-0a6071142/",
//     icon: <FaLinkedin className="w-6 h-6 text-gray-600" />,
//     label: "LinkedIn",
//   },
//   {
//     href: "https://github.com/maryamHabibpourr",
//     icon: <FaGithub className="w-6 h-6 text-gray-600" />,
//     label: "GitHub",
//   },
//   {
//     href: "mailto:e.maryamhabibpour@gmail.com",
//     icon: <Mail className="w-6 h-6 text-gray-600" />,
//     label: "Email",
//   },
//   {
//     href: "https://deepai.org/profile/maryam-habibpour",
//     icon: <Globe className="w-6 h-6 text-gray-600" />,
//     label: "DeepAI Profile",
//   },
// ];

{
  /* <section className="container flex flex-col gap-2 items-center mt-2 mb-4">
        <div className="font-semibold italic text-gray-600 text-lg mb-8">
          <p>Hello world..!</p>
          <p>My name is Maryam Habibpour</p>
          <p>
            and in Persian language is{" "}
            <span className="font-light italic text-gray-600 text-lg">
              مریم
            </span>
          </p>
        </div>
        <section>
          <Heading
            className="text-justify"
            tag="What I did?"
            title="History."
            text={[
              "I studied Industrial Management at university, but my passion for computers started much earlier. At 15, I began programming with ",
              <span key="pascal" className="text-red-800 font-semibold">
                Pascal
              </span>,
              " and ",
              <span key="vb" className="text-red-800 font-semibold">
                Visual Basic
              </span>,
              ". After university, I worked with my brother and started my own business, exploring different paths along the way. However, my love for technology brought me back to IT about eight years ago. Since then, I have worked on various projects, often incorporating ",
              <span key="ai" className="text-red-800 font-semibold">
                AI
              </span>,
              " in different ways, especially in areas like automation and optimization. Alongside my professional work, I have also been involved in academic research, contributing to projects in ",
              <span key="datascience" className="text-red-800 font-semibold">
                AI and data science
              </span>,
              ". Although I excelled academically, I realized my true passion lies in building real-world applications. This led me to ",
              <span key="webdev" className="text-red-800 font-semibold">
                web development
              </span>,
              ", where I combine my technical skills with creating impactful software.",
            ]}
          />
        </section>
        <section className="flex gap-6 mt-8">
          <TooltipProvider>
            {socialLinks.map((link, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="py-2 px-2 rounded-full bg-transparent"
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
        </section>
      </section> */
}
