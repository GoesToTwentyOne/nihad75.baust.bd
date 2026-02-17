import React, { useState } from 'react';
import styled from 'styled-components';
import { ExternalLink, FileText, Github, Layers, Eye, X, Terminal, Database, Layout } from 'lucide-react';

// --- STYLED COMPONENTS ---

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const HeaderText = styled.p`
  color: #333;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`;

const ProjectItem = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A, #B9E5E8);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const ProjectTitle = styled.h3`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  line-height: 1.4;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const ProjectContext = styled.p`
  color: #475569;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.5rem;
`;

const TechBadge = styled.span`
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #7AB2D3;
  color: #4A628A;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Inter', monospace;
`;

const ProjectActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  &:hover::before {
    left: 100%;
  }

  /* Specific Button Styles */
  &.features {
    background: linear-gradient(135deg, #E195AB, #E14434);
    color: white;
  }

  &.github {
    background: linear-gradient(135deg, #2b3137, #24292e);
    color: white;
  }

  &.live {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  vertical-align: middle;
  
  &.academic {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: white;
  }
  
  &.personal {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
  }
`;

// --- MODAL STYLES ---
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
`;

const ModalTitle = styled.h3`
  color: #1e293b;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #64748b;
  padding: 0.2rem;
  transition: color 0.2s;
  
  &:hover {
    color: #ef4444;
  }
`;

const ModalBody = styled.div`
  color: #475569;
  line-height: 1.7;
  font-size: 1rem;
  
  ul {
    padding-left: 1.2rem;
    margin-top: 0.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

// --- DATA ---

const projectData = [
  {
    id: 15,
    title: "Bengali ChatBot",
    category: "Personal",
    context: "Text Analysis & LLM",
    tools: ["Python", "Pandas", "NumPy", "NLTK", "BNLP", "BengaliCorpus", "Tokenizer", "Lemmatizer", "TensorFlow/Keras", "LSTM", "Word Embeddings", "Adam Optimizer", "Dropout", "Cross-Entropy Loss", "Greedy Decoding"],
    github: "https://github.com/GoesToTwentyOne/Bengali_Chatbot",
    description: "Built a Bengali language chatbot using a seq2seq LSTM model. Handles user queries with contextual responses via word embeddings, text preprocessing, and greedy decoding.",
    features: [
    "Contextual query handling using seq2seq LSTM model",
    "Bengali language support with tokenization and lemmatization",
    "Word embedding representation for semantic understanding",
    "Efficient model training with Adam optimizer, dropout, and cross-entropy loss",
    "Response generation using greedy decoding for real-time interaction"
    ]
  },
  {
    id: 14,
    title: "Alpha Compiler",
    category: "Academic",
    context: "Learn how works compiler",
    tools: ["Flex (Lex)", "Bison (Yacc)", "C"],
    github: "https://github.com/GoesToTwentyOne/Compiler_3109",
    description: "Developed a simple yet powerful compiler for a custom programming language, supporting variable assignments, arithmetic operations, conditionals, and mathematical functions including factorial, trigonometry, and logarithms. Focused on clear syntax design, accurate expression evaluation, and robust control flow handling.",
    features: [
    "Supports variable assignments and arithmetic operations",
    "Handles conditionals and control flow statements",
    "Evaluates mathematical functions including factorial, trigonometry, and logarithms",
    "Clear and intuitive syntax design",
    "Robust expression evaluation and error handling"
    ]
  },
  {
    id: 13,
    title: "GoalGuru",
    category: "Academic",
    context: "Learn how make a game.",
    tools: ["C#", "Unity Engine"],
    github: "https://github.com/GoesToTwentyOne/Game_Lab_22v",
    description: "Developed an immersive soccer game featuring free kicks and goalkeeping challenges, realistic physics, lifelike animations, and dynamic environments across multiple platforms.",
    features: [
          "Immersive gameplay with free kicks and goalkeeping challenges",
    "Realistic physics and collision handling",
    "Lifelike player animations and movements",
    "Dynamic environments and multiple platforms support",
    "Interactive and engaging game mechanics"
    ]
  },
  {
    id: 12,
    title: "AcademiaQuest",
    category: "Personal",
    context: "Learn Django , Class Based View , Models",
    tools: ["Python", "Django", "Django ORM", "Class-Based Views (CBVs)"],
    github: "https://github.com/GoesToTwentyOne/AcademiaQuest_Final/tree/master",
    description: "Developed a secure, feature-rich web application for effortless exam creation and participation. The platform offers intuitive quiz management, real-time feedback, detailed analytics, and a dynamic user experience for both administrators and participants.",
    features: [
      "Secure and user-friendly web platform for exam creation and participation",
    "Intuitive quiz management and configuration tools",
    "Real-time feedback for participants",
    "Detailed analytics for performance tracking",
    "Dynamic user experience for both admins and participants"
    ]
  },
  {
    id: 11,
    title: "DjangoECommerceHub",
    category: "Personal",
    context: "Learn Django , Class Based View , Models",
    tools: ["Python", "Django", "Django ORM", "Class-Based Views (CBVs)"],
    github: "https://github.com/GoesToTwentyOne/DjangoECommerceHub",
    description: "Developed a full-featured e-commerce web application with secure SSLCOMMERZ payment integration, advanced user authentication, seamless cart and order management, and optimized product navigation to elevate the online shopping experience.",
    features: [
 "Secure payment integration with SSLCOMMERZ",
    "Advanced user authentication and authorization",
    "Seamless cart and order management",
    "Optimized product browsing and navigation",
    "Enhanced online shopping experience"
    ]
  },
    {
    id: 10,
    title: "DRF BookStore API",
    category: "Personal",
    context: "Learn Django , Class Based View , Models , API ",
    tools: ["Python", "Django", "Django REST Framework", "Django ORM", "Class-Based Views (CBV)", "Postman"],
    github: "https://github.com/GoesToTwentyOne/DRF_Book_Store_Management",
    description: "Engineered a robust RESTful Bookstore Management System using Django REST Framework, employing class-based views to deliver clean, scalable APIs for efficient book inventory management and user interactions.",
    features: [
"RESTful API development for bookstore management",
    "Class-based views for clean and scalable endpoints",
    "Efficient book inventory and user interaction management",
    "Secure and structured data handling with Django ORM",
    "API testing and validation using Postman"
    ]
  },
  {
    id: 9,
    title: "Schedule Expert",
    category: "Personal",
    context: "Learn Golang , Templating , Routing and Complex AI",
    tools: ["Golang", "RDBMS"],
    github: "https://github.com/GoesToTwentyOne/Schedule_Expert0075",
    description: "Developed a user-friendly web application to simplify class scheduling and room management on campus. The platform allows students, faculty, and administrators to manage timetables seamlessly through an accessible and responsive interface.",
    features: [
    "Simplifies class scheduling and room management",
    "User-friendly and responsive interface for all users",
    "Timetable management for students, faculty, and administrators",
    "Efficient backend processing using Golang",
    "Reliable data management with RDBMS"
    ]
  },
    {
    id: 8,
    title: "ToDo List",
    category: "Personal",
    context: "Learn Django , Function based View ",
    tools: ["Python", "Django", "Django ORM", "Function-Based Views"],
    github: "https://github.com/GoesToTwentyOne/simpleToDoListProjectDjango",
    description: "Built a robust and responsive web-based task management system to help users efficiently organize, prioritize, and track daily activities. Supports full task lifecycle management with a clean, intuitive interface and powerful organizational tools.",
    features: [
    "Efficient task organization, prioritization, and tracking",
    "Full task lifecycle management (create, update, delete, complete)",
    "Clean and intuitive user interface",
    "Responsive web design for seamless user experience",
    "Backend powered by Django and Django ORM with function-based views"
    ]
  },
      {
    id: 7,
    title: "tohoney eCommerce",
    category: "Personal",
    context: "Learn Django , Class Based View , Models",
    tools: ["Python", "Django", "Django ORM", "Function-Based Views"],
    github: "https://github.com/GoesToTwentyOne/tohoney_eCommerce",
    description: "Developed a full-featured e-commerce web application with secure SSLCOMMERZ payment integration, advanced user authentication, seamless cart and order management, and optimized product navigation to enhance the online shopping experience.",
    features: [
 "Secure payment integration with SSLCOMMERZ",
    "Advanced user authentication and authorization",
    "Seamless cart and order management",
    "Optimized product browsing and navigation",
    "Enhanced online shopping experience"
    ]
  },
   {
    id: 6,
    title: "DjangoFolioCraft",
    category: "Personal",
    context: "Learn Django , Class Based View , Models",
    tools: ["Python", "Django", "Django ORM", "Function-Based Views"],
    github: "https://github.com/GoesToTwentyOne/DjangoFolioCraft",
    description: "Developed a dynamic, database-driven portfolio website for professionals to showcase work, share knowledge through blogs, and connect with collaborators or employers. Features a clean, responsive design and robust admin functionality for efficient content management.",
    features: [
"Dynamic, database-driven portfolio website",
    "Showcase professional work and share blogs",
    "Clean and responsive user interface",
    "Robust admin panel for content management",
    "Facilitates networking and collaboration opportunities"
    ]
  },
   {
    id: 5,
    title: "BKCD SMS",
    category: "Academic",
    context: "Learn Laravel,PHP, Validation in core",
    tools: ["PHP", "Laravel", "MySQL"],
    github: "https://github.com/GoesToTwentyOne/High_School_Management_System-DBMS",
    description: "Designed and developed a robust web-based platform to optimize high school operations, enabling seamless management of attendance, class schedules, assignments, library services, and communication between students, teachers, and administrators.",
    features: [
    "Comprehensive management of attendance, classes, and assignments",
    "Streamlined library services and resource tracking",
    "Effective communication between students, teachers, and administrators",
    "Robust backend powered by PHP and Laravel",
    "Reliable data storage and management with MySQL"
    ]
  },
  
];

const Projects: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string, features: string[] } | null>(null);

  const openModal = (title: string, features: string[]) => {
    setModalContent({ title, features });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <ProjectsContainer>
      {/* <Header>
        <HeaderText>
           Explore my academic and personal project.
        </HeaderText>
      </Header>

      <SectionTitle>Project Portfolio</SectionTitle> */}

      {projectData.map((project) => (
        <ProjectItem key={project.id}>
          <ProjectTitle>
            {project.title}
            <StatusBadge className={project.category === 'Academic' ? 'academic' : 'personal'}>
              {project.category}
            </StatusBadge>
          </ProjectTitle>
          
          <ProjectContext>
            {project.context}
          </ProjectContext>

          <TechStackContainer>
            {project.tools.map((tool, index) => (
              <TechBadge key={index}>
                {index === 0 && <Terminal size={12} style={{marginRight: '4px', display:'inline'}}/>}
                {tool}
              </TechBadge>
            ))}
          </TechStackContainer>

          <p style={{ color: '#64748b', marginBottom: '1rem', fontStyle: 'italic' }}>
            {project.description}
          </p>

          <ProjectActions>
            {/* Features Button (Opens Modal) */}
            <ActionButton 
              as="button" 
              className="features"
              onClick={() => openModal(project.title, project.features)}
            >
              <Eye size={16} />
              View Features
            </ActionButton>

            {/* GitHub Button */}
            <ActionButton 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github"
            >
              <Github size={16} />
              GitHub Repository
            </ActionButton>
          </ProjectActions>
        </ProjectItem>
      ))}

      {modalContent && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Project Features</ModalTitle>
              <CloseButton onClick={closeModal}>
                <X size={24} />
              </CloseButton>
            </ModalHeader>
            <div style={{ marginBottom: '1rem', color: '#1e293b', fontWeight: '600' }}>
              {modalContent.title}
            </div>
            <ModalBody>
              <ul>
                {modalContent.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </ProjectsContainer>
  );
};

export default Projects;