import React from 'react';
import styled from 'styled-components';
import { Calendar, ExternalLink, Award, GraduationCap, Users, BookOpen, Trophy } from 'lucide-react';

const NewsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  font-family: 'Inter', sans-serif;
`;

const YearSection = styled.div`
  margin-bottom: 4rem;
  position: relative;
`;

const YearTitle = styled.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
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
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`;

const NewsItem = styled.div`
  margin-bottom: 2rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  line-height: 1.6;
  position: relative;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 2rem;
    width: 16px;
    height: 16px;
    background: #7AB2D3;
    border-radius: 50%;
    border: 4px solid #ffffff;
    box-shadow: 0 0 0 4px #7AB2D3;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateX(8px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    background: #4A628A;
    box-shadow: 0 0 0 4px #4A628A, 0 0 20px rgba(74, 98, 138, 0.4);
  }
`;

const NewsDate = styled.span`
  color: #4A628A;
  font-weight: 700;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.5rem;
`;

const NewsContent = styled.div`
  color: #475569;
  font-size: 1rem;
  line-height: 1.7;
`;

const NewsLink = styled.a`
  color: #7AB2D3;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: #4A628A;
    text-decoration: none;
    transform: translateY(-1px);
  }
`;

const News: React.FC = () => {
  return (
    <NewsContainer>
      <PageHeader>
        <PageTitle>Recent News & Achievements</PageTitle>
        <PageSubtitle>Stay updated with my latest research and professional milestones</PageSubtitle>
      </PageHeader>
       <YearSection>
  <YearTitle>2025</YearTitle>
  <TimelineContainer>
  <NewsItem>
  <NewsDate>
    <Calendar size={18} />
    [Feb 2025]
  </NewsDate>
  <NewsContent>
    A paper titled <i>"A Deep Learning Approach for Multiclass Domain‑Specific Question Classification in Computer Science for Bangla Language"</i> was published in the <NewsLink href="https://ieee.org/conferences/ecce" target="_blank" rel="noopener noreferrer">IEEE ECCE International Conference 2025 <ExternalLink size={14} /></NewsLink>. The work introduces a novel dataset and deep learning models to classify domain-specific questions in Bangla, addressing challenges in NLP for underrepresented languages.
  </NewsContent>
</NewsItem>

<NewsItem>
  <NewsDate>
    <Calendar size={18} />
    [Mar 2025]
  </NewsDate>
  <NewsContent>
    A paper titled <i>"Mental Health Sign Recognition in Bengali Text: An Optimized Deep Learning Transformer Model for Imbalanced Classification"</i> was accepted at the <NewsLink href="https://iccitinternational.org" target="_blank" rel="noopener noreferrer">28th International Conference on Computer and Information Technology (ICCIT 2025) <ExternalLink size={14} /></NewsLink>, presenting a transformer-based approach for mental health classification in Bengali under data imbalance conditions.
  </NewsContent>
</NewsItem>

<NewsItem>
  <NewsDate>
    <Calendar size={18} />
    [Apr 2025]
  </NewsDate>
  <NewsContent>
    A paper titled <i>"Machine Learning-Based Feature Selection for Chronic Kidney Disease Prediction in Type‑1 and Type‑2 Diabetes Patients"</i> was presented at the <NewsLink href="https://eict-conference.org" target="_blank" rel="noopener noreferrer">European International Conference on Technology (EICT 2025) <ExternalLink size={14} /></NewsLink>, showcasing supervised learning techniques for health risk prediction models.
  </NewsContent>
</NewsItem>


  </TimelineContainer>
</YearSection>


      {/* <YearSection>
        <YearTitle>2024</YearTitle>
        <TimelineContainer>
          <NewsItem>
            <NewsDate>
              <Calendar size={18} />
              [October]
            </NewsDate>
            <NewsContent>
              Attended the 18th International Conference on Information Technology and Applications and presented two papers. (<NewsLink href="https://www.icita.world/#/" target="_blank" rel="noopener noreferrer">ICITA 2024 <ExternalLink size={14} /></NewsLink>)
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <Calendar size={18} />
              [October]
            </NewsDate>
            <NewsContent>
              Attended the 4th International Conference on Computing and Communication Networks presented two papers. (<NewsLink href="https://icccn.co.uk/" target="_blank" rel="noopener noreferrer">ICCCNet 2024 <ExternalLink size={14} /></NewsLink>)
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <Calendar size={18} />
              [September]
            </NewsDate>
            <NewsContent>
              Attended the IEEE Region 10 Symposium at Netaji Subhas University of Technology (NSUT), New Delhi (<NewsLink href="https://ieeedelhi-tensymp2024.org/" target="_blank" rel="noopener noreferrer">TENSYMP2024 <ExternalLink size={14} /></NewsLink>).
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <Calendar size={18} />
              [August]
            </NewsDate>
            <NewsContent>
              Two paper got accepted at 18th International Conference on Information Technology and Applications (<NewsLink href="https://www.icita.world/#/" target="_blank" rel="noopener noreferrer">ICITA 2024 <ExternalLink size={14} /></NewsLink>).
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <Calendar size={18} />
              [June]
            </NewsDate>
            <NewsContent>
              One paper got accepted at The IEEE Region 10 Symposium (<NewsLink href="https://ieeedelhi-tensymp2024.org/" target="_blank" rel="noopener noreferrer">TENSYMP2024 <ExternalLink size={14} /></NewsLink>).
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <Calendar size={18} />
              [May]
            </NewsDate>
            <NewsContent>
              Two paper got accepted at 4th International Conference on Computing and Communication Networks (<NewsLink href="https://icccn.co.uk/" target="_blank" rel="noopener noreferrer">ICCCNet 2024 <ExternalLink size={14} /></NewsLink>).
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <Users size={18} />
              [March]
            </NewsDate>
            <NewsContent>
              Joined as an Machine Learning Engineer (Level-I) at <NewsLink href="https://www.linkedin.com/company/anttroboticsltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer">ANTT Robotics Ltd. <ExternalLink size={14} /></NewsLink>
            </NewsContent>
          </NewsItem>
        </TimelineContainer>
      </YearSection> */}

      {/* <YearSection>
        <YearTitle>2023</YearTitle>
        <TimelineContainer>
          <NewsItem>
            <NewsDate>
              <GraduationCap size={18} />
              [December]
            </NewsDate>
            <NewsContent>
              Graduated from "Ahsanullah University of Science and Technology" <NewsLink href="https://aust.edu/" target="_blank" rel="noopener noreferrer">AUST <ExternalLink size={14} /></NewsLink>
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <BookOpen size={18} />
              [November]
            </NewsDate>
            <NewsContent>
              Defended undergraduate thesis on "Generative Adversarial Networks for Crop Disease: A Case Study with Potato Disease Classification and Instance Segmentation"
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <Trophy size={18} />
              [August]
            </NewsDate>
            <NewsContent>
              Secured 7<sup>th</sup> position at DL Sprint 2.0 - BUET CSE Fest 2023. <NewsLink href="https://www.kaggle.com/competitions/dlsprint2/discussion/433389" target="_blank" rel="noopener noreferrer">DL Sprint 2.0 <ExternalLink size={14} /></NewsLink>
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <Calendar size={18} />
              [July]
            </NewsDate>
            <NewsContent>
              Participate in DL Sprint 2.0 - BUET CSE Fest 2023. <NewsLink href="https://www.kaggle.com/competitions/dlsprint2/overview" target="_blank" rel="noopener noreferrer">DL Sprint 2.0 <ExternalLink size={14} /></NewsLink>
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <Award size={18} />
              [June]
            </NewsDate>
            <NewsContent>
              Secured 1<sup>st</sup> position at RESEARCH SYMPOSIUM 2023: AN INTRA-AUST RESEARCH EXHIBITION <NewsLink href="https://aust.edu/events/1996" target="_blank" rel="noopener noreferrer">RESEARCH SYMPOSIUM 2023 <ExternalLink size={14} /></NewsLink>
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <Calendar size={18} />
              [June]
            </NewsDate>
            <NewsContent>
              Attended the RESEARCH SYMPOSIUM 2023: AN INTRA-AUST RESEARCH EXHIBITION <NewsLink href="https://aust.edu/events/1996" target="_blank" rel="noopener noreferrer">RESEARCH SYMPOSIUM 2023 <ExternalLink size={14} /></NewsLink>
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <BookOpen size={18} />
              [April]
            </NewsDate>
            <NewsContent>
              One paper got published at <NewsLink href="https://ieee-ccwc.org/" target="_blank" rel="noopener noreferrer">CCWC 2023 <ExternalLink size={14} /></NewsLink>.
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <Calendar size={18} />
              [March]
            </NewsDate>
            <NewsContent>
              Attended the 2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC 2023) (Virtual), Las Vegas, NV, USA.
            </NewsContent>
          </NewsItem>
          
          <NewsItem>
            <NewsDate>
              <BookOpen size={18} />
              [February]
            </NewsDate>
            <NewsContent>
              One paper got accepted at IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC) <NewsLink href="https://ieee-ccwc.org/" target="_blank" rel="noopener noreferrer">CCWC 2023 <ExternalLink size={14} /></NewsLink>.
            </NewsContent>
          </NewsItem>
        </TimelineContainer>
      </YearSection> */}
    </NewsContainer>
  );
};

export default News; 