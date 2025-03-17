import {
    mobile,
    backend,
    creator,
    web,
    carrent,
    jobit,
    tripguide,
    maxgen,
    silvertouch,
    ddrops,
    indus,
    cplusplus,
    cshap,
    python,
    java,
    javascript,
    tensorflow,
    pandas,
    keras,
    pytorch,
    scikitlearn,
    aws,
    gcp,
    azure,
    docker,
    kubernates,
    nodejs,
    reactjs,
    express,
    django,
    git,
    jira,
    mongodb,
    mysql,
    dynamodb,
    firebase
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Power Apps & Power Automate Specialist",
        icon: creator,
    },
    {
        title: "AI & Machine Learning Engineer",
        icon: mobile,
    },
    {
        title: "Cloud Solutions Developer",
        icon: backend,
    },
    {
        title: "Web Developer",
        icon: web,
    },
    // {
    //     title: "Backend Developer",
    //     icon: backend
    // }
];

// constants.js

export const certificates = [
    {
        title: "Blockchain Developer",
        issuedBy: "Silver Touch Pvt. Ltd",
        date: "2019",
        link: "https://drive.google.com/file/d/1BGAA7rS8X90XtyAGWPLZHhVqN_Mlkqrf/view", // Optional
    },
    {
        title: "Python Beginner and Advanced",
        issuedBy: "Udemy",
        date: "2019",
        link: "https://drive.google.com/file/d/1B9lABWYyIHqQBNMGujMhW2NL10-BkCIX/view", // Optional
    },
    {
        title: "Python with Machine Learning",
        issuedBy: "MaxGen Technologies Pvt. Ltd",
        date: "2020",
        link: "https://drive.google.com/file/d/18lkHROAMMgLAbHbotNkOkbe5EJsPFfET/view", // Optional
    },
    {
        title: "B.Tech Degree",
        issuedBy: "Indus University",
        date: "2020",
        link: "https://drive.google.com/file/d/16T7AUyJ8WkjUxYvPsfN1hhp2M2-GBrel/view", // Optional
    },
    {
        title: "Post-Graduation Degree",
        issuedBy: "Centennial College",
        date: "2023",
        link: "https://drive.google.com/file/d/16H29sc4Aq_0kjtWIwPcFaaOX5ET_BwBC/view", // Optional
    },
];

const technologies = [
    {
        name: "C++",
        icon: cplusplus,
    },
    {
        name: "C#",
        icon: cshap,
    },
    {
        name: "Python",
        icon: python
    },
    {
        name: "Java",
        icon: java
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TensorFlow",
        icon: tensorflow,
    },
    {
        name: "Pandas",
        icon: pandas,
    },
    {
        name: "Keras",
        icon: keras,
    },
    {
        name: "PyTorch",
        icon: pytorch,
    },
    {
        name: "Scikit-Learn",
        icon: scikitlearn,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "GCP",
        icon: gcp,
    },
    {
        name: "Azure",
        icon: azure,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "Kubernetes",
        icon: kubernates,
    },
];


// const technologies = [

//    
//    
//     
//     
//    
//    
//     {
//         name: "React.js",
//         icon: reactjs,
//     },
// {
//         name: "Node.js",
//         icon: reactjs,
//     },
//    
//     {
//         name: "Express",
//         icon: express,
//     },
//     {
//         name: "Django",
//         icon: django,
//     },
//     {
//         name: "GIT",
//         icon: git,
//     },
//     {
//         name: "JIRA",
//         icon: jira,
//     },
//     {
//         name: "MongoDB",
//         icon: mongodb,
//     },
//     {
//         name: "MySQL",
//         icon: mysql,
//     },
//     {
//         name: "DynamoDB",
//         icon: dynamodb,
//     },
//     {
//         name: "Firebase",
//         icon: firebase,
//     },
// ];

const experiences = [
    {
        title: "Quality Documentation Administrator and Programmer",
        company_name: "Ddrops Company",
        icon: ddrops,
        iconBg: "#383E56",
        date: "June 2023 - Present",
        points: [
            "Ancova Analysis using Python and ML concepts for covariance analysis",
            "Azure Database Management and Administration across organization",
            "Application and Software Development with GMP standards"],
    },
    {
        title: "Software Data Engineer",
        company_name: "MaxGen Technologies",
        icon: maxgen,
        iconBg: "#E6DEDD",
        date: "Jan 2020 - March 2022",
        points: [
            "Worked with AI and Model Training using Python",
            "Developed face recognition attendance system using OpenCV",
            "ETL data processing and visualization with PowerBI"],
    },
    {
        title: "Blockchain Developer Intern",
        company_name: "Silver Touch Pvt. Ltd",
        icon: silvertouch,
        iconBg: "#383E56",
        date: "June 2019 - Dec 2019",
        points: [
            "Learned Ethereum architecture and Solidity language",
            "Developed smart contract for voting system",
            "Created frontend with React.js and Web3.js integration"],
    },
    {
        title: "Student Volunteer",
        company_name: "Indus University",
        icon: indus,
        iconBg: "#E6DEDD",
        date: "2016 - 2020",
        points: ["Served as an examination invigilator, maintaining academic integrity during university exams",
            "Organized and led student activities and events to foster community engagement",
            "Coordinated with faculty and students to facilitate smooth conduct of academic activities"],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };