export const navigation = [
  {
    id: "1",
    title: "Home",
    path: "/",
  },
  {
    id: "2",
    title: "Projects",
    path: "/projects",
  },
  {
    id: "3",
    title: "Docs",
    path: "/docs",
  },
  {
    id: "4",
    title: "Personal",
    path: "/personal",
  },
  {
    id: "5",
    title: "Contact",
    path: "/contact",
  },
];

export const links = [
  { href: "https://nextjs.org", label: "Next.js" },
  { href: "https://tailwindcss.com", label: "Tailwind CSS" },
  {
    href: "https://github.com/maryamHabibpourr/blogPost",
    label: "Github",
  },
  { href: "https://openai.com", label: "openai" },
  { href: "https://gemini.com", label: "Gemini" },
  { href: "https://shadcn.com", label: "shadcn" },
];

export const projects = [
  {
    id: 4,
    name: "AI Agent",
    year: 2025,
    description:
    "This AI Agent helps users analyze YouTube transcripts, search Google Books, process JSONdata, and retrieve Customer, Order, and Comments data, offering smart insights for better decision-making.",
  
    tags: [
      {
        name: "nextjs-15",
        color: "pink-text-gradient",
      },
      {
        name: "typeScript",
        color: "green-text-gradient",
      },
      {
        name: "convex",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "orange-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "wxflows",
        color: "green-text-gradient",
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
        color: "pink-text-gradient",
      },
      {
        name: "typeScript",
        color: "green-text-gradient",
      },
      {
        name: "convex",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
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
        color: "blue-text-gradient",
      },
      {
        name: "real chat",
        color: "green-text-gradient",
      },
      {
        name: "djangoRestFramework",
        color: "pink-text-gradient",
      },
      {
        name: "postgress",
        color: "orange-text-gradient",
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
        color: "blue-text-gradient",
      },
      {
        name: "leaflet",
        color: "green-text-gradient",
      },
      {
        name: "djangoRestframework",
        color: "orange-text-gradient",
      },
      {
        name: "postGIS",
        color: "pink-text-gradient",
      },
    ],
    source_code_link_front:
      "https://github.com/maryamHabibpourr/AmlakEenoClient-React-LeafLet",
    source_code_link_back:
      "https://github.com/maryamHabibpourr/AmlakeenoApi-Django-DRF",
    website_link: "https://amlakeeno.ir/",
    imageUrl: "/amlakeeno.png",
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "Tehran Air Quality Analysis using PCA & Statistical Methods.",
    source_code_link:
      "https://colab.research.google.com/drive/1kpv_hbl9LqphhyFI3yIGHA8YYg9r7TsN?usp=sharing#scrollTo=c8ukxsy2r-wz",
    dataSet_link:
      "https://drive.google.com/file/d/1S63qEZeCZgpiISsZnyKHsX4tWVVMHPN7/view",
  },
  {
    id: 2,
    title: "Spine Health Analysis using PCA & Statistical Methods.",
    source_code_link:
      "https://colab.research.google.com/drive/1lPqJftCpY2j-AVPUrnDWvP65OJf_GGt4?usp=sharing",
    dataSet_link:
      "https://drive.google.com/file/d/1Iie_agAslzJwCvpyn36ivgXfUK-S8lUh/view",
  },
  {
    id: 3,
    title: "Sentiment Analysis on Digikala Product Reviews.",
    source_code_link:
      "https://colab.research.google.com/drive/1YzEhV8QyE74gPl_SHKlcBwA06kK9QYRK?usp=sharing",
    dataSet_link:
      "https://drive.google.com/file/d/1pi2JXDHHInRT_JPKaVZJ67rXg3HMdFSh/view",
  },
  {
    id: 4,
    title: "Document Layout Analysis & Text Block Segmentation.",
    source_code_link:
      "https://colab.research.google.com/drive/1cvCNNP2_aKOIDxbJsVWfJwmBIoNtOaYn?usp=sharing",
    dataSet_link:
      "https://drive.google.com/file/d/1taK4rKmHQr0v7kqnM-1PqqDZ4x42XppK/view",
  },
];
