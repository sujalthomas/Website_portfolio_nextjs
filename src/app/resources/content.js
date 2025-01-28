import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Sujal",
  lastName: "Thomas",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Software Engineer",
  avatar: "/images/profilepic.webp",
  location: "America/Los_Angeles",
  languages: {
    main: ["English", "Hindi", "Spanish"],
    details: [
      { name: "English", level: "Native", icon: "check-circle" },
      { name: "Hindi", level: "Native", icon: "check-circle" },
      { name: "Telugu", level: "Native", icon: "check-circle" },
      { name: "Kannada", level: "Fluent", icon: "star" },
      { name: "Spanish", level: "Conversational", icon: "message" },
      { name: "Tamil", level: "Conversational", icon: "message" },
      { name: "French", level: "Basic", icon: "circle" },
    ],
  },
  displayLocation: "San Jose, CA",
  nationality: "Indian",
  education: "San Jose State University",
  employment: "Looking for opportunities",
  interests: ["Photography","Tech", "Options", "Cars"],
  profileIcons: {
    location: "globe",
    nationality: "flag",
    education: "academic",
    interests: "star",
  },
};

const newsletter = {
  display: true,
  title: <>Schedule a Consultation</>,
  description: (
    <>
      Looking to discuss a potential project or collaboration? I'd love to hear about your ideas 
      and explore how we can work together to bring them to life.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sujalthomas",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sujal-thomas-tatipelli-b72120161/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/RenegadeThomas",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:sujalt1811@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Full Stack Software Engineer crafting innovative digital solutions`,
  headline: <>Building Tomorrow's Web Today</>,
  subline: (
    <>
      Hi, I'm {person.lastName} - a <InlineCode>Full Stack Engineer</InlineCode> passionate about creating impactful 
      digital experiences. Based in <InlineCode>California</InlineCode>, I combine technical expertise with creative 
      problem-solving to build <InlineCode>robust, user-centric applications</InlineCode>.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "YOUR_RESUME_LINK",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        As a Full Stack Software Engineer with a strong foundation in both frontend and backend development,
        I specialize in building scalable web applications and AI-powered solutions. My experience spans
        from leading technical teams to developing innovative SaaS platforms, with a particular focus on
        performance optimization and user experience.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "MyOfLink",
        timeframe: "June 2024 - Present",
        role: "Chief Technology Officer",
        achievements: [
          <>
            Designed and deployed a SaaS Link Management Platform using Next.js 15, TypeScript, & Tailwind CSS,
            achieving a 98+ Lighthouse score with 30% faster load times.
          </>,
          <>
            Engineered an advanced deep-linking solution for major social platforms, significantly improving
            user engagement and conversions.
          </>,
          <>
            Developed a real-time analytics dashboard and integrated secure payment systems using Stripe
            with automated billing cycles.
          </>,
        ],
        images: [],
      },
      {
        company: "Stu Biz Solutions",
        timeframe: "July 2023 - July 2024",
        role: "Junior Data Scientist",
        achievements: [
          <>
            Developed an AI-powered HR chatbot using DeBERTa for advanced sequence classification
            and sophisticated text processing techniques.
          </>,
          <>
            Implemented advanced NLP models including Text Classification, NER, and POS Tagging to
            enhance chatbot response capabilities.
          </>,
        ],
        images: [],
      },
      {
        company: "Pikky",
        timeframe: "January 2023 - June 2023",
        role: "Data Science Intern",
        achievements: [
          <>
            Developed a collaborative filtering algorithm improving food recommendations by 22%
            using Python and TensorFlow.
          </>,
          <>
            Created interactive data visualizations using PowerBI to drive product development decisions.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "San Jose State University",
        description: <>Bachelor of Engineering in Software Engineering with a Minor in Mathematics. 
        Focused on Machine Learning, Big Data, Cyber Security, and Autonomous Robotics.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Languages & Core Technologies",
        description: <>Proficient in TypeScript, JavaScript, Python, Java, R, SQL, Shell scripting, and Solidity. Strong foundation in HTML and CSS frameworks like Tailwind.</>,
        images: [],
      },
      {
        title: "Frontend Development",
        description: <>Expert in React ecosystem with Next.js, incorporating modern practices like SSR and React Server Components. Experience with UI libraries including Radix UI, Framer Motion, and data visualization tools like Nivo & ReCharts.</>,
        images: [],
      },
      {
        title: "Backend Development",
        description: <>Extensive experience with Node.js, Python (Flask/Django), Java (Spring Boot), and database systems. Proficient in API development, authentication systems, and message queuing (RabbitMQ).</>,
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: <>Advanced knowledge of Docker, Kubernetes, GCP (including VertexAI), and AWS. Experience with CI/CD pipelines and infrastructure management.</>,
        images: [],
      },
      {
        title: "AI & Data Science",
        description: <>Skilled in Machine Learning frameworks (TensorFlow, LangChain), NLP (DeBERTa, BERT), and data analysis using Python ecosystem (Pandas, NumPy). Experience with BI tools like Tableau, PowerBI, and Redash.</>,
        images: [],
      },
      {
        title: "Tools & Platforms",
        description: <>Proficient with Jira, Figma, Git, OpenAI APIs, Zapier, Redis, Maven, and Selenium. Experience with API Gateways and various authentication systems.</>,
        images: [],
      },
    ],
  },
  profile: {
    display: true,
    fields: [
      {
        label: "Location",
        value: person.displayLocation,
        icon: person.profileIcons.location,
        variant: "location",
      },
      {
        label: "Nationality",
        value: person.nationality,
        icon: person.profileIcons.nationality,
      },
      {
        label: "Study",
        value: person.education,
        icon: person.profileIcons.education,
      },
      {
        label: "Interests",
        value: person.interests.join(", "),
        icon: person.profileIcons.interests,
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
