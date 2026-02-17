import React from 'react';
import styled from 'styled-components';
import { Brain, Eye, Sparkles, BookOpen, Heart, Microscope, Leaf, ShieldCheck, Globe, User , Languages , Network  , Scan } from 'lucide-react';

const ResearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ResearchTitle = styled.h1`
  color: #1e293b;
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ResearchIntro = styled.p`
  text-align: center;
  color: #475569;
  font-family: 'Inter', sans-serif;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CategoryTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #006098ff, #0048c5ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ResearchArea = styled.div`
  margin-bottom: 4rem;
`;

const AreaTitle = styled.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #54a3d1ff, #7AB2D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, #7AB2D3, transparent);
    border-radius: 1px;
  }
`;

const PaperItem = styled.div`
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  line-height: 1.7;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 16px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
`;

const PaperTitle = styled.span`
  color: #1e293b;
  font-weight: 700;
  font-size: 1.05rem;
`;

const Research: React.FC = () => {
  return (
    <ResearchContainer>
      <ResearchTitle>Research Areas</ResearchTitle>
      <ResearchIntro>
        My research spans Natural Language Processing, Multimodal AI, and Computer Vision, focusing on low-resource languages, social media analysis, large language models, trustworthy AI, and Bengali ChatBot applications.
      </ResearchIntro>

      {/* NLP Category */}
      <CategoryTitle>1. Natural Language Processing (NLP)</CategoryTitle>

      <ResearchArea>
        <AreaTitle><User size={24}/> Human Computer Interaction</AreaTitle>
        <PaperItem>
  + <PaperTitle>A Deep Learning Approach for Multiclass
Domain-Specific Question Classification in
Computer Science for Bangla Language</PaperTitle>
</PaperItem>
<PaperItem>
  + <PaperTitle>Mental Health Sign Recognition in Bengali Text: An
Optimized Deep Learning Transformer Model for
Imbalanced Classification</PaperTitle>
</PaperItem>
<PaperItem>
  + <PaperTitle>A Bengali Large Language Model for Computer Science–Oriented Conversational Agents</PaperTitle>
</PaperItem>
       {/* NLP Category */}
      <CategoryTitle>2. Deep Learning and Machine Learning</CategoryTitle>
      </ResearchArea>
      <ResearchArea>
        <AreaTitle><Network size={24}/> Artificial Intelligence and Machine Learning </AreaTitle>
        <PaperItem>
  + <PaperTitle>False Fire Detection Rates Reduction using Backpropagation Neural Network Algorithm Optimized with Levenberg-Marquardt Method </PaperTitle>
</PaperItem>
<PaperItem>
  + <PaperTitle>Machine Learning-Based Feature Selection for
Chronic Kidney Disease Prediction in Type-1 and
Type-2 Diabetes Patients</PaperTitle>
</PaperItem>
 </ResearchArea>


      {/* Multimodal Category */}
      <CategoryTitle>3. Multimodal AI</CategoryTitle>
      <ResearchArea>
        <AreaTitle><Languages size={24}/> Low-Resource Languages</AreaTitle>
        <PaperItem>
  + <PaperTitle>BnTube: Multimodal Deep Learning Insights to Boost Engagement for
YouTube Content Creators and Viewers.</PaperTitle>
</PaperItem>

</ResearchArea>

  

      {/* CV Category */}
      <CategoryTitle>4. Computer Vision (CV)</CategoryTitle>

<ResearchArea>
<AreaTitle><Scan  size={24}/> Visual Question Generation(VQA) </AreaTitle>
<PaperItem>
  + <PaperTitle>A Computer Vision Approach to Visual Question Generation in the Bengali Language</PaperTitle>
</PaperItem>
  </ResearchArea>
</ResearchContainer>
  );
};

export default Research;
