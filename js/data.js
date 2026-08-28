/* ==========================================================================
   PORTFOLIO DATA & CONFIG
   --------------------------------------------------------------------------
   This is the ONLY file you should need to touch to put in your own
   information. Everything on the site is rendered from here.

   Replace anything written in CAPS_WITH_UNDERSCORES (e.g. YOUR_EMAIL).
   ========================================================================== */

const SITE = {
  name: "Mariem Ben Khelifa",
  role: "Software Engineering Student · Full-Stack Developer · Graphic Designer",
  tagline:
    "I build digital experiences at the intersection of code and design — clean, functional software wrapped in interfaces people enjoy using.",
  email: "mariem.benkhelifa@polytechnicien.tn",
  github: "https://github.com/mariem-ctrl",
  linkedin: "https://www.linkedin.com/in/mariem-ben-khelifa-627a07321/?skipRedirect=true",
  cvUrl: "assets/cv/YOUR_CV.pdf",
  profileImage: "assets/images/profile/pfp.jpeg", // replace with your own photo (square, min 800x800)
  location: "Sousse, Tunisia", // replace or remove
  availability: "Open to internships & freelance work",
};

/* About — journey / focus cards shown under the About section */
const JOURNEY = [
  {
    year: "Currently",
    title: "Software Engineering & Information Systems",
    text: "Studying full-stack development, systems design and software engineering fundamentals while building real projects on the side.",
  },
  {
    year: "Focus",
    title: "Code + Design, together",
    text: "I don't just implement interfaces — I design them first. Most of my projects start as a Figma file before a single line of code.",
  },
  {
    year: "Interests",
    title: "AI, Security & Systems",
    text: "Outside of web work, I spend time exploring applied machine learning and the fundamentals of cybersecurity.",
  },
];

/* Skills — grouped by category. `level` is optional (0-100), used for a subtle fill indicator. */
const SKILLS = {
  Programming: [
    { name: "C", level: 75 },
    { name: "C++", level: 75 },
    { name: "Java", level: 80 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "SQL", level: 100 },
    { name: "PL/SQL", level: 100 },
    { name: "PHP", level: 70 },
  ],
  "Web Development": [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 80 },
    { name: "PHP", level: 70 },
    { name: "MySQL", level: 80 },
    { name: "REST APIs", level: 85 },
  ],
  Design: [
    { name: "Figma", level: 100 },
    { name: "Photoshop", level: 100 },
    { name: "Illustrator", level: 100 },
    { name: "Premiere Pro", level: 60 },
    { name: "Canva", level: 100 },
    { name: "UI/UX Design", level: 100 },
  ],
  Tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Linux", level: 100 },
    { name: "Docker", level: 100 },
  ],
};

/* Projects — the main showcase. `category` must match one of PROJECT_CATEGORIES below.
   Add as many objects as you like — the grid & filters render automatically. */
const PROJECT_CATEGORIES = [
  "All",
  "Software",
  "Web Development",
  "Cybersecurity",
];

const PROJECTS = [
  {
    id: "sms-spam-detector",
    title: "SMS Spam Detector",
    category: "Software",
    tags: ["Python", "scikit-learn", "TF-IDF", "Naive Bayes"],
    thumbnail: "assets/images/projects/sms-spam-detector.png",
    summary: "A machine learning tool that classifies SMS messages as spam or real with a confidence score.",
    overview: "An open-source SMS spam detection project that combines TF-IDF feature extraction with a Naive Bayes classifier. The website provides instant predictions, confidence scores, and batch checking for multiple messages.",
    problem: "People need a fast way to distinguish suspicious messages from legitimate texts without manually judging every message.",
    solution: "I trained a text classification model on labeled SMS messages, converting words into TF-IDF features before using Naive Bayes to calculate the spam probability.",
    features: [
      "Instant spam or ham predictions",
      "Confidence score for each result",
      "Batch checker for multiple messages",
    ],
    role: "Solo developer",
    results: "Built an accessible browser interface for a fast, no-login spam check, backed by an open-source Python model.",
    github: "https://github.com/mariem-ctrl/ML-model-sms-spam-detector",
    demo: "https://mariem-ctrl.github.io/SMS-spam-detector-website-version-/",
  },
  {
    id: "luna-aesthetics",
    title: "Luna Aesthetics E-commerce Website",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "E-commerce"],
    thumbnail: "assets/images/projects/luna-aesthetics.png",
    summary: "A polished e-commerce website concept for a modern beauty and aesthetics brand.",
    overview: "Luna Aesthetics is an e-commerce website project designed to present beauty products through a refined, easy-to-navigate shopping experience.",
    problem: "A beauty brand needs a digital storefront that feels trustworthy, elegant, and simple to browse.",
    solution: "I designed and developed a responsive product-focused interface with clear categories, visual hierarchy, and a smooth path from discovery to purchase.",
    features: ["Responsive product catalogue", "Brand-led visual design", "Clear shopping journey"],
    role: "Designer and developer",
    results: "Strengthened my ability to combine visual identity, responsive layout, and practical e-commerce interaction design.",
    github: "https://github.com/mariem-ctrl/LUNA-AESTHETICSs.git",
    demo: "",
  },
  {
    id: "coffee-shop-network",
    title: "Coffee Shop Network Simulation",
    category: "Cybersecurity",
    tags: ["Cisco", "Networking", "IP Addressing", "Packet Tracer"],
    thumbnail: "assets/images/projects/coffee-shop-network.png",
    summary: "A mini Cisco network designed for a coffee shop, connecting staff devices and shared services.",
    overview: "This networking project models the infrastructure of a small coffee shop, with a practical topology for point-of-sale, staff, and customer connectivity.",
    problem: "A small business needs a network that is organized, reliable, and ready to separate operational traffic from guest access.",
    solution: "I built and configured a mini network in Cisco Packet Tracer, applying IP addressing, device connections, and basic network organization.",
    features: ["Small-business network topology", "Cisco device configuration", "IP addressing practice"],
    role: "Network designer and implementer",
    results: "Practiced translating a real-world business setting into a structured, working network model.",
    github: "",
    demo: "",
  },
];

/* Graphic design gallery — masonry/lightbox items */
const DESIGN_WORKS = [
  {
    id: "ieee-visual-designs",
    title: "IEEE Student Branch Visuals",
    category: "Event Design",
    image: "assets/images/design/ieee-visuals.jpg",
  },
  {
    id: "hack-to-the-future-2025",
    title: "Hack to the Future 2025",
    category: "Event Branding",
    image: "assets/images/design/hack-to-the-future-2025.jpg",
  },
  {
    id: "eid-al-fitr-design",
    title: "Eid al-Fitr Celebration",
    category: "Social Media",
    image: "assets/images/design/eid-al-fitr.jpg",
  },
];

/* Websites you've built — shown as browser-frame previews */
const WEBSITES = [
  {
    id: "sms-spam-detector-website",
    name: "SMS Spam Detector",
    description: "A focused web interface for testing SMS messages against a machine learning spam classifier.",
    tech: ["HTML", "CSS", "JavaScript", "Machine Learning"],
    image: "assets/images/websites/sms-spam-detector.png",
    url: "https://mariem-ctrl.github.io/SMS-spam-detector-website-version-/",
    github: "https://github.com/mariem-ctrl/ML-model-sms-spam-detector",
  },
  {
    id: "luna-aesthetics-website",
    name: "Luna Aesthetics E-commerce Website",
    description: "A refined e-commerce website concept for a modern beauty and aesthetics brand.",
    tech: ["HTML", "CSS", "JavaScript", "E-commerce"],
    image: "assets/images/websites/luna-aesthetics.png",
    url: "",
    github: "https://github.com/mariem-ctrl/LUNA-AESTHETICSs.git",
  },
];

/* Educational / academic projects */
const ACADEMIC_PROJECTS = [
  {
    id: "luna-aesthetics-academic",
    title: "Luna Aesthetics E-commerce Website",
    tags: ["HTML", "CSS", "JavaScript"],
    built: "A responsive e-commerce website for a beauty and aesthetics brand, with a product-led layout and a clear shopping journey.",
    why: "An academic web development project exploring how design and front-end implementation work together in a real product context.",
    tech: "HTML, CSS, JavaScript, responsive web design.",
    learned: "How to turn a visual brand direction into a usable interface with consistent hierarchy and responsive behavior.",
  },
  {
    id: "ink-spark-figma",
    title: "Ink Spark Mobile App Prototype",
    tags: ["Figma", "UI/UX", "Mobile Design"],
    image: "assets/images/projects/figma.png",
    link: "https://www.figma.com/proto/2xAZJSQUzc1XfePXYTJYL2/Untitled?node-id=1-2&p=f&t=DtJByPraxiYpXInV-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    built: "A mobile app prototype for Ink Spark, exploring a welcoming onboarding experience and a clear visual language for the product.",
    why: "A UI/UX design project focused on translating an app idea into a clickable, user-friendly mobile experience.",
    tech: "Figma, user interface design, prototyping.",
    learned: "How to build a coherent mobile flow, establish visual hierarchy, and communicate an idea through interactive screens.",
  },
];

/* Experience & activities timeline */
const EXPERIENCE = [
  {
    date: "2024 — Present",
    title: "Software Engineering & Information Systems Student",
    org: "Ecole Polytechnique de Sousse",
    description: "Building a foundation across software engineering, web development, databases, networking, artificial intelligence, and cybersecurity through coursework and hands-on projects.",
  },
  {
    date: "2024 — 2025",
    title: "Webmaster",
    org: "IEEE Computer Society EPS Student Branch",
    description: "Maintaining and shaping the branch's web presence while supporting the communication of student activities, events, and technical initiatives.",
  },
  {
    date: "April 2025",
    title: "Media Chief",
    org: "Hack to the Future 2025",
    description: "Led the event's media direction and helped turn a technical competition into a clear, engaging experience for participants and the wider community.",
  },
  {
    date: "September 2025",
    title: "Graphic Designer",
    org: "TechX Tunisia 2025",
    description: "Created visual communication materials for a technology-focused event, balancing identity, clarity, and the energy of a student tech community.",
  },
  {
    date: "25 October 2025",
    title: "IEEE Xtreme 19.0 Participant",
    org: "IEEE Computer Society",
    description: "Participated in the global programming competition with Team HackholicSS, solving algorithmic problems under time pressure alongside participants worldwide.",
  },
];

/* Certifications */
const CERTIFICATIONS = [
  {
    name: "Getting Started with Docker",
    org: "Simplilearn SkillUp",
    date: "9 August 2026",
    image: "assets/images/certificates/getting-started-with-docker.png",
  },
  {
    name: "Intro to AI and Gen AI",
    org: "Udacity · TechUp Explorer",
    date: "15 March 2026",
    image: "assets/images/certificates/intro-to-ai-and-gen-ai.png",
  },
  {
    name: "IT Specialist: Databases",
    org: "Pearson",
    date: "Professional certification",
    image: "assets/images/certificates/it-specialist-databases.png",
  },
  {
    name: "IEEE Xtreme 19.0 Programming Competition",
    org: "IEEE",
    date: "25 October 2025",
    image: "assets/images/certificates/ieee-xtreme-participation.png",
  },
  {
    name: "Figma Training Session",
    org: "IEEE Computer Society EPS SBC",
    date: "25 March 2026",
    image: "assets/images/certificates/figma-training-session.png",
  },
];
