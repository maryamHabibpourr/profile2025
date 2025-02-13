import { projects } from "@/constants";
import Heading from "@/shared/Heading";
import ProjectCard from "@/shared/ProjectCard";
import React from "react";

const Project = () => {
  return (
    <main className="w-full h-fit-content py-2 px-4">
      <section className="container flex flex-col gap-2 items-center mt-2 mb-4">
        <Heading
          tag="My Skills"
          title="Projects."
          text={
            <>
              I have worked on{" "}
              <span className="">full-stack web applications</span>,{" "}
              <span className="">AI-driven platforms</span>, and{" "}
              <span className="">automation solutions</span>, using{" "}
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
              , often containerized with <span className="">Docker</span>.
              <br />
              My projects span real estate platforms, SaaS applications, and{" "}
              <span className="">machine learning-based fraud detection</span>.
              I specialize in <span className="">SEO optimization</span>,
              real-time interactions with <span className="">WebSockets</span>,
              and geolocation features using{" "}
              <span className="">React Leaflet</span> and{" "}
              <span className="">GeoDjango</span>
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
              with <span className="">PostgreSQL</span>, while my frontend
              expertise includes <span className="">TypeScript</span>,{" "}
              <span className="">Tailwind CSS</span>, and{" "}
              <span className="">Zustand</span>.
              <br />
              My workflow integrates <span className="">CI/CD</span>, Linux
              environments, and business automation, ensuring high-performance,
              scalable applications.
            </>
          }
        />
        <Heading tag="Applications" title="Key Projects:" className="mt-6" />
        <div className="flex flex-col">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              className="bg-red-100"
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
    </main>
  );
};

export default Project;
