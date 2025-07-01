// import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
// import { Modal } from '@mui/material';
// import React from 'react'
// import styled from 'styled-components'

// const Container = styled.div`
// width: 100%;
// height: 100%;
// position: absolute;
// top: 0;
// left: 0;
// background-color: #000000a7;
// display: flex;
// align-items: top;
// justify-content: center;
// overflow-y: scroll;
// transition: all 0.5s ease;
// `;

// const Wrapper = styled.div`
// max-width: 800px;
// width: 100%;
// border-radius: 16px;
// margin: 50px 12px;
// height: min-content;
// background-color: ${({ theme }) => theme.card};
// color: ${({ theme }) => theme.text_primary};
// padding: 20px;
// display: flex;
// flex-direction: column;
// position: relative;
// `;

// const Title = styled.div`
//   font-size: 28px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
//   margin: 8px 6px 0px 6px;
//   @media only screen and (max-width: 600px) {
//       font-size: 24px;
//       margin: 6px 6px 0px 6px;
//   }
// `;

// const Date = styled.div`
//     font-size: 16px;
//     margin: 2px 6px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_secondary};
//     @media only screen and (max-width: 768px){
//         font-size: 12px;
//     }
// `



// const Desc = styled.div`
//     font-size: 16px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_primary};
//     margin: 8px 6px;
//     @media only screen and (max-width: 600px) {
//         font-size: 14px;
//         margin: 6px 6px;
//     }
// `;

// const Image = styled.img`
//     width: 100%;
//     object-fit: cover;
//     border-radius: 12px;
//     margin-top: 30px;
//     box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
// `;

// const Label = styled.div`
//     font-size: 20px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text_primary};
//     margin: 8px 6px;
//     @media only screen and (max-width: 600px) {
//         font-size: 16px;
//         margin: 8px 6px;
//     }
// `;

// const Tags = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     margin: 8px 0px;
//     @media only screen and (max-width: 600px) {
//         margin: 4px 0px;
//     }
// `;

// const Tag = styled.div`
//     font-size: 14px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.primary};
//     margin: 4px;
//     padding: 4px 8px;
//     border-radius: 8px;
//     background-color: ${({ theme }) => theme.primary + 20};
//     @media only screen and (max-width: 600px) {
//         font-size: 12px;
//     }
// `;

// const Members = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 6px;
//     flex-wrap: wrap;
//     margin: 12px 6px;
//     @media only screen and (max-width: 600px) {
//         margin: 4px 6px;
//     }
// `;

// const Member = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 12px;
// `;

// const MemberImage = styled.img`
//     width: 50px;
//     height: 50px;
//     object-fit: cover;
//     border-radius: 50%;
//     margin-bottom: 4px;
//     box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
//     @media only screen and (max-width: 600px) {
//         width: 32px;
//         height: 32px;
//     }
// `;

// const MemberName = styled.div`
//     font-size: 16px;
//     font-weight: 500;
//     width: 200px;
//     color: ${({ theme }) => theme.text_primary};
//     @media only screen and (max-width: 600px) {
//         font-size: 14px;
//     }
// `;


// const ButtonGroup = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     margin: 12px 0px;
//     gap: 12px;
// `;

// const Button = styled.a`
//     width: 100%;
//     text-align: center;
//     font-size: 16px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text_primary};
//     padding: 12px 16px;
//     border-radius: 8px;
//     background-color: ${({ theme }) => theme.primary};
//     ${({ dull, theme }) => dull && `
//         background-color: ${theme.bgLight};
//         color: ${theme.text_secondary};
//         &:hover {
//             background-color: ${({ theme }) => theme.bg + 99};
//         }
//     `}
//     cursor: pointer;
//     text-decoration: none;
//     transition: all 0.5s ease;
//     &:hover {
//         background-color: ${({ theme }) => theme.primary + 99};
//     }
//     @media only screen and (max-width: 600px) {
//         font-size: 12px;
//     }
// `;


// const index = ({ openModal, setOpenModal }) => {
//     const project = openModal?.project;
//     return (
//         <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
//             <Container>
//                 <Wrapper>
//                     <CloseRounded
//                         style={{
//                             position: "absolute",
//                             top: "10px",
//                             right: "20px",
//                             cursor: "pointer",
//                         }}
//                         onClick={() => setOpenModal({ state: false, project: null })}
//                     />
//                     {/* <Image src={project?.image} /> */}
//                     <Image src={project?.images} />
//                     <Title>{project?.title}</Title>
//                     <Date>{project.date}</Date>
//                     <Tags>
//                         {project?.tags.map((tag) => (
//                             <Tag>{tag}</Tag>
//                         ))}
//                     </Tags>
//                     <Desc>{project?.description}</Desc>
//                     {project.member && (
//                         <>
//                             <Label>Members</Label>
//                             <Members>
//                                 {project?.member.map((member) => (
//                                     <Member>
//                                         <MemberImage src={member.img} />
//                                         <MemberName>{member.name}</MemberName>
//                                         <a href={member.github} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
//                                             <GitHub />
//                                         </a>
//                                         <a href={member.linkedin} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
//                                             <LinkedIn />
//                                         </a>
//                                     </Member>
//                                 ))}
//                             </Members>
//                         </>
//                     )}
//                     <ButtonGroup>
//                         <Button dull href={project?.github} target='new'>View Code</Button>
//                         <Button href={project?.webapp} target='new'>View Live App</Button>
//                     </ButtonGroup>
//                 </Wrapper>
//             </Container>

//         </Modal>
//     )
// }

// export default index


import { CloseRounded, GitHub, LinkedIn, ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

// Carousel Container
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-top: 30px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
  background-color: #f5f5f5;
`;

// Image slides container
const SlidesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transform: translateX(-${props => props.currentIndex * 100}%);
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #f5f5f5;
  
  &.loading {
    opacity: 0.5;
  }
`;

// Navigation arrows
const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 10px' : 'right: 10px'};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    transform: translateY(-50%) scale(1.1);
  }
  
  @media only screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

// Dots indicator
const DotsContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? props.theme.primary : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.primary : 'rgba(255, 255, 255, 0.8)'};
  }
`;

// Thumbnails
const ThumbnailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
`;

const Thumbnail = styled.div`
  width: 40px;
  flex-shrink: 0;
  aspect-ratio: 9/16;
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  background-color: #f5f5f5;
  transition: all 0.2s ease;
  
  ${props => props.active && `
    box-shadow: 0 0 0 1px ${props.theme.primary};
  `}
  
  &:hover {
    transform: translateY(-1px);
  }
  
  @media only screen and (max-width: 768px) {
    width: 45px;
  }
  
  @media only screen and (max-width: 480px) {
    width: 50px;
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  
  ${props => props.active ? `
    filter: none;
  ` : `
    filter: brightness(0.9);
  `}
  
  ${Thumbnail}:hover & {
    filter: brightness(1);
  }
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  ${({ dull, theme }) => dull && `
    background-color: ${theme.bgLight};
    color: ${theme.text_secondary};
    &:hover {
      background-color: ${({ theme }) => theme.bg + 99};
    }
  `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ProjectModal = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesArray, setImagesArray] = useState([]);

  // Prepare images array when project changes
  useEffect(() => {
    if (project) {
      // Create an array of all images
      let allImages = [];

      // Add main image if it exists
      if (project.image) {
        allImages.push(project.image);
      }

      // Add additional images if they exist
      if (project.images && Array.isArray(project.images)) {
        allImages = [...allImages, ...project.images];
      }
      // If images is a string (a single image), add it
      else if (project.images && typeof project.images === 'string') {
        allImages.push(project.images);
      }

      setImagesArray(allImages);
      setCurrentIndex(0); // Reset to first image when project changes
    }
  }, [project]);

  // Auto-advance slides
  useEffect(() => {
    if (imagesArray.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [imagesArray.length]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  if (!project) return null;

  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
              zIndex: 10,
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />

          {/* Image Carousel */}
          {imagesArray.length > 0 && (
            <>
              <CarouselContainer>
                <SlidesContainer currentIndex={currentIndex}>
                  {imagesArray.map((img, index) => (
                    <Slide key={index}>
                      <Image
                        src={img}
                        alt={`${project.title} - ${index}`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/800x450/f5f5f5/999999/?text=Image+Not+Available';
                        }}
                      />
                    </Slide>
                  ))}
                </SlidesContainer>

                {/* Navigation Arrows (only show if multiple images) */}
                {imagesArray.length > 1 && (
                  <>
                    <Arrow direction="left" onClick={prevSlide}>
                      <ArrowBackIosNew style={{ color: 'white', fontSize: '20px' }} />
                    </Arrow>
                    <Arrow direction="right" onClick={nextSlide}>
                      <ArrowForwardIos style={{ color: 'white', fontSize: '20px' }} />
                    </Arrow>

                    {/* Dots Indicator */}
                    <DotsContainer>
                      {imagesArray.map((_, index) => (
                        <Dot
                          key={index}
                          active={currentIndex === index}
                          onClick={() => setCurrentIndex(index)}
                        />
                      ))}
                    </DotsContainer>
                  </>
                )}
              </CarouselContainer>

              {/* Thumbnails - Small Size */}
              {imagesArray.length > 1 && (
                <ThumbnailsContainer>
                  {imagesArray.map((img, index) => (
                    <Thumbnail
                      key={index}
                      active={currentIndex === index}
                      onClick={() => setCurrentIndex(index)}
                    >
                      <ThumbnailImage
                        src={img}
                        active={currentIndex === index}
                        alt={`Thumbnail ${index}`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/70x125/f5f5f5/999999/?text=Image';
                        }}
                      />
                    </Thumbnail>
                  ))}
                </ThumbnailsContainer>
              )}
            </>
          )}

          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          {project.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project?.member.map((member, index) => (
                  <Member key={index}>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>
                    <a href={member.github} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <GitHub />
                    </a>
                    <a href={member.linkedin} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <LinkedIn />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button dull href={project?.linkedin} target='new'>View Linkedin</Button>
            <Button href={project?.webapp} target='new'>View Live App</Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectModal;