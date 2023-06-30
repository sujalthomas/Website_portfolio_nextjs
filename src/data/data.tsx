import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import React, {ReactNode} from 'react';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sujal Thomas Website',
  description: "Sujal Thomas's personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sujal Thomas.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a California based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently looking for new oppurtunities.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me practising <strong className="text-stone-100">trading</strong>,
        strumming my <strong className="text-stone-100">guitar</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Californian Mountains</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'resume_final_2023_ats.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `
  A Software Engineering graduate from San Jose State University, I bring a wealth of practical experience and a strong technical skillset from roles such as Data Analyst, Full Stack Developer, and Tech Lead at the Google Student Developer Club. I thrive in leveraging advanced technologies to tackle real-world problems and am passionate about learning and making a meaningful impact. Currently, I'm enthusiastically seeking new opportunities to further apply and expand my skills.
  `,
  aboutItems: [
    {label: 'Location', text: 'San Jose, CA', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Photography, Trading, Cooking', Icon: SparklesIcon},
    {label: 'Study', text: 'San Jose State University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Looking for oppurtunities', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'Javascript',
        level: 7,
      },
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'TailWind CSS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Spring Boot Java',
        level: 6,
      },
      {
        name: 'Node.js',
        level: 6,
      },
    ],
  },
  {
    name: 'Data Sciene Stack',
    skills: [
      {
        name: 'Tableau / PowerBI',
        level: 7,
      },
      {
        name: 'Flask / Django',
        level: 6,
      },
      {
        name: 'SQL / NoSQL / MongoDB',
        level: 4,
      },
    ],
  },
  {
    name: 'Cloud Stack',
    skills: [
      {
        name: 'Google Cloud Platform',
        level: 9,
      },
      {
        name: ' Docker / Kubernetes',
        level: 6,
      },
      {
        name: ' AWS / Azure',
        level: 5,
      },
    ],
  },
  {
    name: 'Miscellaneous',
    skills: [
      {
        name: 'RabbitMQ / Kafka',
        level: 6,
      },
      {
        name: ' Web Security / OAuth 2.0',
        level: 6,
      },
      {
        name: ' API Gateway / Microservices',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Mock Starbucks App',
    description: 'A mock Starbucks app built using Spring Boot, GCP, and Docker.',
    url: 'https://google.com',
    image: porfolioImage1,
  },
  {
    title: 'Sneak Peak',
    description: 'A Price Comparison App built using React, Node.js, and Tailwind CSS.',
    url: 'https://google.com',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2018 - 2022',
    location: 'San Jose, CA',
    title: 'San Jose State University',
    content: <p>
      <b>Bachelor of Science in Software Engineering & Minor in Mathematics </b>
      <br />
      Electives: Autonomous Robotics, Machine Learning & Big Data, Cyber Security, Mathematical Modelling.
      <br />
      <br />
      Beyond academia, I demonstrated leadership & adaptability as the Tech Lead for the Google Student Developer Club, organizing educational workshops and transitioning club activities to Discord during the pandemic. This role further honed my technical capabilities, particularly in JavaScript programming.
      <br />
    </p>,
  },
];

const BulletPoint = React.memo(({children}: { children: ReactNode }) => (
  <div style={{display: "flex", marginBottom: "10px"}}>
    <div style={{fontWeight: "bold", marginRight: "10px"}}>&bull;</div>
    <div>{children}</div>
  </div>
));

export const experience: TimelineItem[] = [
  {
    date: 'May 2022 - September 2022',
    location: 'Pikky',
    title: 'Data Analyst Intern',
    content: (
      <div>
        <BulletPoint>Engineered a comprehensive data pipeline, leveraging ETL methodologies utilizing Python & SQL to ingest data from diverse sources into a centralized data warehouse, enhancing data accessibility & integrity.</BulletPoint>
        <BulletPoint>Devised & documented a robust data model for the data warehouse, optimizing decision-making processes and establishing a data dictionary to streamline data management & governance.</BulletPoint>
        <BulletPoint>Innovated and deployed a data visualization dashboard using Power BI & Redash, enabling stakeholders to interpret complex data effortlessly and make informed decisions.</BulletPoint>
      </div>
    ),
  },
  {
    date: 'September 2022 - December 2022',
    location: 'Enterprise Software - SJSU',
    title: 'Full Stack Developer',
    content: (
      <div>
        <BulletPoint>Transformed a Node.js app into a Spring MVC-based cashier's app with administrative login capability for Starbucks employees & in-store order processing functionality.</BulletPoint>
        <BulletPoint>Executed a scalable cloud deployment on Google Cloud Platform (GCP) with an external load balancer set up as an ingress for the cashier's app.</BulletPoint>
        <BulletPoint>Set up an internal load balancer for the Starbucks API behind a Kong API Gateway, enhancing security and performance.</BulletPoint>
        <BulletPoint>Incorporated MySQL DB & RabbitMQ as required cloud databases to support complex data transactions.</BulletPoint>
        <BulletPoint>Developed the Starbucks API for mobile app & storefront deployment, integrated with Kong API Gateway & secured with API Key Authentication.</BulletPoint>
        <BulletPoint>Contributed to the entire project cycle, from requirement analysis & application design to deployment and performance testing, ensuring high-quality code and documentation shared on GitHub.</BulletPoint>
        <BulletPoint>Maintained a comprehensive project journal detailing the weekly progress, challenges faced, and solutions implemented.</BulletPoint>
      </div>
    )
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Sujals Friend',
      text: 'Best work ethic and a great team player!',
      image: 'https://i.ibb.co/0hNCL47/bear.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch!',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'sujalt1811@gmail.com',
      href: 'mailto:sujalt1811@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'San Jose CA, USA',
      href: 'https://goo.gl/maps/Q31jGSLByhJ3uF5q8',
    },
    {
      type: ContactType.Instagram,
      text: '@sujal_thomas',
      href: 'https://www.instagram.com/sujal_thomas/',
    },
    {
      type: ContactType.Github,
      text: 'sujalthomas',
      href: 'https://github.com/sujalthomas',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sujalthomas'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/sujal-thomas-tatipelli-b72120161'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/sujal_thomas/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/RenegadeThomas'},
];
