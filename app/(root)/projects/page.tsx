import { projects } from "@/constants";
import Heading from "@/shared/Heading";
import ProjectCard from "@/shared/ProjectCard";
import React from "react";

const Project = () => {
  return (
    <main className="w-full h-fit-content py-4 px-4">
      <section className="container flex flex-col gap-2 items-center mt-2 mb-4">
        <Heading
          tag="My Skills"
          title="Projects."
          text={
            <>
              I have worked on{" "}
              <span className="font-bold">
                full-stack web applications
              </span>
              ,{" "}
              <span className="font-bold">
                AI-driven platforms
              </span>
              , and{" "}
              <span className="font-bold">
                automation solutions
              </span>
              , using{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                className="text-red-800 font-semibold"
              >
                Next.js
              </a>
              ,{" "}
              <a
                href="https://reactjs.org"
                target="_blank"
                className="text-red-800 font-semibold"
              >
                React
              </a>
              , and{" "}
              <a
                href="https://www.djangoproject.com"
                target="_blank"
                className="text-red-800 font-semibold"
              >
                Django
              </a>
              , often containerized with{" "}
              <span className=" font-bold">Docker</span>.
              <br />
              My projects span real estate platforms, SaaS applications, and{" "}
              <span className="font-bold">
                machine learning-based fraud detection
              </span>
              . I specialize in{" "}
              <span className=" font-bold">
                SEO optimization
              </span>
              , real-time interactions with{" "}
              <span className="font-bold">WebSockets</span>,
              and geolocation features using{" "}
              <span className=" font-bold">React Leaflet</span>{" "}
              and <span className="font-bold">GeoDjango</span>
              .
              <br />
              On the backend, I leverage{" "}
              <a
                href="https://www.django-rest-framework.org"
                target="_blank"
                className="text-red-800 font-semibold"
              >
                Django Rest Framework (DRF)
              </a>{" "}
              with{" "}
              <span className="font-bold">PostgreSQL</span>,
              while my frontend expertise includes{" "}
              <span className="font-bold">TypeScript</span>,{" "}
              <span className="font-bold">Tailwind CSS</span>,
              and <span className=" font-bold">Zustand</span>.
              <br />
              My workflow integrates{" "}
              <span className="font-bold">CI/CD</span>, Linux
              environments, and business automation, ensuring high-performance,
              scalable applications.
            </>
          }
        />
        <Heading tag="Applications" title="Key Projects:" className="mt-6" />
        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectCard
              className="bg-gray-400"
              index={project.id}
              name={project.name}
              year={project.year}
              description={project.description}
              source_code_link={project.source_code_link}
              website_link={project.website_link}
              imageUrl={project.imageUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Project;
