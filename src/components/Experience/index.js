
// import React from 'react'
// import styled from 'styled-components'
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import ExperienceCard from '../Cards/ExperienceCard';
// import { experiences } from '../../data/constants';

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     position: relative;
//     z-index: 1;
//     align-items: center;
//     padding: 40px 0px 80px 0px;
//     @media (max-width: 960px) {
//         padding: 0px;
//     }
// `;

// const Wrapper = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     max-width: 1350px;
//     padding: 80px 0;
//     gap: 12px;
//     @media (max-width: 960px) {
//         flex-direction: column;
//     }
// `;

// const Title = styled.div`
// font-size: 42px;
// text-align: center;
// font-weight: 600;
// margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//       margin-top: 12px;
//       font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//     font-size: 18px;
//     text-align: center;
//     max-width: 600px;
//     color: ${({ theme }) => theme.text_secondary};
//     @media (max-width: 768px) {
//         margin-top: 12px;
//         font-size: 16px;
//     }
// `;

// const TimelineSection = styled.div`
//     width: 100%;
//     max-width: 1000px;
//     margin-top: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 12px;
// `;



// const index = () => {
//     return (
//         <Container id="experience">
//             <Wrapper>
//                 <Title>Experience</Title>
//                 <Desc>
//                     My work experience as a software engineer and working on different companies and projects.
//                 </Desc>
//                 <TimelineSection>
//                     <Timeline>
//                         {experiences.map((experience,index) => (
//                             <TimelineItem>
//                                 <TimelineSeparator>
//                                     <TimelineDot variant="outlined" color="secondary" />
//                                     {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
//                                 </TimelineSeparator>
//                                 <TimelineContent sx={{ py: '12px', px: 2 }}>
//                                     <ExperienceCard experience={experience}/>
//                                 </TimelineContent>
//                             </TimelineItem>
//                         ))}
//                     </Timeline>

//                 </TimelineSection>
//             </Wrapper>
//         </Container>
//     )
// }

// export default index

// import React from 'react'
// import styled from 'styled-components'
// import { experiences } from '../../data/constants';

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     position: relative;
//     z-index: 1;
//     align-items: center;
//     padding: 80px 0px;
//     background: ${({ theme }) => theme.card_light};
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);

//     @media (max-width: 960px) {
//         padding: 60px 0px;
//     }

//     @media (max-width: 640px) {
//         padding: 40px 0px;
//     }
// `;

// const Wrapper = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     max-width: 1100px;
//     padding: 0px 30px;
//     gap: 12px;
// `;

// const Title = styled.div`
//     font-size: 42px;
//     text-align: center;
//     font-weight: 600;
//     margin-top: 20px;
//     color: ${({ theme }) => theme.text_primary};

//     @media (max-width: 768px) {
//         margin-top: 12px;
//         font-size: 36px;
//     }
// `;

// const Subtitle = styled.div`
//     width: 120px;
//     height: 4px;
//     background: ${({ theme }) => theme.primary};
//     margin: 14px auto;
//     border-radius: 3px;
// `;

// const Desc = styled.div`
//     font-size: 18px;
//     text-align: center;
//     max-width: 700px;
//     color: ${({ theme }) => theme.text_secondary};
//     margin-bottom: 40px;

//     @media (max-width: 768px) {
//         margin-top: 12px;
//         font-size: 16px;
//     }
// `;

// const TimelineContainer = styled.div`
//     width: 100%;
//     max-width: 1000px;
//     margin-top: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 12px;
//     position: relative;

//     &::after {
//         content: '';
//         position: absolute;
//         width: 4px;
//         background-color: ${({ theme }) => theme.text_primary};
//         top: 0;
//         bottom: 0;
//         left: 50%;
//         transform: translateX(-50%);

//         @media (max-width: 768px) {
//             left: 16px;
//             transform: translateX(0);
//         }
//     }
// `;

// const TimelineItem = styled.div`
//     display: flex;
//     width: 100%;
//     flex-direction: ${({ index }) => (index % 2 === 0 ? 'row' : 'row-reverse')};
//     align-items: center;
//     justify-content: center;
//     margin-bottom: 80px;

//     @media (max-width: 768px) {
//         flex-direction: row;
//         margin-bottom: 50px;
//     }
// `;

// const TimelineDot = styled.div`
//     width: 52px;
//     height: 52px;
//     background-color: ${({ theme }) => theme.card};
//     border-radius: 50%;
//     border: 4px solid ${({ theme }) => theme.primary};
//     z-index: 2;
//     position: absolute;
//     left: 50%;
//     transform: translateX(-50%);
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     @media (max-width: 768px) {
//         width: 40px;
//         height: 40px;
//         left: 16px;
//         transform: translateX(0);
//     }

//     img {
//         width: 100%;
//         height: 100%;
//         border-radius: 50%;
//         object-fit: cover;
//     }
// `;

// const ExperienceCard = styled.div`
//     width: 45%;
//     padding: 20px;
//     background: ${({ theme }) => theme.card};
//     border-radius: 16px;
//     border: 1px solid ${({ theme }) => theme.text_primary + 20};
//     box-shadow: 0 0 20px 4px rgba(130, 69, 236, 0.3);
//     margin: ${({ index }) => (index % 2 === 0 ? '0 55% 0 0' : '0 0 0 55%')};
//     transition: all 0.3s ease;

//     &:hover {
//         transform: translateY(-5px);
//         box-shadow: 0 0 25px 5px rgba(130, 69, 236, 0.4);
//     }

//     @media (max-width: 768px) {
//         width: 85%;
//         margin: 0 0 0 40px;
//     }

//     @media (max-width: 480px) {
//         width: 85%;
//         margin: 0 0 0 40px;
//     }
// `;

// const CardHeader = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 24px;
//     margin-bottom: 16px;

//     @media (max-width: 640px) {
//         gap: 16px;
//     }
// `;

// const CompanyLogo = styled.div`
//     width: 56px;
//     height: 56px;
//     background: white;
//     border-radius: 8px;
//     overflow: hidden;

//     img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//     }

//     @media (max-width: 640px) {
//         width: 48px;
//         height: 48px;
//     }
// `;

// const CardHeaderText = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 4px;
// `;

// const Role = styled.h3`
//     font-size: 22px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text_primary};

//     @media (max-width: 640px) {
//         font-size: 18px;
//     }
// `;

// const Company = styled.p`
//     font-size: 16px;
//     font-weight: 500;
//     color: ${({ theme }) => theme.text_secondary};

//     @media (max-width: 640px) {
//         font-size: 14px;
//     }
// `;

// const Date = styled.span`
//     font-size: 14px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_secondary + 80};

//     @media (max-width: 640px) {
//         font-size: 12px;
//     }
// `;

// const Description = styled.p`
//     font-size: 16px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_secondary};
//     margin-bottom: 16px;

//     @media (max-width: 640px) {
//         font-size: 14px;
//     }
// `;

// const SkillsContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
// `;

// const SkillsTitle = styled.h4`
//     font-size: 16px;
//     font-weight: 500;
//     color: ${({ theme }) => theme.text_primary};
// `;

// const Skills = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     gap: 8px;
// `;

// const Skill = styled.span`
//     font-size: 14px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_primary};
//     background: ${({ theme }) => theme.primary + 15};
//     border: 1px solid ${({ theme }) => theme.primary};
//     border-radius: 12px;
//     padding: 4px 12px;

//     @media (max-width: 640px) {
//         font-size: 12px;
//         padding: 3px 10px;
//     }
// `;

// const Experience = () => {
//     return (
//         <Container id="experience">
//             <Wrapper>
//                 <Title>EXPERIENCE</Title>
//                 <Subtitle />
//                 <Desc>
//                     A collection of my work experience and the roles I have taken in various organizations
//                 </Desc>
//                 <TimelineContainer>
//                     {experiences.map((experience, index) => (
//                         <TimelineItem key={experience.id} index={index}>
//                             <TimelineDot>
//                                 <img src={experience.img} alt={experience.company} />
//                             </TimelineDot>
//                             <ExperienceCard index={index}>
//                                 <CardHeader>
//                                     <CompanyLogo>
//                                         <img src={experience.img} alt={experience.company} />
//                                     </CompanyLogo>
//                                     <CardHeaderText>
//                                         <Role>{experience.role}</Role>
//                                         <Company>{experience.company}</Company>
//                                         <Date>{experience.date}</Date>
//                                     </CardHeaderText>
//                                 </CardHeader>
//                                 <Description>{experience.desc}</Description>
//                                 <SkillsContainer>
//                                     <SkillsTitle>Skills:</SkillsTitle>
//                                     <Skills>
//                                         {experience.skills?.map((skill, index) => (
//                                             <Skill key={index}>{skill}</Skill>
//                                         ))}
//                                     </Skills>
//                                 </SkillsContainer>
//                             </ExperienceCard>
//                         </TimelineItem>
//                     ))}
//                 </TimelineContainer>
//             </Wrapper>
//         </Container>
//     )
// }

// export default Experience



// import React from 'react';
// import styled from 'styled-components';
// import { experiences } from '../../data/constants';

// const Container = styled.section`
//   padding: 6rem 0;
//   position: relative;
//   background-color: #0a0a16;
//   width: 100%;
// `;

// const Wrapper = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 2rem;

//   @media (max-width: 768px) {
//     padding: 0 1.5rem;
//   }
// `;

// const Header = styled.div`
//   text-align: center;
//   margin-bottom: 4rem;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   font-weight: 700;
//   color: white;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const Line = styled.div`
//   width: 8rem;
//   height: 0.25rem;
//   background-color: #854CE6;
//   margin: 1rem auto;
//   border-radius: 0.25rem;
// `;

// const Subtitle = styled.p`
//   margin-top: 1rem;
//   color: #94a3b8;
//   font-size: 1.125rem;
//   font-weight: 500;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const TimelineContainer = styled.div`
//   position: relative;

//   &::before {
//     content: '';
//     position: absolute;
//     width: 2px;
//     background-color: rgba(255, 255, 255, 0.6);
//     top: 0;
//     bottom: 0;
//     left: 50%;
//     transform: translateX(-50%);

//     @media (max-width: 768px) {
//       left: 2rem;
//     }
//   }
// `;

// const TimelineItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 4rem;
//   position: relative;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: ${({ isEven }) => (isEven ? 'flex-end' : 'flex-start')};
//   }

//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// const TimelineCircle = styled.div`
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 5rem;
//   height: 5rem;
//   border-radius: 50%;
//   border: 4px solid #854CE6;
//   background-color: white;
//   z-index: 2;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;

//   @media (max-width: 768px) {
//     left: 2rem;
//     width: 3.5rem;
//     height: 3.5rem;
//   }

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 50%;
//   }
// `;

// const Card = styled.div`
//   width: 45%;
//   background-color: #1e1e38;
//   border-radius: 1rem;
//   padding: 2rem;
//   box-shadow: 0 0 20px 1px rgba(130, 69, 236, 0.3);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(10px);
//   transition: transform 0.3s;

//   &:hover {
//     transform: scale(1.05);
//   }

//   @media (max-width: 768px) {
//     width: calc(100% - 5rem);
//     margin-left: 3.5rem;
//     padding: 1.5rem;
//   }

//   @media (max-width: 576px) {
//     padding: 1rem;
//   }
// `;

// const CardHeader = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.5rem;
//   margin-bottom: 1rem;

//   @media (max-width: 576px) {
//     gap: 1rem;
//   }
// `;

// const CompanyLogo = styled.div`
//   width: 4rem;
//   height: 4rem;
//   background-color: white;
//   border-radius: 0.5rem;
//   overflow: hidden;
//   flex-shrink: 0;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   @media (max-width: 576px) {
//     width: 3rem;
//     height: 3rem;
//   }
// `;

// const HeaderInfo = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Role = styled.h3`
//   font-size: 1.75rem;
//   font-weight: 700;
//   color: white;
//   margin: 0;

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }

//   @media (max-width: 576px) {
//     font-size: 1.25rem;
//   }
// `;

// const Company = styled.h4`
//   font-size: 1.125rem;
//   font-weight: 500;
//   color: #cbd5e1;
//   margin: 0.25rem 0;

//   @media (max-width: 576px) {
//     font-size: 1rem;
//   }
// `;

// const Date = styled.p`
//   font-size: 0.875rem;
//   color: #64748b;
//   margin: 0;
// `;

// const Description = styled.p`
//   color: #94a3b8;
//   font-size: 1rem;
//   line-height: 1.6;
//   margin-bottom: 1.5rem;

//   @media (max-width: 576px) {
//     font-size: 0.875rem;
//   }
// `;

// const SkillsTitle = styled.h5`
//   font-size: 1rem;
//   font-weight: 600;
//   color: white;
//   margin-bottom: 0.75rem;
// `;

// const SkillsList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
//   padding: 0;
//   margin: 0;
// `;

// const SkillItem = styled.li`
//   list-style: none;
//   background-color: #854CE6;
//   color: #e2e8f0;
//   padding: 0.5rem 1rem;
//   border-radius: 0.5rem;
//   font-size: 0.875rem;
//   border: 1px solid #9ca3af;

//   @media (max-width: 576px) {
//     font-size: 0.75rem;
//     padding: 0.25rem 0.75rem;
//   }
// `;

// const Experience = () => {
//     return (
//         <Container id="experience">
//             <Wrapper>
//                 <Header>
//                     <Title>EXPERIENCE</Title>
//                     <Line />
//                     <Subtitle>
//                         A collection of my work experience and the roles I have taken in
//                         various organizations
//                     </Subtitle>
//                 </Header>

//                 <TimelineContainer>
//                     {experiences.map((experience, index) => (
//                         <TimelineItem key={experience.id} isEven={index % 2 === 0}>
//                             <TimelineCircle>
//                                 <img src={experience.img} alt={experience.company} />
//                             </TimelineCircle>

//                             <Card>
//                                 <CardHeader>
//                                     <CompanyLogo>
//                                         <img src={experience.img} alt={experience.company} />
//                                     </CompanyLogo>

//                                     <HeaderInfo>
//                                         <Role>{experience.role}</Role>
//                                         <Company>{experience.company}</Company>
//                                         <Date>{experience.date}</Date>
//                                     </HeaderInfo>
//                                 </CardHeader>

//                                 <Description>{experience.desc}</Description>

//                                 <SkillsTitle>Skills:</SkillsTitle>
//                                 <SkillsList>
//                                     {experience.skills?.map((skill, index) => (
//                                         <SkillItem key={index}>{skill}</SkillItem>
//                                     ))}
//                                 </SkillsList>
//                             </Card>
//                         </TimelineItem>
//                     ))}
//                 </TimelineContainer>
//             </Wrapper>
//         </Container>
//     );
// };

// export default Experience;




// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { experiences } from '../../data/constants';

// const Container = styled.section`
//   padding: 6rem 0;
//   position: relative;
//   background-color: #0a0a16;
//   width: 100%;
// `;

// const Wrapper = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 2rem;

//   @media (max-width: 768px) {
//     padding: 0 1.5rem;
//   }
// `;

// const Header = styled.div`
//   text-align: center;
//   margin-bottom: 4rem;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   font-weight: 700;
//   color: white;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const Line = styled.div`
//   width: 8rem;
//   height: 0.25rem;
//   background-color: #854CE6;
//   margin: 1rem auto;
//   border-radius: 0.25rem;
// `;

// const Subtitle = styled.p`
//   margin-top: 1rem;
//   color: #94a3b8;
//   font-size: 1.125rem;
//   font-weight: 500;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const TimelineContainer = styled.div`
//   position: relative;

//   &::before {
//     content: '';
//     position: absolute;
//     width: 2px;
//     background-color: rgba(255, 255, 255, 0.6);
//     top: 0;
//     bottom: 0;
//     left: 50%;
//     transform: translateX(-50%);

//     @media (max-width: 768px) {
//       left: 2rem;
//     }
//   }
// `;

// const TimelineItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 4rem;
//   position: relative;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: ${({ isEven }) => (isEven ? 'flex-end' : 'flex-start')};
//   }

//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// const TimelineCircle = styled.div`
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 5rem;
//   height: 5rem;
//   border-radius: 50%;
//   border: 4px solid #854CE6;
//   background-color: white;
//   z-index: 2;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;

//   @media (max-width: 768px) {
//     left: 2rem;
//     width: 3.5rem;
//     height: 3.5rem;
//   }

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 50%;
//   }
// `;

// const Card = styled.div`
//   width: 45%;
//   background-color: #1e1e38;
//   border-radius: 1rem;
//   padding: 2rem;
//   box-shadow: 0 0 20px 1px rgba(130, 69, 236, 0.3);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(10px);
//   transition: all 0.4s ease;
//   position: relative;
//   overflow: hidden;
//   cursor: pointer;

//   &:hover {
//     transform: scale(1.03);
//     box-shadow: 0 0 30px 2px rgba(130, 69, 236, 0.4);
//   }

//   @media (max-width: 768px) {
//     width: calc(100% - 5rem);
//     margin-left: 3.5rem;
//     padding: 1.5rem;
//   }

//   @media (max-width: 576px) {
//     padding: 1rem;
//   }
// `;

// const CardHeader = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.5rem;
//   margin-bottom: 1rem;

//   @media (max-width: 576px) {
//     gap: 1rem;
//   }
// `;

// const CompanyLogo = styled.div`
//   width: 4rem;
//   height: 4rem;
//   background-color: white;
//   border-radius: 0.5rem;
//   overflow: hidden;
//   flex-shrink: 0;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   @media (max-width: 576px) {
//     width: 3rem;
//     height: 3rem;
//   }
// `;

// const HeaderInfo = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Role = styled.h3`
//   font-size: 1.75rem;
//   font-weight: 700;
//   color: white;
//   margin: 0;

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }

//   @media (max-width: 576px) {
//     font-size: 1.25rem;
//   }
// `;

// const Company = styled.h4`
//   font-size: 1.125rem;
//   font-weight: 500;
//   color: #cbd5e1;
//   margin: 0.25rem 0;

//   @media (max-width: 576px) {
//     font-size: 1rem;
//   }
// `;

// const Date = styled.p`
//   font-size: 0.875rem;
//   color: #64748b;
//   margin: 0;
// `;

// const Description = styled.p`
//   color: #94a3b8;
//   font-size: 1rem;
//   line-height: 1.6;
//   margin-bottom: 1.5rem;
//   max-height: ${props => props.expanded ? 'none' : '4.8rem'};
//   overflow: hidden;
//   position: relative;
//   transition: max-height 0.5s ease;

//   ${props => !props.expanded && `
//     &::after {
//       content: '';
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       width: 100%;
//       height: 1.6rem;
//       background: linear-gradient(transparent, #1e1e38);
//       pointer-events: none;
//     }
//   `}

//   @media (max-width: 576px) {
//     font-size: 0.875rem;
//     max-height: ${props => props.expanded ? 'none' : '3.5rem'};
//   }
// `;

// const ReadMoreButton = styled.button`
//   background: none;
//   border: none;
//   color: #854CE6;
//   font-size: 0.875rem;
//   font-weight: 600;
//   cursor: pointer;
//   padding: 0;
//   margin-bottom: 1.5rem;
//   display: inline-flex;
//   align-items: center;

//   &:hover {
//     text-decoration: underline;
//   }

//   &::after {
//     content: ${props => props.expanded ? '"▲"' : '"▼"'};
//     font-size: 0.7rem;
//     margin-left: 0.5rem;
//   }
// `;

// const SkillsTitle = styled.h5`
//   font-size: 1rem;
//   font-weight: 600;
//   color: white;
//   margin-bottom: 0.75rem;
// `;

// const SkillsList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
//   padding: 0;
//   margin: 0;
// `;

// const SkillItem = styled.li`
//   list-style: none;
//   background-color: #854CE6;
//   color: #e2e8f0;
//   padding: 0.5rem 1rem;
//   border-radius: 0.5rem;
//   font-size: 0.875rem;
//   border: 1px solid #9ca3af;

//   @media (max-width: 576px) {
//     font-size: 0.75rem;
//     padding: 0.25rem 0.75rem;
//   }
// `;

// const Experience = () => {
//     const [expandedDescriptions, setExpandedDescriptions] = useState({});

//     const toggleDescription = (id) => {
//         setExpandedDescriptions(prev => ({
//             ...prev,
//             [id]: !prev[id]
//         }));
//     };

//     return (
//         <Container id="experience">
//             <Wrapper>
//                 <Header>
//                     <Title>EXPERIENCE</Title>
//                     <Line />
//                     <Subtitle>
//                         A collection of my work experience and the roles I have taken in
//                         various organizations
//                     </Subtitle>
//                 </Header>

//                 <TimelineContainer>
//                     {experiences.map((experience, index) => (
//                         <TimelineItem key={experience.id} isEven={index % 2 === 0}>
//                             <TimelineCircle>
//                                 <img src={experience.img} alt={experience.company} />
//                             </TimelineCircle>

//                             <Card>
//                                 <CardHeader>
//                                     <CompanyLogo>
//                                         <img src={experience.img} alt={experience.company} />
//                                     </CompanyLogo>

//                                     <HeaderInfo>
//                                         <Role>{experience.role}</Role>
//                                         <Company>{experience.company}</Company>
//                                         <Date>{experience.date}</Date>
//                                     </HeaderInfo>
//                                 </CardHeader>

//                                 <Description expanded={expandedDescriptions[experience.id]}>
//                                     {experience.desc}
//                                 </Description>

//                                 {experience.desc && experience.desc.length > 150 && (
//                                     <ReadMoreButton
//                                         expanded={expandedDescriptions[experience.id]}
//                                         onClick={() => toggleDescription(experience.id)}
//                                     >
//                                         {expandedDescriptions[experience.id] ? 'Show less' : 'Read more'}
//                                     </ReadMoreButton>
//                                 )}

//                                 <SkillsTitle>Skills:</SkillsTitle>
//                                 <SkillsList>
//                                     {experience.skills?.map((skill, index) => (
//                                         <SkillItem key={index}>{skill}</SkillItem>
//                                     ))}
//                                 </SkillsList>
//                             </Card>
//                         </TimelineItem>
//                     ))}
//                 </TimelineContainer>
//             </Wrapper>
//         </Container>
//     );
// };

// export default Experience;



// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { experiences } from '../../data/constants';

// const Container = styled.section`
//   padding: 6rem 0;
//   position: relative;
//   background-color: #0a0a16;
//   width: 100%;
// `;

// const Wrapper = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 2rem;

//   @media (max-width: 768px) {
//     padding: 0 1.5rem;
//   }
// `;

// const Header = styled.div`
//   text-align: center;
//   margin-bottom: 4rem;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   font-weight: 700;
//   color: white;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const Line = styled.div`
//   width: 8rem;
//   height: 0.25rem;
//   background-color: #854CE6;
//   margin: 1rem auto;
//   border-radius: 0.25rem;
// `;

// const Subtitle = styled.p`
//   margin-top: 1rem;
//   color: #94a3b8;
//   font-size: 1.125rem;
//   font-weight: 500;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const TimelineContainer = styled.div`
//   position: relative;

//   &::before {
//     content: '';
//     position: absolute;
//     width: 2px;
//     background-color: rgba(255, 255, 255, 0.6);
//     top: 0;
//     bottom: 0;
//     left: 50%;
//     transform: translateX(-50%);

//     @media (max-width: 768px) {
//       left: 2rem;
//     }
//   }
// `;

// const TimelineItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 4rem;
//   position: relative;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: ${({ isEven }) => (isEven ? 'flex-end' : 'flex-start')};
//   }

//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// const TimelineCircle = styled.div`
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 5rem;
//   height: 5rem;
//   border-radius: 50%;
//   border: 4px solid #854CE6;
//   background-color: white;
//   z-index: 2;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;

//   @media (max-width: 768px) {
//     left: 2rem;
//     width: 3.5rem;
//     height: 3.5rem;
//   }

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 50%;
//   }
// `;

// // Animation for the glowing border
// const glowAnimation = keyframes`
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// `;

// // Card container with relative positioning for the border
// const CardContainer = styled.div`
//   width: 45%;
//   position: relative;
//   border-radius: 1rem;
//   padding: 2px;
//   background: linear-gradient(90deg, #854CE6, #ffffff, #854CE6);
//   background-size: 200% 200%;
//   animation: ${glowAnimation} 3s ease infinite;

//   @media (max-width: 768px) {
//     width: calc(100% - 5rem);
//     margin-left: 3.5rem;
//   }
// `;

// // Removed the separate border animation component

// const Card = styled.div`
//   width: 100%;
//   background-color: #1e1e38;
//   border-radius: 1rem;
//   padding: 2rem;
//   box-shadow: 0 0 20px 1px rgba(130, 69, 236, 0.3);
//   backdrop-filter: blur(10px);
//   transition: all 0.4s ease;
//   position: relative;
//   z-index: 2;
//   cursor: pointer;

//   &:hover {
//     transform: scale(1.03);
//     box-shadow: 0 0 30px 2px rgba(130, 69, 236, 0.4);
//   }

//   @media (max-width: 768px) {
//     padding: 1.5rem;
//   }

//   @media (max-width: 576px) {
//     padding: 1rem;
//   }
// `;

// const CardHeader = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 1.5rem;
//   margin-bottom: 1rem;

//   @media (max-width: 576px) {
//     gap: 1rem;
//   }
// `;

// const CompanyLogo = styled.div`
//   width: 4rem;
//   height: 4rem;
//   background-color: white;
//   border-radius: 0.5rem;
//   overflow: hidden;
//   flex-shrink: 0;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   @media (max-width: 576px) {
//     width: 3rem;
//     height: 3rem;
//   }
// `;

// const HeaderInfo = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Role = styled.h3`
//   font-size: 1.75rem;
//   font-weight: 700;
//   color: white;
//   margin: 0;
//   line-height: 1.2;

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }

//   @media (max-width: 576px) {
//     font-size: 1.25rem;
//   }
// `;

// const Company = styled.h4`
//   font-size: 1.125rem;
//   font-weight: 500;
//   color: #cbd5e1;
//   margin: 0.25rem 0;

//   @media (max-width: 576px) {
//     font-size: 1rem;
//   }
// `;

// const Date = styled.p`
//   font-size: 0.875rem;
//   color: #64748b;
//   margin: 0;
// `;

// const Description = styled.p`
//   color: #94a3b8;
//   font-size: 1rem;
//   line-height: 1.6;
//   margin-bottom: 1.5rem;
//   text-align: justify;
//   max-height: ${props => props.expanded ? 'none' : '4.8rem'};
//   overflow: hidden;
//   position: relative;
//   transition: max-height 0.6s ease;

//   ${props => !props.expanded && `
//     &::after {
//       content: '';
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       width: 100%;
//       height: 1.6rem;
//       background: linear-gradient(transparent, #1e1e38);
//       pointer-events: none;
//     }
//   `}

//   @media (max-width: 576px) {
//     font-size: 0.875rem;
//     max-height: ${props => props.expanded ? 'none' : '3.5rem'};
//   }
// `;

// const ReadMoreButton = styled.button`
//   background: none;
//   border: none;
//   color: #854CE6;
//   font-size: 0.875rem;
//   font-weight: 600;
//   cursor: pointer;
//   padding: 0;
//   margin-bottom: 1.5rem;
//   display: inline-flex;
//   align-items: center;

//   &:hover {
//     text-decoration: underline;
//   }

//   &::after {
//     content: ${props => props.expanded ? '"▲"' : '"▼"'};
//     font-size: 0.7rem;
//     margin-left: 0.5rem;
//   }
// `;

// const SkillsTitle = styled.h5`
//   font-size: 1rem;
//   font-weight: 600;
//   color: white;
//   margin-bottom: 0.75rem;
// `;

// const SkillsList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
//   padding: 0;
//   margin: 0;
// `;

// const SkillItem = styled.li`
//   list-style: none;
//   background-color: #854CE6;
//   color: #e2e8f0;
//   padding: 0.5rem 1rem;
//   border-radius: 0.5rem;
//   font-size: 0.875rem;
//   border: 1px solid #9ca3af;

//   @media (max-width: 576px) {
//     font-size: 0.75rem;
//     padding: 0.25rem 0.75rem;
//   }
// `;

// const Experience = () => {
//     const [expandedDescriptions, setExpandedDescriptions] = useState({});

//     const toggleDescription = (id) => {
//         setExpandedDescriptions(prev => ({
//             ...prev,
//             [id]: !prev[id]
//         }));
//     };

//     return (
//         <Container id="experience">
//             <Wrapper>
//                 <Header>
//                     <Title>EXPERIENCE</Title>
//                     <Line />
//                     <Subtitle>
//                         A collection of my work experience and the roles I have taken in
//                         various organizations
//                     </Subtitle>
//                 </Header>

//                 <TimelineContainer>
//                     {experiences.map((experience, index) => (
//                         <TimelineItem key={experience.id} isEven={index % 2 === 0}>
//                             <TimelineCircle>
//                                 <img src={experience.img} alt={experience.company} />
//                             </TimelineCircle>

//                             <CardContainer>
//                                 <Card>
//                                     <CardHeader>
//                                         <CompanyLogo>
//                                             <img src={experience.img} alt={experience.company} />
//                                         </CompanyLogo>

//                                         <HeaderInfo>
//                                             <Role>{experience.role}</Role>
//                                             <Company>{experience.company}</Company>
//                                             <Date>{experience.date}</Date>
//                                         </HeaderInfo>
//                                     </CardHeader>

//                                     <Description expanded={expandedDescriptions[experience.id]}>
//                                         {experience.desc}
//                                     </Description>

//                                     {experience.desc && experience.desc.length > 150 && (
//                                         <ReadMoreButton
//                                             expanded={expandedDescriptions[experience.id]}
//                                             onClick={() => toggleDescription(experience.id)}
//                                         >
//                                             {expandedDescriptions[experience.id] ? 'Show less' : 'Read more'}
//                                         </ReadMoreButton>
//                                     )}

//                                     <SkillsTitle>Skills:</SkillsTitle>
//                                     <SkillsList>
//                                         {experience.skills?.map((skill, index) => (
//                                             <SkillItem key={index}>{skill}</SkillItem>
//                                         ))}
//                                     </SkillsList>
//                                 </Card>
//                             </CardContainer>
//                         </TimelineItem>
//                     ))}
//                 </TimelineContainer>
//             </Wrapper>
//         </Container >
//     );
// };

// export default Experience;



import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { experiences } from '../../data/constants';

const Container = styled.section`
  padding: 6rem 0;
  position: relative;
  background-color: #0a0a16;
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Line = styled.div`
  width: 8rem;
  height: 0.25rem;
  background-color: #854CE6;
  margin: 1rem auto;
  border-radius: 0.25rem;
`;

const Subtitle = styled.p`
  margin-top: 1rem;
  color: #94a3b8;
  font-size: 1.125rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Timeline container with the vertical line
const TimelineContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 2px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

// Timeline item that alternates position
const TimelineItem = styled.div`
  display: flex;
  margin-bottom: 5rem;
  justify-content: ${({ isEven }) => (isEven ? 'flex-end' : 'flex-start')};
  position: relative;
  z-index: 1;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 4rem;
  }
`;

// Circle on the timeline that overlaps the line
const TimelineCircle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 4px solid #854CE6;
  background-color: white;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  top: 4rem;

  @media (max-width: 768px) {
    left: 30px;
    width: 3.5rem;
    height: 3.5rem;
  }

  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
    border-radius: 50%;
  }
`;

// Animation for the glowing border
const glowAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Card container that touches the timeline
const CardContainer = styled.div`
  width: 45%;
  position: relative;
  border-radius: 1rem;
  padding: 2px;
  background: linear-gradient(90deg, #854CE6, #ffffff, #854CE6);
  background-size: 200% 200%;
  animation: ${glowAnimation} 3s ease infinite;
  
  ${({ isEven }) => isEven ? `
    &::before {
      content: '';
      position: absolute;
      width: calc(10% + 0.5rem);
      height: 2px;
      background-color: white;
      top: 4.5rem;
      right: 100%;
      z-index: 1;
    }
  ` : `
    &::before {
      content: '';
      position: absolute;
      width: calc(10% + 0.5rem);
      height: 2px;
      background-color: white;
      top: 4.5rem;
      left: 100%;
      z-index: 1;
    }
  `}

  @media (max-width: 768px) {
    width: calc(100% - 4rem);
    margin-left: 4rem;
    
    &::before {
      left: -2rem !important;
      right: auto !important;
      width: 2rem !important;
    }
  }
`;

const Card = styled.div`
  width: 100%;
  background-color: #1e1e38;
  border-radius: 0.95rem;
  padding: 2rem;
  box-shadow: 0 0 20px 1px rgba(130, 69, 236, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px 2px rgba(130, 69, 236, 0.4);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const CompanyLogo = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }

  @media (max-width: 576px) {
    width: 3rem;
    height: 3rem;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Role = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

const Company = styled.h4`
  font-size: 1.125rem;
  font-weight: 500;
  color: #cbd5e1;
  margin: 0.25rem 0;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const Date = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
`;

const Description = styled.p`
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: justify;
  max-height: ${props => props.expanded ? 'none' : '4.8rem'};
  overflow: hidden;
  position: relative;
  transition: max-height 0.6s ease;
  
  ${props => !props.expanded && `
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1.6rem;
      background: linear-gradient(transparent, #1e1e38);
      pointer-events: none;
    }
  `}

  @media (max-width: 576px) {
    font-size: 0.875rem;
    max-height: ${props => props.expanded ? 'none' : '3.5rem'};
  }
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #854CE6;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  &::after {
    content: ${props => props.expanded ? '"▲"' : '"▼"'};
    font-size: 0.7rem;
    margin-left: 0.5rem;
  }
`;

const SkillsTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.75rem;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  list-style: none;
  background-color: #854CE6;
  color: #e2e8f0;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  border: 1px solid #9ca3af;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background-color: #9561f0;
  }

  @media (max-width: 576px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
  }
`;

const Experience = () => {
    const [expandedDescriptions, setExpandedDescriptions] = useState({});

    const toggleDescription = (id) => {
        setExpandedDescriptions(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <Container id="experience">
            <Wrapper>
                <Header>
                    <Title>EXPERIENCE</Title>
                    <Line />
                    <Subtitle>
                        A collection of my work experience and the roles I have taken in
                        various organizations
                    </Subtitle>
                </Header>

                <TimelineContainer>
                    {experiences.map((experience, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <TimelineItem key={experience.id} isEven={isEven}>
                                <TimelineCircle>
                                    <img src={experience.img} alt={experience.company} />
                                </TimelineCircle>

                                <CardContainer isEven={isEven}>
                                    <Card>
                                        <CardHeader>
                                            <CompanyLogo>
                                                <img src={experience.img} alt={experience.company} />
                                            </CompanyLogo>

                                            <HeaderInfo>
                                                <Role>{experience.role}</Role>
                                                <Company>{experience.company}</Company>
                                                <Date>{experience.date}</Date>
                                            </HeaderInfo>
                                        </CardHeader>

                                        <Description expanded={expandedDescriptions[experience.id]}>
                                            {experience.desc}
                                        </Description>

                                        {experience.desc && experience.desc.length > 150 && (
                                            <ReadMoreButton
                                                expanded={expandedDescriptions[experience.id]}
                                                onClick={() => toggleDescription(experience.id)}
                                            >
                                                {expandedDescriptions[experience.id] ? 'Show less' : 'Read more'}
                                            </ReadMoreButton>
                                        )}

                                        <SkillsTitle>Skills:</SkillsTitle>
                                        <SkillsList>
                                            {experience.skills?.map((skill, idx) => (
                                                <SkillItem key={idx}>{skill}</SkillItem>
                                            ))}
                                        </SkillsList>
                                    </Card>
                                </CardContainer>
                            </TimelineItem>
                        );
                    })}
                </TimelineContainer>
            </Wrapper>
        </Container>
    );
};

export default Experience;