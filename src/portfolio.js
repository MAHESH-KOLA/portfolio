import { faPython, faJava, faSquareGit, faEnvira, faReact, faHtml5, faCss3Alt, faJs, faBootstrap, faGithub, faNodeJs, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

// Website related settings
const settings = {
  isSplash: false,
};


// SEO Related Settings

const seo = {
    title: "Maahi's Protfolio",
    discription: 
        "A Full Stack Web Developer, Competitive Programmer, Graphic Designer & UI/UX Designer. Skilled in designing, building & maintaining highly scalable and available software applications.",
    og: {
        title: "Mahesh Kola Portfolio",
        type: "website",
        url: "",

    },
}


//Home Page 

const greeting = {
    title : "Mahesh Kola",
    logo_name: "MaheshKola",
    subTitle: "A Full Stack Web Developer with strong communication abilities and proficiency in DSA. Skilled in designing, building & maintaining highly scalable and available software applications.",
    resumeLink: "https://drive.google.com/file/d/1F-AWhW8VTQiZ4jswLjyMAQjeLAfDVM7G/view",
    portfolio_repository: "https://github.com/MAHESH-KOLA",
    githubProfile: "https://github.com/MAHESH-KOLA",
};


// Soical Media Links 

const socialMediaLinks = [

    {
        name: "Gmail",
        link: "mailto:maheshkolaa@gmail.com",
        fontAwesomeIcon: "fa-google",
        backgroundColor: "#D14836",
    }, 

    {
        name: "Github",
        link: "https://github.com/MAHESH-KOLA",
        fontAwesomeIcon: "fa-github",
        backgroundColor: "#181717",
    }, 

    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/mahesh-kola-588659248/",
        fontAwesomeIcon: "fa-linkedin-in",
        backgroundColor: "#0077B5",
    }, 

    {
        name: "Instagram",
        link: "https://www.instagram.com/_maa_hi7/",
        fontAwesomeIcon: "fa-instagram",
        backgroundColor: "#E4405F",
    }, 
];


// Skills

const skills = {
    data: [
        {
            title: "Full Stack Development",
            fileName: "FullStackImg",
            skills: [
                "Developing responsive website frontends with React, utilizing HTML, CSS, and JavaScript for dynamic user interfaces.",
                "Developing highly scalable and maintainable REST APIs exclusively using Node.js and Express.",
                "Integrating databases like MySQL, MongoDB, and PostgreSQL into application backends for optimal functionality.",
                "Utilizing Git and GitHub for version control, ensuring efficient collaboration and code management in projects.",
            ],

            

        softwareSkills: [
            {
                skillName: "HTML5",
                fontAwesomeClassname: faHtml5,
                style: {
                    color: "#E34F26",
                },
            },
            {
                skillName: "CSS",
                fontAwesomeClassname: faCss3Alt,
                style: {
                    color: "#1572B6",
                },
            },
            {
                skillName: "JavaScript",
                fontAwesomeClassname: faJs,
                style: {
                    backgroundColor: "#000000",
                    color: "#F7DF1E",
                },
            },
            {
                skillName: "BootStrap",
                fontAwesomeClassname: faBootstrap,
                style: {
                    color: "#009CFF",
                },
            },
            {
                skillName: "ReactJS",
                fontAwesomeClassname: faReact,
                style: {
                    color: "#61DAFB",
                },
            },
            {
                skillName: "GitHub",
                fontAwesomeClassname: faGithub,
                style: {
                    backgroundColor: "transparent",
                },
            },

            {
                skillName: "Git",
                fontAwesomeClassname: faSquareGit,
                style: {
                    color: "#FF7900",
                },
            },
            {
                skillName: "NodeJS",
                fontAwesomeClassname: faNodeJs,
                style: {
                    color: "#339933",
                },
            },

            {
                skillName: "MongoDB",
                fontAwesomeClassname: faEnvira,
                style: {
                    color: "#52A74B",
                },
            },
            {
                skillName: "Java",
                fontAwesomeClassname: faJava,
                style: {
                    color: "#52A74B",
                },
            },
            
            {
                skillName: "MySQL",
                fontAwesomeClassname: faDatabase, 
                style: {
                    color: "#2C8EBB",
                },
            },
            {
                skillName: "NPM",
                fontAwesomeClassname: faNpm,
                style: {
                    color: "#CB3837",
                },
            },
        ],


        },

        {
            title: "Data Structures and Algorithms",
            fileName: "ProblemImg",
            skills: [
                "Actively solving Data Structures and Algorithms (DSA) problems consistently.",
                "Regularly tackling LeetCode's Problem of the Day and GeeksforGeeks' Problem of the Day (POTD).",
                "Continuously learning from problems outlined in the Striver's sheet (TakeUForward).",
                "Actively participating in coding contests on platforms like CodeChef, Codeforces, LeetCode, GeeksforGeeks.",
                "Solved over 500+ problems on LeetCode with a strong understanding of algorithms. Ranked 4th in university on GeeksforGeeks and a 3-star coder on CodeChef."
            ],

            softwareSkills: [],

        },
    ],
};


// Experience

const experience = {
    title: "Experience",
    subtitle: "Internship and Volunteership",
    description: "Currently working on a real-time project and have developed various applications, including a social media dashboard, quote generator, and chat application. These experiences have honed my skills as a full stack developer, giving me proficiency in front-end and back-end technologies. Collaborated effectively with teams, demonstrating strong project management and technical expertise. Actively participated in all college events and served as the technical team coordinator for the recent farewell party. Demonstrated strong leadership and organizational skills in event management.",
    header_image_path: "experience.svg",
    sections: [
        {
            title: "Internships",
            experiences: [
                {
                    title: "Full Stack Web Developer Intern",
                    company: "ShapeCoach",
                    company_url: "#",
                    logo_path: "shapefit-logo.png",
                    duration: "May 2024 - Present",
                    location: "Remote Internship",
                    description: "Currently working on a real-time team project, ShapeFit, a gym application using TypeScript, Ant Design, and MobX for state management. Developing the backend with Java Spring Boot and managing version control with Git. Collaborating closely to ensure seamless integration and functionality.",
                    color: "#ee3c26",
                },
                {
                    title: "NLP Intern",
                    company: "International Institute of Information Technology",
                    company_url: "https://www.iiit.ac.in/",
                    logo_path: "iiith_logo.jpeg",
                    duration: "March 2023 - June 2023",
                    location: "Remote Internship",
                    description: `I participated in the three month long Remote Internship program offered by IIIT-Hyderabad. During this Internship program, I attend a course titled "Introduction to NLP”, Made a contribution to the ”Human Annotated Headline Classification Dataset
Creation” task for Telugu language.`,
                    color: "#ee3c26",
                },
                {
                    title: "Full Stack Web Developer Intern",
                    company: "Techplement",
                    company_url: "https://techplement.com/",
                    logo_path: "techplement_logo1.png",
                    duration: "May 2024 - June 2024",
                    location: "Remote Internship",
                    description: "Worked on a social media dashboard and a quote generator during my internship, enhancing my full stack development skills. Gained experience in front-end and back-end technologies, improving my ability to create dynamic, responsive applications. Collaborated with team members to deliver high-quality projects.",
                    color: "#ee3c26",
                },

                
            ]
        },

        {
            title: "volunteerships",
            experiences: [
                {
                    title: "Web Casting Person",
                    company: "Election Commission of India",
                    company_url: "https://eci.gov.in/",
                    logo_path: "eci.jpg", 
                    duration: "30 November 2023", 
                    location: "Telangana",
                    description: "Volunteered for the Election Commission of India during the Telangana Assembly elections as a Web Casting Person, contributing to the smooth conduct of the electoral process.",
                    color: "#4285F4", 
                }
            ],

        }
    ],
}

// Competitive Sites

const competitiveSites = {
    comptetitiveSites: [
        {
            siteName: "Leetcode",
            iconifyClassName: "simple-icons:leetcode",
            style: {
                color: "#E35B00",
            },
            profileLink: "https://leetcode.com/u/mahesh_kola/",
        },

        {
            siteName: "Geeks For Geeks",
            iconifyClassName: "simple-icons:geeksforgeeks",
            style: {
              color: "#2EC866",
            },
            profileLink: "https://www.geeksforgeeks.org/user/maheshk1t9s/",
        },

        {
            siteName: "Codechef",
            iconifyClassName: "simple-icons:codechef",
            style: {
              color: "#5B4638",
            },
            profileLink: "https://www.codechef.com/users/mahesh_kola",
        },
        
    ],
};

const degrees = {
    degrees: [
        {
            title: "Rajiv Gandhi University of Knowledge Technologies-Basar",
            subtitle: "Computer Science and Engineering",
            logo_path: "rgukt.jpg",
            alt_name: "Rgukt Logo",
            duration: "2021 - 2025",
            descriptions: [
                "Current CGPA -- 8.9 CGPA.",
                "I have acquired foundational knowledge in various aspects of Computer Science and Engineering through courses such as Object Oriented Programming through Java, Data Structures and Algorithms, Design and Analysis of algorithms,  Computer Networks, Operating Systems and Database Management Systems during my B.Tech in Computer Science and Engineering.",
                "I have gained proficiency in Javascript and technologies such as React.js, Node.js, Express.js, and MongoDB.",
                "I have gained the basic knowledge of Latex, Beamer, PHP."
            ],

            website_link: "https://www.rgukt.ac.in/",
        },

        {
            title: "Rajiv Gandhi University of Knowledge Technologies-Basar",
            subtitle: "Pre-University Course",
            logo_path: "rgukt.jpg",
            alt_name: "Rgukt Logo",
            duration: "2019 - 2021",
            descriptions: [
                "CGPA -- 9.7 CGPA.",
                "I have acquired fundamental understanding in subjects including Mathematics, Physics, Chemistry, English, and Computer Science, providing a strong academic foundation for my engineering pursuits.",
                "I have gained proficiency in technologies such as HTML, CSS",
            ],

            website_link: "https://www.rgukt.ac.in/",
        },

        {
            title: "Zilla Parishad High School, Dharmapuri",
            subtitle: "Secondary School Certificate (SSC)",
            logo_path: "ZPHS1.png",
            alt_name: "Rgukt Logo",
            duration: "2009 - 2019",
            descriptions: [
                "CGPA -- 10 CGPA",
                " I accumulated essential knowledge in various subjects like Math, Science, Social Studies, Languages, and Moral Education, which formed the basis for my future studies.",
            ],

            website_link: "",
        },

        
    ],
};

// Certifications

const certifications = {
    certifications: [
        

        {
            title: "Remote Internship",
            subtitle: "Human Annotated Headline Classification Dataset Creation",
            description: "Learned basic Python and Natural Language Processing (NLP).",
            logo_path: "iiit_logo.png",
            certificate_link: "https://drive.google.com/file/d/1UO0IHZSVjeqBwtE6-afJjDEm8MDuBtsK/view",
            alt_name: "IIIT Hyderabad logo",
            color_code: "0C9D5899",
        },


        {
            title: "Intern, Techplement",
            subtitle: "Full Stack Development Projects",
            description: "Worked on Social Media Dashboard and Quote Generator.",
            logo_path: "techplement_logo1.png",
            certificate_link: "https://drive.google.com/file/d/1UUD-BNUWmvsJJYEbfqF69QLH-p4VrdTm/view",
            alt_name: "IIIT Hyderabad logo",
            color_code: "0C9D5899",
        },

        {
            title: "Edureka's Demo Session",
            subtitle: "Attended session on Full Stack Development",
            description: "Learnt and explored the fundamentals of full stack development.",
            logo_path: "edureka.png",
            certificate_link: "https://drive.google.com/file/d/1UaBfem29oCzWL3gFX1K9jrs9stSR1tKC/view?usp=drivesdk",
            alt_name: "IIIT Hyderabad logo",
            color_code: "0C9D5899",
        },

    ],
};


// Projects Page

const projectsHeader = {
    title: "Projects",
    description: "In my projects, I utilized a diverse range of modern technology tools. My expertise lies in creating Full Stack Web Applications. Feel free to explore the projects on my GitHub profile for further insights.",
    avatar_image_path: "",
};

// Contact Page 

const contactPageData = {
    constactSection: {
        title: "Contact Me",
        profile_image_path: "my_pic1.png",
        description: "Feel free to reach out to me on any social media platform. I will reply within 24 hours. I'm well-versed in MERN stack development and strong in Data Structures and Algorithms. I'm here to assist you with MERN stack, DSA and various other tech-related queries.",
    },

    addressSection: {
        title: "Address",
        subtitle: "Nerella, Jagtial, Telangana - 505454",
        avatar_image_path: "Navigation-pana.png",
        location_map_link: "https://www.google.com/maps/place/Nerella,+Telangana+505454/@18.9215837,79.0228745,16z/data=!3m1!4b1!4m6!3m5!1s0x3bcd41da9805cc15:0x6b6dd89b3df9d8e9!8m2!3d18.9224022!4d79.0291903!16s%2Fg%2F1th7lbzd?entry=ttu",
    },

    phoneSection: {
        title: "Phone Number",
        subtitle: "+91 9866-970-181",
    }
}

export {
    greeting,
    seo,
    settings,
    socialMediaLinks,
    skills,
    experience,
    competitiveSites,
    degrees,
    certifications,
    projectsHeader,
    contactPageData,
};