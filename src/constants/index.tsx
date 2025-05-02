import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I’m a Data & Full Stack Engineer who loves turning raw data into real-world impact. From building sleek, dynamic web apps to engineering scalable data pipelines, I thrive at the intersection of data, design, and innovation. I blend Python, SQL, and JavaScript with a dash of Generative AI and ML to modernize workflows and uncover insights that drive smarter decisions. Whether it’s visualizing trends, optimizing backend architecture, or crafting AI-powered solutions, I’m all about solving complex problems in creative, collaborative environments.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "August 2024 - Present",
    role: "Data Analyst Graduate Assistant",
    company: "Violence Abuse and Rape Crisis Centre (VARCC)- Binghamton University",
    description: 'Assisted visitors while managing data collection and analysis to support gender violence prevention initiatives. Developed reports and interactive visualizations with Power BI and Excel to highlight trends in safety incidents and service utilization. Built a data pipeline project to extract and analyze Reddit discussions on domestic violence, generating actionable insights.',
    technologies: ["Excel", "Power BI", "Python", "SQL", "Data Pipeline"],
  },
  {
    year: "May 2024 - August 2024",
    role: "Full Stack Developer Student Assistant",
    company: "Binghamton University Office of Sustainability",
    description: `Built a ReactJS and Flask web application to streamline environmental initiatives and resource management. Enabled bulk data uploads via Excel, reducing inspection time by 40%. Co-developed an admin panel with role-based access and deployed the platform using Firebase and Google Cloud.`,
    technologies: ["ReactJS", "Flask", "Firebase", "Google Cloud", "SQL", "JavaScript", "Python"],
  },
  {
    year: "February 2022 - August 2022",
    role: "Freelancer, Web Developer",
    company: "Gloria Mahila Mandal",
    description: `Designed and developed a responsive static website using HTML, CSS, and Bootstrap to promote women's empowerment and community service initiatives. Enhanced user experience with an intuitive web interface, leading to increased event participation and community engagement.`,
    technologies: ["HTML", "CSS", "SQL", "JavaScript", "Bootstrap", "Responsive Design"],
  },
  
];

export const PROJECTS = [
  {
    title: "Real Time Data Pipeline for Binghamton University Dean of Students Office",
    image: project1,
    description: "Built a real-time data pipeline to monitor domestic violence and sexual assault discussions from Reddit and 4chan using OAuth2 and public APIs. Implemented a scalable Faktory-based architecture and stored over 4.6 million posts in TimescaleDB. Integrated VADER sentiment analysis and ModerateHatespeech toxicity detection to analyze emotional patterns and harmful content, providing actionable insights to support university crisis management and research.",
  technologies: ["Python", "OAuth2", "Faktory", "TimescaleDB", "SQL", "Sentiment-Analysis"],
  },
  {
    title: "Uber like Data Analysis",
    image: project2,
    description:
      "Designed and implemented a scalable data model to analyze Uber ride data, using Python for data cleaning and processing over 10 million records. Deployed processing on Google Cloud and created an interactive dashboard with Mage.ai and BigQuery to visualize user behavior and ride trends.",
    technologies: ["Pandas", "GCC", "BigQuery", "Mage.ai", "Data Modeling", "Data Visualization"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "PostCSS"],
  },
  {
    title: "Amazon Kindle Review Analysis",
    image: project4,
    description:
      "Designed a Flask REST API with efficient endpoints, pagination, and caching for scalable review analysis. Built an interactive Chart.js dashboard for visualizing ratings, sentiment, and trends. Optimized MongoDB queries using indexing and aggregation pipelines, significantly improving data retrieval performance.",
    technologies: ["Flask", "REST API", "Chart.js", "MongoDB", "NoSQL", "JavaScript", "Python"],
  },
];

export const CONTACT = {
  address: "171 1/2, West end Ave, Binghamton, New York, 13905 ",
  phoneNo: "+1(862)-214-5425 ",
  email: "rendell.padu02@gmail.com",
};
