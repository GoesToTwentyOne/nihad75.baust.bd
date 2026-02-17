import React, { useState } from 'react';
import styled from 'styled-components';
import { ExternalLink, FileText, Code, Database, Quote, Eye, Copy, X } from 'lucide-react';

const PublicationsContainer = styled.div`
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

const EqualContribution = styled.span`
  color: #4A628A;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-style: italic;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
`;

const YearSection = styled.div`
  margin-bottom: 4rem;
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
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`;

const PublicationItem = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
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

const PublicationTitle = styled.h3`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.5;
`;

const PublicationAuthors = styled.p`
  color: #475569;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const PublicationVenue = styled.p`
  color: #64748b;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const PublicationLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1.5rem;
`;

const PublicationButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(189, 241, 250, 0.8), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &.abstract {
    background: linear-gradient(135deg,#E195AB,#E14434);
    color: white;
  }
  
  &.citation {
    background: linear-gradient(135deg, #10b981, #A6B28B);
    color: white;
  }
`;

const PublicationLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
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
  

  &.pdf {
    background: linear-gradient(135deg, #7AB2D3, #4A628A);
    color: white;
  }
  
  &.code {
    background: linear-gradient(135deg,#52357B,#898AC4);;
    color: white;
  }
  
  &.dataset {
    background: linear-gradient(135deg,#415E72,#67b2e6);
    color: white;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
    text-decoration: none;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 12px;
  
  &.accepted {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
  }
  
  &.under-review {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
  }
  
  &.submitted {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    color: white;
  }
  &.rejected {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
  }
  &.preprint {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: white;
  
  }
  &.published {
    background: linear-gradient(135deg, #f45e5eff, #e76565ff);
    color: white;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
`;

const ModalTitle = styled.h3`
  color: #1e293b;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #64748b;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f1f5f9;
    color: #1e293b;
  }
`;

const ModalBody = styled.div`
  color: #475569;
  line-height: 1.7;
  font-size: 1rem;
`;

const CopyButton = styled.button`
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }
`;
// const strong = styled.b`
// font-weight: bold;
// color: '#10b981'

// `;
const Publications: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ type: 'abstract' | 'citation', title: string, content: string } | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy to clipboard');
    });
  };

  const openModal = (type: 'abstract' | 'citation', title: string, content: string) => {
    setModalContent({ type, title, content });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <PublicationsContainer>
      <Header>
        <HeaderText>
          Most recent publication updates can be found on my{' '}
          <a href="/" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6', fontWeight: '600'}}>
            <em>Google Scholar</em>
          </a>{' '}
          profile.
        </HeaderText>
        <EqualContribution>[*] denotes equal contribution</EqualContribution>
      </Header>
      <YearSection>
        <YearTitle>2025</YearTitle>
        <PublicationItem>
          <PublicationTitle>
             A Deep Learning Approach for Multiclass Domain-Specific Question Classification in Computer Science for Bangla Language
            <StatusBadge className="published">ECCE 2025</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> <strong style={{color: '#10b981'}}>Md. Nihad Hossain</strong>, Dip Karmakar, Prapti Nandi, Md. Osama, and Md. Khalid Syfullah
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Publisher:</strong> <em>IEEE Xplore</em> (<a href="https://ieeexplore.ieee.org/document/11013932" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}> 2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
             onClick={() =>
  openModal(
    'abstract',
    'CS Domain-Specific Classification',
    `Text classification is a pivotal challenge in Natural Language Processing (NLP), particularly for underrepresented languages like Bangla, spoken by over 230 million native speakers. Efficient categorization of Bangla text can facilitate rapid information retrieval and organization across diverse domains. However, the language’s unique structure and limited linguistic resources compared to English pose significant challenges. In this study, we introduce a novel dataset comprising domain-specific questions across various computer science fields, labeled with their respective domains. The dataset includes questions from 19 computer science courses such as Machine Learning, Digital Logic Design, and Data Structures, with over 20,000 samples in total. We benchmark several machine learning and deep learning models to classify these questions into their respective domains. Our findings demonstrate the effectiveness of these models in addressing domain-specific classification tasks, paving the way for enhanced information organization and domain-aware applications in Bangla text processing.`
  )
}

            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink className="pdf" href="https://ieeexplore.ieee.org/document/11013932" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            {/* <PublicationLink className="code" href="https://github.com/fatemafaria142/MultiBanFakeDetect-An-Extensive-Benchmark-Dataset-for-Multimodal-Bangla-Fake-News-Detection" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink> */}
            {/* <PublicationLink className="dataset" href="https://data.mendeley.com/datasets/k5pbz9795f/1" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink> */}
            <PublicationButton 
              className="citation"
                                onClick={() => openModal(
                    'citation', 
                    'TwentyOneCode', 
                    `@INPROCEEDINGS{11013932,
                    author={Hossain, Md. Nihad and Karmakar, Dip and Nandi, Prapti and Osama, Md. and Syfullah, Md. Khalid},
                    booktitle={2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)}, 
                    title={A Deep Learning Approach for Multiclass Domain-Specific Question Classification in Computer Science for Bangla Language}, 
                    year={2025},
                    volume={},
                    number={},
                    pages={1-6},
                    keywords={Deep learning;Computer science;Computational modeling;Text categorization;Organizations;Feature extraction;Transformers;Natural language processing;Vectors;Text processing;Natural Language Processing (NLP);Text Classification;Multiclass;Encoder Decoder;Deep Learning;Language Processing;Explainable AI;LIME;BERT;Support Vector Classifier (SVC)},
                    doi={10.1109/ECCE64574.2025.11013932}
                  }`
                  )}

            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
  </PublicationItem>




<PublicationItem>
          <PublicationTitle>
             Mental Health Sign Recognition in Bengali Text: An
Optimized Deep Learning Transformer Model for
Imbalanced Classification
            <StatusBadge className="published">ICCIT 2025</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> <strong style={{color: '#10b981'}}>Md. Nihad Hossain</strong>, Asif Hasan Tonmoy ,Dip Karmakar, Mashkurul Alam Ohi, Maliha Tasmim, and Md. Khalid Syfullah
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Publisher:</strong> <em>IEEE Xplore</em> (<a href="https://ieeexplore.ieee.org/document/11013932" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}> 2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
             onClick={() =>
  openModal(
    'abstract',
    'Imbalanced Text Classification',
    `Mental health disorders are becoming more com-
mon around the world, making early detection important.
While Natural Language Processing (NLP) and deep learning
have been widely used to study mental health in different
languages, research in Bengali is still limited, even though
it’s a widely spoken language. This study works to close that
gap by creating a complete system to detect mental health
conditions from Bengali text. We built a diverse dataset with
27,031 samples taken from social media and translated English
content, manually labeled into 12 different mental health con-
ditions through a careful process involving multiple annotators
and majority voting. Our method included detailed prepro-
cessing, feature extraction, and model building. We tested
two pre-trained BERT-based models (csebuetnlp BanglaBERT
and sagorsarker bangla-bert-base), which got F1 scores of
58.01% and 55.21% respectively. Our six-stacked transformer
model(TransMentalNet-6) with tuned hyperparameters clearly
performed better, reaching a 66.35% F1 score. Even though
the dataset was very imbalanced and mental health language
is complex, our approach showed strong improvements in clas-
sification. This research provides useful resources and methods
for Bengali mental health analysis, which can help support
early care and treatment in Bengali-speaking communities.`
  )
}

            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink className="pdf" href="https://ieeexplore.ieee.org/document/11013932" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            {/* <PublicationLink className="code" href="https://github.com/fatemafaria142/MultiBanFakeDetect-An-Extensive-Benchmark-Dataset-for-Multimodal-Bangla-Fake-News-Detection" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink> */}
            {/* <PublicationLink className="dataset" href="https://data.mendeley.com/datasets/k5pbz9795f/1" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink> */}
            <PublicationButton 
              className="citation"
              onClick={() => openModal(
                                'citation', 
                                'TwentyOneCode', 
                                `@INPROCEEDINGS{11013932,
                                author={Hossain, Md. Nihad and Karmakar, Dip and Nandi, Prapti and Osama, Md. and Syfullah, Md. Khalid},
                                booktitle={2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)}, 
                                title={A Deep Learning Approach for Multiclass Domain-Specific Question Classification in Computer Science for Bangla Language}, 
                                year={2025},
                                volume={},
                                number={},
                                pages={1-6},
                                keywords={Deep learning;Computer science;Computational modeling;Text categorization;Organizations;Feature extraction;Transformers;Natural language processing;Vectors;Text processing;Natural Language Processing (NLP);Text Classification;Multiclass;Encoder Decoder;Deep Learning;Language Processing;Explainable AI;LIME;BERT;Support Vector Classifier (SVC)},
                                doi={10.1109/ECCE64574.2025.11013932}
                              }`
                              )}

                                  >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>





        <PublicationItem>
          <PublicationTitle>
            Machine Learning-Based Feature Selection for
Chronic Kidney Disease Prediction in Type-1 and
Type-2 Diabetes Patients
            <StatusBadge className="published">EICT 2025</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
            <strong>Authors:</strong> <strong style={{color: '#10b981'}}>Md. Nihad Hossain</strong>, Nakib Hayte Chowdury ,Md. Osama, Monira Akter Mou, and Md. Khalid Syfullah
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Publisher:</strong> <em>IEEE Xplore</em> (<a href="https://ieeexplore.ieee.org/document/11013932" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}> 2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
             onClick={() =>
  openModal(
    'abstract',
    'Machine Learning',
    `Diabetes stands as the primary cause of
chronic kidney disease (CKD), highlighting the crit
ical need for early identification of CKD in diabetes
patients for effective treatment. This research ad
dressed the challenge of the asymptomatic progression
of CKD in patients with diabetes, who usually do not
undergo CKD-related tests during routine check-ups.
Our study focused on developing a feature selection
strategy to create CKD prediction models for patients
with type 1 diabetes (T1D) and type 2 diabetes (T2D),
utilizing readily available features from routine patient
check-ups. Using two distinct datasets, the Early
Diabetes Intervention Program (EDIC study) for T1D
and the Chronic Renal Insufficiency Cohort (CRIC
study) for T2D, we employed machine learning-based
prediction models, including Gradient Boosting Ma
chines (GBM),ExtremeGradientBoosting(XGB),Ex
tremely Randomized Trees Classifier (ERT), Random
Forest (RF), and CatBoost. An iterative backward
feature selection approach was applied to optimize
model performance. The XGB model demonstrated
an exceptional predictive accuracy of 95.81% in T1D,
while the Extra Trees model outperformed with an
accuracy of 89.11% in patients with T2D. The key
predictors of T1D included hypertension, duration
of insulin-dependent diabetes mellitus (IDDM), age,
SBP, LDL, total cholesterol, ACE inhibitors, drinkers,
and triglycerides. For T2D, crucial characteristics
comprise any cardiovascular disease (CVD), age, DBP,
hemoglobin A1c, BMI, SBP, HDL, total cholesterol,
LDL, triglycerides, sex, and smoking. These findings
offer targeted insights for accurate prediction of CKD
and personalized interventions in diabetes care. The
robust performance of our proposed models under
scores their potential to leverage routine check-up data
for earlier CKD detection and more timely interven
tions in diverse populations with diabetes.`
  )
}

            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink className="pdf" href="https://ieeexplore.ieee.org/document/11013932" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            {/* <PublicationLink className="code" href="https://github.com/fatemafaria142/MultiBanFakeDetect-An-Extensive-Benchmark-Dataset-for-Multimodal-Bangla-Fake-News-Detection" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink> */}
            {/* <PublicationLink className="dataset" href="https://data.mendeley.com/datasets/k5pbz9795f/1" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink> */}
            <PublicationButton 
              className="citation"
              onClick={() => openModal(
                                'citation', 
                                'TwentyOneCode', 
                                `@INPROCEEDINGS{11013932,
                                author={Hossain, Md. Nihad and Karmakar, Dip and Nandi, Prapti and Osama, Md. and Syfullah, Md. Khalid},
                                booktitle={2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)}, 
                                title={A Deep Learning Approach for Multiclass Domain-Specific Question Classification in Computer Science for Bangla Language}, 
                                year={2025},
                                volume={},
                                number={},
                                pages={1-6},
                                keywords={Deep learning;Computer science;Computational modeling;Text categorization;Organizations;Feature extraction;Transformers;Natural language processing;Vectors;Text processing;Natural Language Processing (NLP);Text Classification;Multiclass;Encoder Decoder;Deep Learning;Language Processing;Explainable AI;LIME;BERT;Support Vector Classifier (SVC)},
                                doi={10.1109/ECCE64574.2025.11013932}
                              }`
                              )}

                                  >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>




        
        <PublicationItem>
          <PublicationTitle>
               A Bengali Large Language Model for Computer Science–Oriented Conversational Agents
          <StatusBadge className="published">Q1 Journal</StatusBadge> <StatusBadge className="under-review">Under Review</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
             <strong>Authors:</strong> <strong style={{color: '#10b981'}}>Md. Nihad Hossain</strong>,Dip Karmakar, Prapti Nandi, Md. Osama, and Md. Khalid Syfullah
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Journal:</strong> <em>Under Review in IEEE Open Journal of the Computer Society</em> (<a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8782664" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>IEEE ComSoc</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'MindSpeak', 'Not published yet')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink className='pdf' href="#" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink className="code" href="#" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink className="dataset" href="#" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'MindSpeak', 'Not published yet')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>
        




           <PublicationItem>
          <PublicationTitle>
                False Fire Detection Rates Reduction using Backpropagation Neural Network Algorithm Optimized with Levenberg-Marquardt Method
          <StatusBadge className="published">Q1 Journal</StatusBadge> <StatusBadge className="under-review">Under Review</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
             <strong>Authors:</strong>  SM. Jahingir Alam ,<strong style={{color: '#10b981'}}>Md. Nihad Hossain</strong>, Mashkurul Alam Ohi,Fara Tabassum Mim, And Maliha Tasmim
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Journal:</strong> <em>Under Review in IEEE Open Journal of the Computer Society</em> (<a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8782664" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>IEEE ComSoc</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'MindSpeak', 'Not published yet')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink className='pdf' href="#" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink className="code" href="#" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink className="dataset" href="#" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'MindSpeak', 'Not published yet')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>





           <PublicationItem>
          <PublicationTitle>
              BnTube: Multimodal Deep Learning Insights to Boost Engagement for YouTube Content Creators and Viewers.
          <StatusBadge className="published">Q1 Journal</StatusBadge> <StatusBadge className="under-review">Under Review</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
             <strong>Authors:</strong> <strong style={{color: '#10b981'}}>Md. Nihad Hossain</strong>,Dip Karmakar, Prapti Nandi , SM Jahingir Alam and Md. Khalid Syfullah
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Journal:</strong> <em>Under Review in IEEE Open Journal of the Computer Society</em> (<a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8782664" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>IEEE ComSoc</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'MindSpeak', 'Not published yet')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink className='pdf' href="#" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink className="code" href="#" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink className="dataset" href="#" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'MindSpeak', 'Not published yet')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>



         <PublicationItem>
          <PublicationTitle>
                A Computer Vision Approach to Visual Question Generation in the Bengali Language
          <StatusBadge className="published">Q1 Journal</StatusBadge> <StatusBadge className="under-review">Under Review</StatusBadge>
          </PublicationTitle>
          <PublicationAuthors>
             <strong>Authors:</strong> <strong style={{color: '#10b981'}}>Md. Nihad Hossain</strong>, Mashkurul Alam Ohi, Maliha Tasmim, and Md. Khalid Syfullah
          </PublicationAuthors>
          <PublicationVenue>
            <strong>Journal:</strong> <em>Under Review in IEEE Open Journal of the Computer Society</em> (<a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8782664" target="_blank" rel="noopener noreferrer" style={{color: '#3b82f6'}}>IEEE ComSoc</a>)
          </PublicationVenue>
          <PublicationLinks>
            <PublicationButton 
              className="abstract"
              onClick={() => openModal('abstract', 'MindSpeak', 'Not published yet')}
            >
              <Eye size={16} />
              Abstract
            </PublicationButton>
            <PublicationLink className='pdf' href="#" target="_blank" rel="noopener noreferrer">
              <FileText size={16} />
              PDF
            </PublicationLink>
            <PublicationLink className="code" href="#" target="_blank" rel="noopener noreferrer">
              <Code size={16} />
              Code
            </PublicationLink>
            <PublicationLink className="dataset" href="#" target="_blank" rel="noopener noreferrer">
              <Database size={16} />
              Dataset
            </PublicationLink>
            <PublicationButton 
              className="citation"
              onClick={() => openModal('citation', 'MindSpeak', 'Not published yet')}
            >
              <Quote size={16} />
              Citation bib
            </PublicationButton>
          </PublicationLinks>
        </PublicationItem>

      </YearSection>




      {modalContent && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                {modalContent.type === 'abstract' ? 'Abstract' : 'Citation'} - {modalContent.title}
              </ModalTitle>
              <CloseButton onClick={closeModal}>
                <X size={20} />
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              {modalContent.type === 'citation' ? (
                <pre style={{ 
                  background: '#f8fafc', 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  overflow: 'auto',
                  whiteSpace: 'pre-wrap',
                  fontFamily: 'monospace',
                  fontSize: '0.9rem'
                }}>
                  {modalContent.content}
                </pre>
              ) : (
                <p>{modalContent.content}</p>
              )}
              {modalContent.type === 'citation' && (
                <CopyButton onClick={() => copyToClipboard(modalContent.content)}>
                  <Copy size={16} />
                  Copy Citation
                </CopyButton>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </PublicationsContainer>
  );
};

export default Publications; 