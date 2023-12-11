/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yusuf's Portfolio",
  description: "Data Scientist | Data Engineer | Researcher",
  og: {
    title: "Yusuf Okunlola Portfolio",
    type: "website",
    url: "https://yusufokunlola.github.io",
  },
};

//Home Page
const greeting = {
  title: "Yusuf Okunlola",
  logo_name: "YusufOkunlola",
  nickname: "Abayomi",
  subTitle: "Data Scientist | Data Engineer | Researcher",
  resumeLink:
    "https://drive.google.com/file/d/1-SpUZyhevY6UKFiLPZ5DfOnw7CrXSwz8/view?usp=sharing",
  portfolio_repository: "https://github.com/yusufokunlola/masterPortfolio",
  githubProfile: "https://github.com/yusufokunlola",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/yusufokunlola",
  // linkedin: "https://www.linkedin.com/in/yusufokunlola/",
  // gmail: "yusufokunlola@gmail.com",
  // gitlab: "https://gitlab.com/yusufokunlola",
  // facebook: "https://www.facebook.com/okunlola.olamide/",
  // twitter: "https://twitter.com/yaokunlola",
  // instagram: "https://www.instagram.com/yaokunlola/"

  {
    name: "Github",
    link: "https://github.com/yusufokunlola",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yusufokunlola/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@yusufokunlola",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:yusufokunlola@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#EA4335", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/yaokunlola",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/okunlola.olamide/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/yaokunlola/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various machine learning and statistical use cases",
        "⚡ Experience of working on optimal sensor placement projects",
        "⚡ Proficient in complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        // {
        //   skillName: "Deeplearning",
        //   imageSrc: "deeplearning_ai_logo.png",
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying machine learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/yusufokunlola",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Ibadan",
      subtitle: "B.Sc. (Hons) in Agricultural and Environmental Engineering",
      logo_path: "unibadan_logo.png",
      alt_name: "Unibadan",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I took courses such as Numerical Analysis, Computer Modelling of Agricultural Systems, Farm Structures and Environmental Control etc.",
        "⚡ I was placed on the Dean's Honours List in the penultimate and final years of my bachelor's program.",
        "⚡ I was selected for Late Madam Adeola Risikat Awomodu Foundation final year project support grant.",
      ],
      website_link: "http://ui.edu.ng",
    },
    {
      title: "Oyo State College of Agriculture and Technology, Igboora",
      subtitle:
        "National Diploma in Agricultural & Bio-Environmental Engineering",
      logo_path: "oyscatech_logo.png",
      alt_name: "OYSCATECH",
      duration: "2013 - 2015",
      descriptions: [
        "⚡ I graduated as the Best Graduating Student with a CGPA of 4.80/5.0 in my cohort.",
        "⚡ Engaged in tutorials to assist students in understanding the fundamentals of engineering drawing and computer programming.",
        "⚡ My project centred on 'Design, Modification and Testing of a Solar-Powered Brooder Pen'.",
      ],
      website_link: "http://oyscatech.edu.ng/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Professional Data Scientist",
      subtitle: "- DataCamp",
      logo_path: "datacamp_logo.png",
      certificate_link: "https://www.datacamp.com/certificate/DS0026005439501",
      alt_name: "DataCamp",
      color_code: "#EDF9FE",
    },
    {
      title: "Associate Data analyst",
      subtitle: "- DataCamp",
      logo_path: "datacamp_logo.png",
      certificate_link: "https://www.datacamp.com/certificate/DAA0013520386151",
      alt_name: "DataCamp",
      color_code: "#EDF9FE",
    },
    {
      title: "Professional Data Scientist",
      subtitle: "- OneCampus Academy",
      logo_path: "onecampus_academy_logo.png",
      certificate_link:
        "https://globalcampus.onecampus.co/admin/tool/certificate/index.php?code=3923149737YO",
      alt_name: "OneCampus",
      color_code: "#EDF9FE",
    },
    {
      title: "Research Writing in the Sciences",
      subtitle: "- INASP",
      logo_path: "inasp_logo.png",
      certificate_link:
        "https://moodle.inasp.info/mod/customcert/verify_certificate.php",
      alt_name: "INASP",
      color_code: "#EDF9FE",
    },
    {
      title: "SQL Fundamentals",
      subtitle: "- Dataquest",
      logo_path: "dataquest_logo.png",
      certificate_link:
        "https://app.dataquest.io/verify_cert/PK4FZ71DF2GQDN67BSKE/",
      alt_name: "Dataquest",
      color_code: "#EDF9FE",
    },
    {
      title: "Image Processing in Python",
      subtitle: "- DataCamp",
      logo_path: "datacamp_logo.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/8582ca649d4aed4fdb27ed4cad942b4b22825e18",
      alt_name: "DataCamp",
      color_code: "#EDF9FE",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have experience as a Data Science Researcher and Customer Support Specialist. I have also contributed to real-world problems via open-source projects. I currently volunteer as a mentor to young scientists.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Customer Service Specialist",
          company: "Globacom Limited",
          company_url: "https://www.gloworld.com/ng",
          logo_path: "glo_logo.png",
          duration: "Oct 2022 - present",
          location: "Lagos, Nigeria",
          description:
            "Handles all customer enquiries, requests and complaints for resolution and service improvement using applications and CRM tools in an efficient manner and gained an overall 90% customer satisfaction rate.",
          color: "#0879bf",
        },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company:
            "Smart Agriculture Innovation Center (SAIC) at Kyungpook National University, Republic of Korea and the Climate-Smart Decision Support Systems Group (CLIMDES) at Michigan State University, USA    ",
          company_url:
            "https://www.climdesinternship.com/internship/past-interns",
          logo_path: "knu_logo.png",
          duration: "Jan 2023 - Jul 2023",
          location: "Daegu, South Korea",
          description: [
            "I utilized machine learning and artificial intelligence to determine optimal sensor placement in a controlled environment.",
            "Throughout the internship, I demonstrated strong skills in data analysis, programming, machine learning, and problem-solving.",
          ],
          color: "#0071C5",
        },
        {
          title: "Data Science Intern",
          company: "Hamoye",
          company_url: "https://hamoye.com",
          logo_path: "hamoye_logo.png",
          duration: "Jan 2023 - May 2023",
          location: "Hamilton, Bermuda",
          description:
            "Collaborated with an 8-member team to develop machine learning models predicting malaria incidence per 1000 population in Africa, built 5-machine learning models using Python programming language and created an interactive web app for enhanced user engagement.",
          color: "#000000",
        },
        {
          title: "Data Science Intern",
          company: "One Campus Academy",
          company_url: "https://portal.onecampusacademy.com/",
          logo_path: "onecampus_academy_logo.png",
          duration: "Nov 2021 - July 2022",
          location: "Ohio, USA",
          description:
            "Utilized Python and diverse ML libraries for in-depth exploratory data analysis on 1,000+ datasets, applied advanced feature engineering and machine learning techniques for valuable insights.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Project Lead",
          company: "I CAN BE GREAT",
          company_url: "https://icanbegreat.com/",
          logo_path: "i_can_be_great_logo.png",
          duration: "Nov 2021 - present",
          location: "Nigeria",
          description: [
            "I was responsible for designing the logo and training resources, training team members, and managing the documentation and reporting aspects of the project.",
            "The curriculum comprises four modules focused on Greatness: Understanding (oneself, destiny, knowledge, and vision). University graduates are entrusted with the responsibility of instructing secondary school students in these modules.",
          ],
          color: "#4285F4",
        },
        {
          title: "Corps Liaison Officer",
          company: "National Youth Service Corps",
          company_url: "https://nysc.org.ng/",
          logo_path: "nysc_logo.png",
          duration: "Nov 2021 - Apr 2022",
          location: "Mangu, Plateau State, Nigeria",
          description: [
            "I coordinated Community Development Service meetings, documented Corps members data, and served as the mouthpiece between Corps members and the Local Government Inspector.",
            " Likewise, as a member of the NYSC CDS Sustainable Development Goals Group, I was involved in the sensitization and orientation of secondary school students in Mangu on the importance of education, as well as the launch of a campaign against examination malpractices (Goal 4) and the prevention of waterborne infection such as typhoid (Goal 6).",
          ],
          color: "#000000",
        },
        //   {
        //     title: "Developer Program Member",
        //     company: "Github",
        //     company_url: "https://github.com/",
        //     logo_path: "github_logo.png",
        //     duration: "July 2019 - PRESENT",
        //     location: "Work From Home",
        //     description:
        //       "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //     color: "#181717",
        //   },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few technical write-ups and some research papers under review.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Unveiling the 5 Top Essential Skills for Data Scientists",
      createdAt: "2023-11-14T06:26:54Z",
      description: "Paper Written on Programming published in Medium ",
      url:
        "https://medium.com/@yusufokunlola/unveiling-the-5-top-essential-skills-for-data-scientists-ff7dbd9b09c6",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "The Importance of Comments in Coding",
      createdAt: "2023-11-14T06:26:54Z",
      description: "Paper Written on Programming published in Medium ",
      url:
        "https://medium.com/@yusufokunlola/the-importance-of-comments-in-coding-8f22606ff85c",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Feature Insights: Google Docs vs. Microsoft Word",
      createdAt: "2023-09-22T06:26:54Z",
      description:
        "Paper Written on Artificial Intelligence published in Medium ",
      url:
        "https://medium.com/@yusufokunlola/feature-insights-google-docs-vs-microsoft-word-d2cdb0c7c1bb",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name:
        "Design, Construction and Preliminary Evaluation of an A-Frame Split Gable Greenhouse for Tropical Crop Cultivation",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Manuscript In Review ",
      url: "https://yusufokunlola.github.io/#/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "yOkunlola.png",
    // profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with DS, ML, AI projects",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I explore the fusion of life lessons and data science insights, weaving a path towards empowerment and enlightenment.",
    link: "https://medium.com/@yusufokunlola/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lagos (Nigeria) and Remote",
    // locality: "Kanodar",
    // country: "IN",
    // region: "Gujarat",
    // postalCode: "385520",
    // streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
