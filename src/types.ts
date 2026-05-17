export interface Project {
  title: string;
  description: string;
  period: string;
  link: string;
  tech?: string[];
  problem?: string;
  solution?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Experience {
  company: string;
  location: string;
  period: string;
  role: string;
  bullets: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  projects: Project[];
  certifications: Certification[];
  experience: Experience[];
  competencies: {
    programming: string[];
    ai_ml: string[];
    web: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
  };
  education: {
    school: string;
    degree: string;
    gpa: string;
    period: string;
  };
}

export const resumeData: ResumeData = {
  name: "Rupanand Palakurthi",
  title: "AI & Full Stack Developer",
  contact: {
    phone: "+91 7095052818",
    email: "rupanandpalakurthi@gmail.com",
    location: "Andhra Pradesh, Machilipatnam, India",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  summary: "Passionate AI & Machine Learning student with hands-on experience in designing and developing intelligent applications using Python, Machine Learning, and Full-Stack Web Development. Skilled in data preprocessing, model training, evaluation, and deployment of AI-driven solutions.",
  projects: [
    {
      title: "Fake News Detector using AI",
      description: "Developed an NLP-based Machine Learning model to identify and classify fake news articles using Python, text preprocessing, and supervised learning algorithms.",
      period: "Jan 2025 - Feb 2025",
      link: "#",
      tech: ["Python", "NLTK", "Scikit-Learn", "Flask"],
      problem: "The rapid spread of misinformation online makes it difficult for users to distinguish between real and fake news, leading to potential social and political issues.",
      solution: "Built a robust NLP pipeline that cleans text data, extracts features using TF-IDF, and classifies news articles with high accuracy using a PassiveAggressiveClassifier."
    },
    {
      title: "Disease Prediction AI",
      description: "Developed a Machine Learning-based disease prediction system using Python and predictive analytics to identify possible diseases based on user symptoms and health data.",
      period: "Jan 2026 - Feb 2026",
      link: "#",
      tech: ["Python", "Pandas", "Random Forest", "Streamlit"],
      problem: "Early diagnosis of diseases often relies on symptom recognition, which can be inconsistent or delayed due to lack of immediate medical access.",
      solution: "Engineered a user-friendly system that analyzes reported symptoms against extensive medical datasets to provide preliminary disease probabilities and health advice."
    },
    {
      title: "Speech Emotion Recognition System",
      description: "Developed an AI-based speech emotion recognition model using Python and Machine Learning to identify human emotions from voice/audio signals.",
      period: "Jan 2025 - Mar 2025",
      link: "#",
      tech: ["Python", "Librosa", "TensorFlow", "Keras"],
      problem: "Human-computer interaction lacks emotional depth; systems often fail to respond appropriately to a user's emotional state.",
      solution: "Implemented a deep learning model using Convolutional Neural Networks (CNNs) to extract MFCC features from audio and classify emotions like happy, sad, or angry."
    },
    {
      title: "AgriSmart AI",
      description: "Developed an AI-powered smart farming platform featuring crop disease detection, fertilizer recommendations, and smart agriculture solutions.",
      period: "Jan 2026 - Mar 2026",
      link: "#",
      tech: ["React.js", "Flask", "PyTorch", "AWS"],
      problem: "Farmers face challenges in monitoring crop health and optimizing soil nutrients, often resulting in lower yields and wasted resources.",
      solution: "Created a comprehensive dashboard that integrates computer vision for leaf disease detection and ML models for soil-specific fertilizer advice."
    },
    {
      title: "Credit Scoring Model",
      description: "Built an ML model for predicting customer creditworthiness using Python and supervised learning algorithms.",
      period: "Feb 2026 - Mar 2026",
      link: "#",
      tech: ["Python", "XGBoost", "Matplotlib", "Seaborn"],
      problem: "Financial institutions need accurate models to assess risk and reduce default rates when issuing personal or business loans.",
      solution: "Developed an ensemble learning model that processes demographic and transaction data to predict default probability with high precision and recall."
    }
  ],
  certifications: [
    { name: "Machine Learning using Python", issuer: "Simplilearn SkillUp", date: "Nov 2024" },
    { name: "Introduction to Image Generation", issuer: "Simplilearn SkillUp", date: "Sep 2024" },
    { name: "Python Software, Application, Games & Automation", issuer: "Udemy", date: "May 2025" },
    { name: "Graphic Design Masterclass", issuer: "Udemy", date: "May 2025" },
    { name: "Introduction to Generative AI Studio", issuer: "Simplilearn SkillUp", date: "Aug 2025" },
    { name: "Website UI/UX Designing using Chat GPT", issuer: "Simplilearn SkillUp", date: "Dec 2025" },
    { name: "Introduction to Large Language Models", issuer: "Simplilearn SkillUp", date: "Dec 2025" }
  ],
  experience: [
    {
      company: "inamigos foundation",
      location: "India (Remote)",
      period: "May 2026 - Present",
      role: "AI & Web Development Intern",
      bullets: [
        "Developed AI-powered web applications using Python, HTML, CSS, and JavaScript.",
        "Integrated Machine Learning models into web-based platforms for intelligent automation.",
        "Built responsive and user-friendly frontend interfaces with backend connectivity.",
        "Collaborated with team members on real-world software development projects."
      ]
    }
  ],
  competencies: {
    programming: ["Python", "JavaScript", "HTML5", "CSS3"],
    ai_ml: ["Machine Learning", "Artificial Intelligence", "NLP", "Data Preprocessing", "Model Training"],
    web: ["Frontend Development", "Full Stack Development", "Responsive Design", "REST API", "UI Development"],
    frameworks: ["React.js", "Node.js", "Flask", "FastAPI"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "AI Models", "N8n"]
  },
  education: {
    school: "Seshadri Rao Gudlavalleru Engineering College",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    gpa: "7.59",
    period: "Jul 2024 - Present"
  }
};
