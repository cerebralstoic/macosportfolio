const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "applemusic",
    name : "Apple Music",
    icon: "applemusic.png",
    canOpen: true,
  },
  {
    id: "vscode",
    name: "VsCode", // was "vscode"
    icon: "vscode.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Oct 5, 2025",
    title:
      "End-to-End File Encryption in Cross-Platform Apps: A Practical Guide with Flutter",
    image: "/images/blog1.png",
    link: "https://vineetrawat.me/blog/end-to-end-file-encryption-flutter",
  },
  {
    id: 2,
    date: "Sep 2, 2025",
    title:
      "Building Secure Backend APIs with Flask: Authentication, Encryption, and Best Practices",
    image: "/images/blog2.png",
    link: "https://vineetrawat.me/blog/secure-backend-apis-flask",
  },
  {
    id: 3,
    date: "Aug 20, 2025",
    title:
      "From CNNs to Real-World Apps: Skin Disease Detection Using Deep Learning",
    image: "/images/blog3.png",
    link: "https://vineetrawat.me/blog/cnn-skin-disease-detection",
  },
  
];

const techStack = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "Java", "Python", "Dart", "JavaScript"],
  },
  {
    category: "Web Development",
    items: ["HTML5", "CSS", "React.js", "Flask"],
  },
  {
    category: "Mobile Development",
    items: ["Flutter"],
  },
  {
    category: "Cybersecurity",
    items: ["Wireshark", "Kali Linux", "Nmap", "Social Engineering"],
  },
  {
    category: "Databases",
    items: ["MySQL", "Firebase"],
  },
  {
    category: "AI / Machine Learning",
    items: ["TensorFlow", "OpenCV", "CNN"],
  },
  {
    category: "Backend & Systems",
    items: ["Flask", "Crow (C++ Web Framework)"],
  },
  {
    category: "Dev & Collaboration Tools",
    items: ["Git", "GitHub"],
  },
  {
    category: "Core CS Fundamentals",
    items: [
      "DSA",
      "OS",
      "CN",
      "DBMS",
    ],
  },
];


const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/cerebralstoic",
  },
  {
    id: 2,
    text: "Leetcode",
    icon: "/icons/leetcode.svg",
    bg: "#4bcb63",
    link: "https://leetcode.com/u/cerebralstoic/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/cerebralstoic",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/cerebralstoic",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
 
  {
    id: 1,
    img: "/images/gal1.jpg",
  },

  {
    id: 2,
    img: "/images/gal2.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "SecureX Cloud Storage",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Securex Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
                "SecureX is a privacy-focused, cross-platform cloud storage system designed for Android, iOS, and Web platforms.",
                "It implements client-side file encryption (AES-256) using dynamically generated keys and salting, ensuring data is secured before leaving the user’s device.",
                "To provide layered protection, SecureX also applies server-side encryption, safeguarding files both in transit and at rest.",
                "The system is built with a secure-by-design architecture, delivering seamless cross-platform functionality without compromising performance or usability.",
          ],

        },
        {
          id: 2,
          name: "securex.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/cerebralstoic",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "SecureX.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "BlockChain Powered Payment Interface",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[18vh] left-5",
      children: [
        {
          id: 1,
          name: "BlockChain Power Payment.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
              "This is a blockchain-powered decentralized application built on the Avalanche (AVAX) Testnet, leveraging smart contracts for transparent and secure transactions.",
              "The app utilizes the CTK token as its native utility token, enabling token-based interactions, value exchange, and on-chain operations within the platform.",
              "By deploying on Avalanche, the system benefits from high throughput, low transaction latency, and cost-efficient gas fees compared to traditional blockchain networks.",
              "The architecture emphasizes decentralization, immutability, and trustless execution, making it suitable for secure digital asset management and blockchain-native workflows.",
          ],

        },
        {
          id: 2,
          name: "bpi.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.github.com/cerebralstoic",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "blockchain-payment-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "CNN based Skin disease detection",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[35vh] left-5",
      children: [
        {
          id: 1,
          name: "MediSync.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "MediSync is an AI-powered medical application designed to detect skin diseases by analyzing image patterns using deep learning techniques.",
            "The system employs a convolutional neural network (CNN) trained on dermatological image data to identify visual features associated with common skin conditions.",
            "Image preprocessing and pattern extraction are handled using OpenCV, while TensorFlow powers model training and inference for accurate predictions.",
            "MediSync integrates the trained model with a Flask-based backend, enabling seamless image uploads and real-time disease analysis through a web interface.",
          ],
        },
        {
          id: 2,
          name: "medisync.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.github.com/cerebralstoic",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "bodypartselector.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [

    {
      id: 1,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-20 left-5",
      subtitle: "Engineering Secure Applications with Code and Curiosity",
      image: "/images/me.webp",
      description: [
        "Hi, I’m Vineet Rawat a Computer Science undergraduate with a strong interest in building secure, scalable, and impactful software  systems.",
        "I work across mobile, web, and backend development, with hands-on experience in Flutter, Python, Flask, C++ and modern web technologies.",
        "My focus areas include cybersecurity, secure application design, and applying machine learning to solve real-world problems.",
        "Beyond coding, I enjoy exploring system internals, refining project architectures, and continuously improving my problem-solving skills through hands-on projects.",
      ],

    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "Ana de armas.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  vscode: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null},
  applemusic: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null},
  notfound :{ isOpen: false, zIndex: INITIAL_Z_INDEX, data: null},
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };