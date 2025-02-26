import { projects } from "@/constants";
import Heading from "@/shared/Heading";
import ProjectCard from "@/shared/ProjectCard";
import Section from "@/shared/Section";
import React from "react";

const Project = () => {
  return (
    <Section className="flex-1 px-4 pt-2 pb-6">
      <section className="container flex flex-col gap-2 items-center mt-2 mb-4">
        <Heading
          tag="My Skills"
          title="Projects."
          text={
            <>
              I have worked on{" "}
              <span className="">full-stack web applications</span>,{" "}
              <span className="">AI-driven platforms</span>, and{" "}
              <span className="">automation solutions</span> using{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                className="text-red-800"
              >
                Next.js
              </a>
              ,{" "}
              <a
                href="https://reactjs.org"
                target="_blank"
                className="text-red-800"
              >
                React
              </a>
              , and{" "}
              <a
                href="https://www.djangoproject.com"
                target="_blank"
                className="text-red-800"
              >
                Django
              </a>
              , containerized with <span className="">Docker</span>.
              <br />
              My projects include real estate platforms, SaaS applications, and{" "}
              <span className="">fraud detection</span>. I specialize in{" "}
              <span className="">SEO optimization</span>, real-time interactions
              with <span className="">WebSockets</span>, and geolocation with{" "}
              <span className="">React Leaflet</span>.
              <br />
              On the backend, I use{" "}
              <a
                href="https://www.django-rest-framework.org"
                target="_blank"
                className="text-red-800"
              >
                DRF
              </a>{" "}
              with <span className="">PostgreSQL</span>,{" "}
              <a
                href="https://redis.io"
                target="_blank"
                className="text-red-800"
              >
                Redis
              </a>{" "}
              for caching, and{" "}
              <a
                href="https://www.mongodb.com"
                target="_blank"
                className="text-red-800"
              >
                MongoDB
              </a>{" "}
              for NoSQL. Frontend expertise includes{" "}
              <span className="">TypeScript</span>,{" "}
              <span className="">Tailwind CSS</span>, and{" "}
              <span className="">Zustand</span>.
              <br />I am skilled in{" "}
              <span className="text-red-800">optimizing legacy projects</span> for better
              performance and security. Currently, I am focused on building{" "}
              <span className="text-red-800">Chatbots</span> with{" "}
              <span className="text-red-800">Retrieval-Augmented Generation (RAG)</span>.
            </>
          }
        />
        <Heading tag="Applications" title="Key Projects:" className="mt-6" />
        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              className=""
              index={project.id}
              name={project.name}
              year={project.year}
              description={project.description}
              source_code_link_front={project.source_code_link_front}
              source_code_link_back={project.source_code_link_back}
              website_link={project.website_link}
              imageUrl={project.imageUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </section>
    </Section>
  );
};

export default Project;
