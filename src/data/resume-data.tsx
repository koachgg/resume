import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Belo Abhigyan",
  initials: "BA",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/Newdelhi",
  about:
    "Detail-oriented Software Engineer dedicated to building high-quality products.",
  summary:"I'm a Computer Science Master's graduate from the University of Delhi with a focus on AI and web development. Skilled in Python, C/C++, JavaScript, React, Node.js, TensorFlow, PyTorch, NLTK, Git, Docker, and GCP. Certified in Digital Marketing with a strong problem-solving aptitude. Committed to innovation and seeking opportunities to contribute to impactful AI and web projects. Please reach out via LinkedIn, GitHub, or email for potential collaborations.",
  avatarUrl: "https://i.imgur.com/MLpZeRp.png",
  personalWebsiteUrl: "github.com/koachgg",
  contact: {
    email: "beloabhigyan@gmail.com",
    tel: "+91-8826626135",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/koachgg",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/belo-abhigyan",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/AbhigyanBelo",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Deen Dayal Upadhyaya College,University of Delhi",
      degree: "Bachelor's Degree in Computer Science",
      start: "2020",
      end: "2023",
    },
    {
      school: "Department of Computer Science, University of Delhi",
      degree: "Master's Degree in Computer Science",
      start: "2023",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Dusker Education",
      link: "https://www.linkedin.com/company/dusker-education/",
      badges: ["Remote"],
      title: "Data Analyst",
      logo: ConsultlyLogo,
      start: "2023",
      end: 2024,
      description:
        " Analyzed educational data to optimize content development and delivery, ensuring tailored and effective e-learning experiences for clients worldwide at Dusker Education.",
    },
    // {
    //   company: "Parabol",
    //   link: "https://parabol.co",
    //   badges: ["Remote"],
    //   title: "Senior Full Stack Developer",
    //   logo: ParabolLogo,
    //   start: "2021",
    //   end: "2024",
    //   description:
    //     "Implemented new features, led a squad, improved code delivery process, and initiated migration from Emotion to Tailwind CSS. Technologies: React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description:
    //     "Created Android mobile apps and led teams for companies like Vision Media, DKMS, and AAA. Built a live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Led the Android team and developed apps for major Polish companies like LOT, Polskie Radio, Agora, and PolskaPress",
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Developed and tested software for LTE base stations",
    // },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "Python",
    "C/C++",
    "Machine Learning",
    "Deep Learning",
    "Keras/TensorFlow/Pytorch",
    "NLTK",
    "Git", 
    "Docker", 
    "Google Cloud Platform", 
    "VS Code", 
    "Visual Studio", 
    "PyCharm", 
    "IntelliJ", 
    "Eclipse",
  ],
  projects: [
    {
      title: "Reddit Bot- ActBot",
      techStack: [
        "Full Stack Developer",
        "Python",
        "Reddit API", 
        "Natural Language Processing",
      ],
      description:
        "Developed a Python-based Reddit bot using PRAW that responds to !actbot comments with spellchecking and dictionary lookup functionality.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/koachgg/bot_reddit",
      },
    },
    {
      title: " Helmet Detection",
      techStack: [
        "Full Stack Developer",
        "Python", 
        "tensorflow",
        "keras", 
        "Deep learning",
      ],
      description:
        "Developed a deep learning model using TensorFlow and Keras for accurate helmet detection in images and videos, integrating OpenCV for image processing and achieving high performance with CNN architecture.",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "https://www.github.com/koachgg/Projects",
      },
    },
    {
      title: " Suicidal Intention Detection in Text",
      techStack: [
        "Side Project",
        "Python",
        "Deep Learning",
        "NLP"
      ],
      description: "Developed a BERT-based transformer model in Python to detect suicidal intention in text, achieving 90.27% accuracy on testing data from 232,000 Reddit posts.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://www.github.com/koachgg/Projects",
      },
    },
    {
      title: "Contact Management App",
      techStack: ["Side Project", "Node.js", "Express.js", "MongoDB"],
      description:
        "This is express & mongodb rest api side project for contact management app",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/koachgg/Contact_Management_App",
      },
    },
    {
      title: "Mini C Compiler",
      techStack: ["Academic Project", "C", "Lex/Yacc"],
      description:
        "This project is a mini C compiler built using Lex and YACC. The compiler supports various C-like operations, including arithmetic operators, logical operators, control structures, and I/O operations. It performs lexical, semantic, and syntax analysis along with immediate code generation (AST and quadruple).",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/koachgg/miniCompiler",
      },
    },
    {
      title: "Milk Quality Detection",
      techStack: ["Side Project", "Python","Kaggle","SeaBorn", "XGBoost"],
      description:
        "Developed a machine learning model to predict and prevent milk spoilage, reducing financial losses and mitigating health risks.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://github.com/koachgg/Projects",
      },
    },
    {
      title: "ToDo List",
      techStack: ["Side Project", "React.js", "Javascript"],
      description:
        "This is a simple Todo List application built using React.js and deployed on Netlify. The application allows users to add, delete, and manage their daily tasks.",
      logo: BarepapersLogo,
      link: {
        label: "todo-list.com",
        href: "https://todo-w-reactjs.netlify.app/",
      },
    },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description: "Howdy is a place for joining communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
