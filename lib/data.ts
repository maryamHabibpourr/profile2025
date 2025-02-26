// export const initialMessage = {
//   role: "system",
//   content:
//     "you are an AI assistent for maryam profile, a platform that share the info of maryam exprience",
// };

export const profileData = {
  overview: {
    name: "Maryam",
    introduction:
      "My journey into programming started at 15 with Pascal and Visual Basic. Although I studied Industrial Management at university, my passion for technology never faded.",
    careerTransition:
      "About eight years ago, I found my way back to IT and have been exploring different areas, including AI for automation and optimization.",
    academicResearch:
      "Alongside my professional work, I have also been involved in academic research, contributing to projects in AI and data science.",
    passion:
      "Although I excelled academically, I realized my true passion lies in building real-world applications.",
    interest:
      "I’m drawn to web development with JavaScript and TypeScript because of the fast-evolving ecosystem and the excitement of creating impactful applications with modern web technologies.",
  },
  personal: {
    name: "Maryam",
    meaning:
      "My name is Maryam (written as 'مریم' in Persian). It is a name of deep historical and religious significance, as it is also the name of Mary, the mother of Jesus Christ, revered in both Christianity and Islam.",
    imageUrl: "/maryam.jpg",
  },
  hobbies: {
    activities:
      "I have an insatiable hunger for learning—random documentaries, tech articles, history, psychology, and even deep dives into Wikipedia's 'random article' button. I also enjoy scrolling through X (formerly Twitter), reading and exploring different topics.",
    movies:
      "I’m a huge movie enthusiast, and one of my all-time favorite series is 'Power', which I’ve rewatched multiple times over the past five years.",
    animals:
      "Beyond tech and movies, I have a deep love for animals. Their presence brings me joy, and I’ve always felt a strong connection to them.",
    sports: {
      childhood:
        "Sports have been a big part of my life since childhood. I played handball for six years as part of my regional team, winning medals alongside my teammates.",
      current:
        "Nowadays, I enjoy rock climbing, horseback riding, and most importantly, strength training, which has become an essential part of my routine.",
    },
    links: [
      {
        title: "Wikipedia's Random Article",
        url: "https://en.wikipedia.org/wiki/Special:Random",
      },
      {
        title: "X (formerly Twitter)",
        url: "https://twitter.com",
      },
    ],
  },
  skills: {
    expertise:
      "I have worked on full-stack web applications, AI-driven platforms, and automation solutions using Next.js, React, and Django, containerized with Docker.",
    projects:
      "My projects include real estate platforms, SaaS applications, and machine learning-based fraud detection. I also optimize legacy projects by refactoring code, upgrading dependencies, and enhancing performance and security.",
    specialization:
      "I specialize in SEO optimization, real-time interactions with WebSockets, and geolocation using React Leaflet and GeoDjango.",
    backend:
      "On the backend, I use Django Rest Framework (DRF) with PostgreSQL, along with Redis for caching and MongoDB for scalable NoSQL solutions.",
    frontend:
      "My frontend expertise includes TypeScript, Tailwind CSS, and Zustand.",
    workflow:
      "My workflow integrates CI/CD, Linux environments, and business automation for high-performance applications. Currently, I am focused on building Chatbots with advanced conversational AI, particularly using Retrieval-Augmented Generation (RAG) to provide intelligent and context-aware interactions.",
  },
  projects: [
    {
      id: 4,
      name: "AI Agent",
      year: 2025,
      description:
        "This AI Agent helps users analyze YouTube transcripts, search Google Books, process JSONdata, and retrieve Customer, Order, and Comments data, offering smart insights for better decision-making.",
      tags: [
        {
          name: "nextjs-15",
        },
        {
          name: "typeScript",
        },
        {
          name: "convex",
        },
        {
          name: "clerk",
        },
        {
          name: "openai",
        },
        {
          name: "langchain",
        },
        {
          name: "wxflows",
        },
      ],
      source_code_link_front: "https://github.com/maryamHabibpourr/AIAgent",
      source_code_link_back: "",
      website_link: "https://ai-agent-maryamhabibpourr-board-taem.vercel.app/",
      imageUrl: "/aiagent.png",
    },
    {
      id: 3,
      name: "Board",
      year: 2024,
      description:
        "Board is a versatile platform that allows users to create and customize boards with various tools like text and drawings, making it easy to collaborate and organize ideas visually.",
      tags: [
        {
          name: "nextjs-14",
        },
        {
          name: "typeScript",
        },
        {
          name: "convex",
        },
        {
          name: "clerk",
        },
      ],
      source_code_link_front:
        "https://github.com/maryamHabibpourr/board-next-convex-clerk",
      source_code_link_back: "",
      website_link: "https://board-nine-theta.vercel.app/",
      imageUrl: "/board.png",
    },
    {
      id: 2,
      name: "GilanJan",
      year: 2023,
      description:
        "Gilanjan is a platform that allows users to reserve spots and services in Gilan province, making travel and leisure planning easier and more convenient.",
      tags: [
        {
          name: "nextjs",
        },
        {
          name: "real chat",
        },
        {
          name: "djangoRestFramework",
        },
        {
          name: "postgress",
        },
      ],
      source_code_link_front:
        "https://github.com/maryamHabibpourr/gilanjan.client",
      source_code_link_back:
        "https://github.com/maryamHabibpourr/gilanjan-django-api",
      website_link: "https://gilanjan.com/",
      imageUrl: "gilanjan.png",
    },
    {
      id: 1,
      name: "Amlak Eeno",
      year: 2022,
      description:
        "Web-based platform designed for users to effortlessly search home rentals and purchases in Tehran, offering a convenient and efficient solution for housing needs.",
      tags: [
        {
          name: "react",
        },
        {
          name: "leaflet",
        },
        {
          name: "djangoRestframework",
        },
        {
          name: "postGIS",
        },
      ],
      source_code_link_front:
        "https://github.com/maryamHabibpourr/AmlakEenoClient-React-LeafLet",
      source_code_link_back:
        "https://github.com/maryamHabibpourr/AmlakeenoApi-Django-DRF",
      website_link: "https://amlakeeno.ir/",
      imageUrl: "/amlakeeno.png",
    },
  ],
  research: {
    title: "Uncertainty Quantification in AI Models",
    description:
      "Uncertainty Quantification (UQ) enhances the reliability of AI models by estimating confidence in predictions, crucial for fraud detection and defect identification. In fraud detection, deep learning models struggle with unseen data and can make overconfident errors. Similarly, in manufacturing, CNN-based defect detection models face challenges with limited training data and real-world variations. UQ methods, like Monte Carlo Dropout and Ensemble Learning, address these issues by identifying uncertain predictions, allowing expert intervention when needed. This improves trust, interpretability, and decision-making in AI-driven systems.",
    tags: [
      {
        name: "AI",
      },
      {
        name: "Uncertainty Quantification",
      },
      {
        name: "Fraud Detection",
      },
      {
        name: "Defect Detection",
      },
      {
        name: "Monte Carlo Dropout",
      },
      {
        name: "Ensemble Learning",
      },
    ],
  },
};
