import React from "react";
import styled from "styled-components";
import {
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Award,
  BookOpen,
  Brain,
  Eye,
  Zap,
  Sparkles,
} from "lucide-react";

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Inter", sans-serif;
  
  @media (max-width: 768px) {
    padding: 1rem; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem; // Further reduced padding for very small screens
  }
`;

const Greeting = styled.h1`
  color: #1e293b;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #7ab2d3, #4a628a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem; // Reduced font size for mobile
    margin-bottom: 1.5rem; // Reduced margin for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 2rem; // Further reduced font size for very small screens
    margin-bottom: 1rem; // Further reduced margin for very small screens
  }
`;

const Description = styled.p`
  color: #475569;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: center;

  a {
    color: rgb(0, 102, 255);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      color: #4a628a;
      text-decoration: none;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem; // Reduced font size for mobile
    margin-bottom: 1.5rem; // Reduced margin for mobile
    line-height: 1.6; // Reduced line height for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 1rem; // Further reduced font size for very small screens
    margin-bottom: 1rem; // Further reduced margin for very small screens
    line-height: 1.5; // Further reduced line height for very small screens
  }
`;

const ResearchInterests = styled.div`
  color: #475569;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #dff2eb 100%);
  border: 1px solid #b9e5e8;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7ab2d3;
  }

  em {
    color: rgb(17, 115, 172);
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem; // Reduced font size for mobile
    margin-bottom: 2rem; // Reduced margin for mobile
    padding: 1.5rem; // Reduced padding for mobile
    line-height: 1.6; // Reduced line height for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem; // Further reduced font size for very small screens
    margin-bottom: 1.5rem; // Further reduced margin for very small screens
    padding: 1rem; // Further reduced padding for very small screens
    line-height: 1.5; // Further reduced line height for very small screens
  }
`;

const EmailSection = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #dff2eb 100%);
  border: 1px solid #b9e5e8;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7ab2d3;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2rem; // Reduced margin for mobile
    padding: 1.5rem; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem; // Further reduced margin for very small screens
    padding: 1rem; // Further reduced padding for very small screens
  }
`;

const EmailTitle = styled.h2`
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem; // Reduced font size for mobile
    margin-bottom: 1rem; // Reduced margin for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem; // Further reduced font size for very small screens
    margin-bottom: 0.75rem; // Further reduced margin for very small screens
  }
`;

const EmailItem = styled.p`
  color: #475569;
  font-family: "Inter", sans-serif;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  align-items: flex-start;

  a {
    color: #4A628A;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    overflow-wrap: anywhere;
    word-break: break-word;

    &:hover {
      color: #4A628A;
      text-decoration: none;
    }
  }
  
  em {
    color:rgb(211, 128, 122);
    font-style: normal;
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    gap: 6px;
  }
`;

const NewsSection = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #dff2eb 100%);
  border: 1px solid #b9e5e8;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7ab2d3;
  }
`;

const NewsTitle = styled.h2`
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NewsItem = styled.div`
  font-family: "Inter", sans-serif;
  color: #475569;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.7;
  padding: 0.75rem;
  background: linear-gradient(135deg, #f1f5f9, #dbecfdff);
  border-radius: 12px;
  border-left: 4px solid #7ab2d3;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(122, 178, 211, 0.2);
  }

  .date {
    color: #4a628a;
    font-weight: 700;
  }

  a {
    color: #7ab2d3;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      color: #4a628a;
      text-decoration: none;
    }
  }
`;

const YearTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>{children}</h3>
);

const GlobeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin-top: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #dff2eb 100%);
  border: 1px solid #b9e5e8;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7ab2d3;
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Greeting>Greetings!</Greeting>

<Description>
  <strong>Md. Nihad Hossain</strong> is a recent <strong>Computer Science and Engineering</strong> graduate from{" "}
  <a href="https://baust.edu.bd/" target="_blank" rel="noopener noreferrer">
    Bangladesh Army University of Science and Technology (BAUST)
  </a>
  , with a focus on <em>research</em> and <em>backend software engineering</em>. Passionate about <strong>AI/ML</strong>, <strong>Natural Language Processing (NLP)</strong>, and building <strong>scalable, high-performance software systems</strong>, he leverages curiosity and problem-solving to translate research insights into practical, real-world solutions. Connect on{" "}
  <a
    href="https://www.linkedin.com/in/md-nihad-h-5568b51a3/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <strong>LinkedIn</strong>
  </a>{" "}to explore collaborations or professional opportunities.
</Description>





      <ResearchInterests>
        My research interests focuses on{" "}
        <em>
          Natural Language Processing (NLP), Social Media Analysis, Low-Resource
          Languages, Large Language Models, LLM Agents, Computer Vision,
          Vision-Language Models, Multimodal AI, Trustworthy AI, Multimodal
          Agents, AI For Bengali Chatbot
        </em>
        . I am open to collaboration options that are in line with my research
        aims and interests.{" "}
        <span style={{ color: "#7AB2D3" }}>
          <em>
            Please contact me via email if you have any questions or are
            interested in collaborating.
          </em>
        </span>
      </ResearchInterests>

      <EmailSection>
        <EmailTitle>
          <Mail size={24} />
          Email
        </EmailTitle>
        <EmailItem>
          <Mail size={16} />
          <a href="mailto:bcc.researcher@baust.edu.bd">bcc.researcher@baust.edu.bd</a>
        </EmailItem>
        <EmailItem>
          <Mail size={16} />
          <a href="mailto:hnihadgo75@gmail.com">hnihadgo75@gmail.com</a>
        </EmailItem>
      </EmailSection>

<NewsSection>
  <NewsTitle>
    <Zap size={24} />
    Recent News
  </NewsTitle>

  {/* 2025 Events */}
  <YearTitle>2025</YearTitle>


<NewsItem>
  <span className="date">[Feb 2025]</span> – A Deep Learning Approach for Multiclass Domain‑Specific Question Classification in Computer Science for Bangla Language was published in the <strong>IEEE ECCE International Conference 2025</strong>. This work presents a novel dataset and deep learning models to classify computer science domain questions in Bangla, addressing key challenges in NLP for underrepresented languages.
</NewsItem>

<NewsItem>
  <span className="date">[Mar 2025]</span> – Mental Health Sign Recognition in Bengali Text: An Optimized Deep Learning Transformer Model for Imbalanced Classification was accepted at the <strong>28th International Conference on Computer and Information Technology (ICCIT 2025)</strong>, a major IEEE‑affiliated forum for computer science research.
</NewsItem>

<NewsItem>
  <span className="date">[Apr 2025]</span> – Machine Learning‑Based Feature Selection for Chronic Kidney Disease Prediction in Type‑1 and Type‑2 Diabetes Patients was presented at the <strong>European International Conference on Technology (EICT 2025)</strong>, showcasing a supervised learning approach for health risk prediction models.
</NewsItem>









  {/* 2024 Events
  <YearTitle>2024</YearTitle>

  <NewsItem>
    <span className="date">[August]</span> - Two papers got accepted at the 18th International Conference on Information Technology and Applications (
    <a href="https://www.icita.world/#/" target="_blank" rel="noopener noreferrer">
      ICITA 2024
    </a>
    ).
  </NewsItem>

  <NewsItem>
    <span className="date">[September]</span> - Attended the IEEE Region 10 Symposium at Netaji Subhas University of Technology (NSUT), New Delhi (
    <a href="https://ieeedelhi-tensymp2024.org/" target="_blank" rel="noopener noreferrer">
      TENSYMP2024
    </a>
    ).
  </NewsItem>


  <NewsItem>
    <span className="date">[October]</span> - Attended the 18th International Conference on Information Technology and Applications and presented two papers. (
    <a href="https://www.icita.world/#/" target="_blank" rel="noopener noreferrer">
      ICITA 2024
    </a>
    )
  </NewsItem>

  <NewsItem>
    <span className="date">[October]</span> - Attended the 4th International Conference on Computing and Communication Networks and presented two papers. (
    <a href="https://icccn.co.uk/" target="_blank" rel="noopener noreferrer">
      ICCCNet 2024
    </a>
    )
  </NewsItem>

  <NewsItem>
    <span className="date">[March]</span> - Joined as a Machine Learning Engineer (Level-I) at{" "}
    <a href="https://www.linkedin.com/company/anttroboticsltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
      ANTT Robotics Ltd.
    </a>
  </NewsItem> */}

</NewsSection>



      {/* <GlobeContainer>
      <a href="https://clustrmaps.com/site/1c38a"  title="ClustrMaps"><img src="https://www.clustrmaps.com/map_v2.png?d=hmIfEwbtPyT4fAgf0EIp_Xo1LUscuzQCoj1FtxsKDcI&cl=ffffff" width="300px" height="300px"/></a>
      </GlobeContainer> */}
    </HomeContainer>
  );
};

export default Home;
