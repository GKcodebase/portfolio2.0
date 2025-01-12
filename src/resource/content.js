// Data to customise page
export const links = [
    {
        href: "https://www.linkedin.com/in/gk-gokul/details/certifications/",
        title: "Certifications",
        description: "Courses and Certifications.",
    },
    {
        href: "https://www.linkedin.com/in/gk-gokul/overlay/contact-info/",
        title: "Contact",
        description: "gokulgk1200@gmail.com",
    },
    {
        href: "/Gokul_SDE.pdf",
        title: "Resume",
        description: "Latest Resume.",
    },
];

export const urls = {
    github: {
        name: "github",
        url: "https://github.com/GKcodebase"
    },
    linkedIn: {
        name: "linkedIn",
        url: "https://www.linkedin.com/in/gk-gokul/"
    }
}
import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Gokul',
    lastName: 'GopalaKrishnan Kumari Renuka (G.K) ',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Software Developer',
    avatar: '/profile.jpg',
    location: '',
    languages: []
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/GKcodebase',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedIn',
        link: 'https://www.linkedin.com/in/gk-gokul/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:gokul.gk@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Sesoned developer and project Manager</>,
    subline: <>Software Development Engineer with 5 years of experience at <InlineCode>Thermo Fisher Scientific</InlineCode> and <InlineCode>Walmart</InlineCode>.<br />
        Currently pursuing my <InlineCode>Master's</InlineCode> in IT Management at <InlineCode>UT Dallas</InlineCode>,hoping to become a technical program manager, bridging engineering,business and project teams.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>  Software Engineer with 5+ years of experience designing innovative solutions, developing and testing distributed systems, edge computing, cloud platforms, and desktop applications. Expertise in Java, Spring Boot, Microservices, AWS, Azure, React/Next.js, and team management. I possess strong communication, problem-solving, and adaptability skills and have a proven track record in leading and managing teams.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Walmart',
                timeframe: 'July 2022 - September 2024',
                role: 'Software Devlopment Enginner 3',
                location: 'Bengaluru, India',
                achievements: [
                    <>Worked as a Full stack software developer and scrum master for a Digital messaging platform, an Asynchronous versatile messaging service for Walmart Health and Wellness </>,
                    <>&nbsp;&nbsp;&nbsp;1.Developed a distributed log tracing system, which reduced the debugging time by 60%.</>,
                    <>&nbsp;&nbsp;&nbsp;2.Conceptualized design with Figma wireframe, and developed a one-click UI tool that reduced onboarding new message time by 70%; learned NextJs from scratch.</>,
                    <>&nbsp;&nbsp;&nbsp;3.As a scrum master at Walmart (an additional role taken for three quarters), led the team to increase velocity by 30%, reduced slippages, and was recognized with the BRAVO award.</>,
                    <>&nbsp;&nbsp;&nbsp;4.Worked with project managers, product owners, and business and engineering teams and streamlined scrum, agile processes, SDLC, and deliverables, reducing spillover by 20%</>
                ],
                images: [
                    {
                        src: '/walmart.gif',
                        alt: 'Walmart India',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Thermofisher Scientific',
                timeframe: 'July 2019 - July 2022',
                role: 'Software Engineer',
                location: 'Bengaluru, India',
                achievements: [
                    <><b>Project</b>: LabEdge, edge computing project: Connecting devices in the lab to the cloud via physical device.</>,
                    <>&nbsp;&nbsp;&nbsp;Designed AWS-based Gateway and device management system, increasing efficiency by 30%</>,
                    <>&nbsp;&nbsp;&nbsp;Developed a secure login and file transfer system.</>,
                    <><b>Project</b>: Connect Transfer, Desktop based IoT application</>,
                    <>&nbsp;&nbsp;&nbsp;Implemented file transfer system, which was used in 90% of Thermofisher labs during COVID-19</>,
                    <>&nbsp;&nbsp;&nbsp;Integrated various devices and protocols with AWS, increasing the user base by 40%</>

                ],
                images: [
                    {
                        src: '/cert/TF-innovation.png',
                        alt: 'ThermoFisher',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/cert/TF-intensity.png',
                        alt: 'ThermoFisher',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/cert/TF-involvement.png',
                        alt: 'ThermoFisher',
                        width: 16,
                        height: 9
                    }

                ]
            }
        ]
    },
    education: {
        display: true,
        title: 'Education',
        institutions: [
            {
                name: 'University of Texas at Dallas',
                description: <>MS in Information Technolgy and Management</>,
                timeframe: 'August 2024 - Present',
                location: 'Dallas, Texas',

            },
            {
                name: 'National Institute of Technology',
                description: <>B.Tech in Computer Engineering</>,
                timeframe: 'July 2015 - July 2019',
                location: 'Calicut, India'
            }
        ]
    },
    skills:{
        display: true,
        title: 'Skills and Certifications',
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
}

const projects = {
    label: 'projects',
    title: 'My projects',
}

export { person, social, home, about, blog, projects };

export const structure = [
    {
        title: about.intro.title,
        display: about.intro.display,
        items: []
    },
    {
        title: about.education.title,
        display: about.education.display,
        items: about.education.institutions.map(institution => institution.name)
    },
    {
        title: about.work.title,
        display: about.work.display,
        items: about.work.experiences.map(experience => experience.company)
    },{
        title: about.skills.title,
        display: about.skills.display,
        items:[] 
    }
];

export const skills = [
    { category: "Programming Languages", items: ["Java", "Python", "JavaScript", "C", "C++", "NodeJs", "SQL", "HTML", "CSS", "R"] },
    { category: "APIs", items: ["RESTful APIs","Fast API"] },
    { category: "Frameworks and Libraries", items: ["Spring Boot", "React", "Angular", "Kafka", "Spark", "Hive", "Hibernate", "Jax-Rs"] },
    { category: "DevOps Tools", items: ["Docker", "Kubernetes", "Jenkins", "Git", "Github", "CI/CD" ,"Promethus","Grafana"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "H2", "Amazon DynamoDB", "Azure Cosmos"] },
    { category: "Software Development Methodologies", items: ["Agile", "Scrum", "Jira", "Project management" ,"MS Project"] },
    { category: "Testing and Debugging", items: ["JUnit", "Selenium", "JMeter", "Performance Testing", "Postman", "Debugging", "Manual Testing"] },
    { category: "Cloud Platforms", items: ["AWS", "Azure", "Walmart cloud-native platform"] },
    { category: "Soft Skills", items: ["Communication", "Teamwork", "Problem-Solving", "Adaptability", "Team Management", "Attention to Detail", "Critical Thinking", "Creativity", "Innovation"] }
];

export const certifications = [
    {
        title: "Google Project Management",
        issuer: "Google",
        date: "Jul 2024",
        credentialId: "BEVAXXFRJWQD",
        skills: ["Project Documentation", "Project Management Software", "Agile Project Management", "Agile Methodologies", "Microsoft Excel", "Cost-Benefit Analysis", "Capacity Planning", "Planning & Scheduling", "Engineering Management"],
    },
    {
        title: "Architecting Solutions on AWS",
        issuer: "Amazon Web Services (AWS)",
        date: "Jun 2024",
        credentialId: "ZFNEA9PNY24E",
        skills: ["Cloud Computing", "Amazon Web Services (AWS)"],
    },
    {
        title: "AWS Cloud Technical Essentials",
        issuer: "Amazon Web Services (AWS)",
        date: "Apr 2024",
        credentialId: "N3RDMDRBV45W",
        skills: ["Software Design", "Amazon Web Services (AWS)"],
    },
    {
        title: "Next.js - The ultimate way to build React apps",
        issuer: "Educative",
        date: "Mar 2023",
        credentialId: "lp31Gmn3v0xFk7qWpvXrPLIgQ6mg8QjXqFM",
        skills: ["UI devlopment", "Next.js"],
    },
    {
        title: "Apache Kafka Essential Training: Getting Started",
        issuer: "LinkedIn",
        date: "Nov 2022",
        skills: ["Apache Kafka"]
    },
    {
        title: "Artificial Intelligence A-Z™: Learn How To Build An AI",
        issuer: "Noble Work Foundation",
        date: "Jul 2022",
        credentialId: "UC-557fe056-ab02-4875-b170-01f87d420583",
        skills: ["Artificial Intelligence (AI)"],
    },
    {
        title: "Deep Learning Specialization",
        issuer: "DeepLearning.AI",
        credentialId: "4f8c3cffcacbdf9de7f3b9cdc3eacaf2",
        skills: ["Deep Learning"],
    }
];


