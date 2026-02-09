"use client";
import { CustomCursor } from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Achievements from "../components/Acheivements";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

/**
 * PORTFOLIO DATA
 */
export const portfolioData = {
  profile: {
    name: "Sivasankar Sivalingam",
    title: "Senior Frontend Lead | React | Angular",
    contact: {
      phone: "+91-9789648965",
      email: "sivasankar.mahesh065@gmail.com",
      linkedin: "https://linkedin.com/in/sivasankarsivalingam",
      location: "Chennai, India",
    },
    summary:
      "A results-oriented professional with over 10 years of experience in delivering robust web applications, possessing a diversified skillset within the frontend ecosystem. Demonstrates proficiency in providing effective technical leadership to transform complex requirements into innovative digital solutions. Experienced in developing applications using a micro-frontend design pattern and implementing a design system for common UI components. Adept in requirement analysis, effort estimation, stakeholder management, and cross-functional collaboration. Highly adaptive to the Agile Scrum methodology.",
  },
  experience: [
    {
      role: "Senior Associate",
      company: "Cognizant",
      dates: "Dec 2022 to Present",
      duration: "3 yrs 2 mos",
      client_project: "Verizon, US / Assisted applications",
      tech_stack: ["HTML5", "CSS3", "React", "Redux", "MFE", "Design System"],
      responsibilities: [
        "Led the design and development of responsive, high-performance web applications for Assisted channels, ensuring scalability and maintainability.",
        "Defined frontend architecture and drove seamless API integrations to translate complex business requirements into robust technical solutions.",
        "Conducted in-depth code reviews, enforced quality standards, and implemented automated testing strategies for reliable, production-ready codebases.",
        "Optimized application performance, accessibility, and cross-browser compatibility to deliver robust user experiences.",
        "Championed Agile practices through sprint planning, backlog grooming, and daily stand-ups, aligning delivery with business objectives.",
        "Explored and integrated Generative AI tools to streamline development workflows, automate repetitive tasks, and boost team productivity.",
      ],
    },
    {
      role: "Technical Lead",
      company: "HCL",
      dates: "Dec 2020 to Dec 2022",
      duration: "2 yrs 1 mo",
      client_project: "Roche, US & Switzerland / Learn & Digital Lab",
      tech_stack: [
        "HTML5",
        "CSS3",
        "Material UI",
        "Angular",
        "React",
        "Redux",
        "GQL",
      ],
      responsibilities: [
        "Partnered with cross functional stakeholders to analyze requirements and propose efficient, scalable UI solutions aligned with product architecture roadmap.",
        "Defined and maintained technical solutions, ensuring adherence to architectural standards and best practices for frontend development.",
        "Led development of responsive, reusable, and testable UI components, optimizing performance and ensuring accessibility compliance.",
        "Provided technical guidance for rapid Proof of Concept implementations to validate business requirements to bring in pilot projects.",
        "Conducted code reviews, enforced coding standards, and mentored team members to improve code quality and development efficiency.",
        "Managed defect triage processes, driving timely resolution and maintaining high product stability and user experience.",
      ],
    },
    {
      role: "Information Technology Analyst",
      company: "TCS",
      dates: "Mar 2015 to Dec 2020",
      duration: "5 yrs 10 mos",
      client_project: "Delta Airlines, US / FlightStatus, MyTrips",
      tech_stack: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "TypeScript",
        "Angular",
        "RxJS",
      ],
      responsibilities: [
        "Collaborated with stakeholders to analyze requirements and delivered user stories.",
        "Developed functional, responsive and reusable UI modules adhering to design patterns and compliant with WCAG accessibility standards.",
        "Implemented API integrations and content services for dynamic data rendering, ensuring seamless user experience across browsers.",
        "Authored and managed content in Author instance while maintaining coding standards and conducting peer code reviews for quality assurance.",
        "Documented manual test cases, wrote unit tests, and performed bug fixing and refactoring to improve code reliability and maintainability.",
        "Contributed to coding standards checklist and trained team members to enhance best practices and development efficiency.",
      ],
    },
  ],
  skills: {
    technical: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Material UI",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux Saga",
      "Angular",
      "RxJS",
      "Jasmine",
      "Jest",
      "Responsive Web Designing",
      "Browser Compatibility",
      "AX Accessibility",
    ],
    tools: [
      "Gitlab",
      "VS Code",
      "Jira",
      "Confluence",
      "Jenkins",
      "SonarQube",
      "Junit",
      "Storybook",
      "NVDA - Accessibility",
      "Kibana",
      "Postman",
    ],
    generative_ai: [
      "Prompt Engineering",
      "GitHub Copilot",
      "Cursor",
      "Gemini",
      "Figma MCP",
    ],
    soft_skills: [
      "Design Thinking",
      "Project Management",
      "Leadership",
      "Business Continuity",
      "Agile",
    ],
  },
  certifications: [
    {
      name: "Angular Developer",
      issuer: "Edureka",
      certificate_id: "AY6HZ487",
    },
    {
      name: "Specialist Programming in HTML5 with JavaScript & CSS3",
      issuer: "Microsoft",
      certificate_id: "F642-5791",
    },
    {
      name: "Bootstrap Developer",
      issuer: "W3schools",
      certificate_id: "10438687",
    },
  ],
  achievements: [
    "Vibe Coding: Honored to be a part of Cognizant's Guinness World Records™ title achievement.",
    "Completed HCL ACE program on building UI KIT Library using Web Components.",
    "Won Innovation Pride Award in Delta 5K Innovation Challenge.",
    "Won Special Jury Mention Award in Digital Exponential challenge conducted by TCS Research and Innovation Team.",
    "Generated multiple pilot projects through TCS TTH Innovation Program using Design Thinking.",
  ],
};

/**
 * MAIN APP COMPONENT
 */

const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white cursor-none">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
};

export default Landing;
