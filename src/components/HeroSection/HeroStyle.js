// import styled from "styled-components";
// import _default from "../../themes/default";

// export const HeroContainer = styled.div`
//   background: ${({ theme }) => theme.card_light};
//   display: flex;
//   justify-content: center;
//   position: relative;
//   padding: 80px 30px;
//   @media (max-width: 960px) {
//     padding: 66px 16px;
//   }
//   @media (max-width: 640) {
//     padding: 32px 16px;
//   }
//   z-index: 1;

//   clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
// `;

// export const HeroBg = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: end;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   max-width: 1360px;
//   overflow: hidden;
//   padding: 0 30px;
//   top: 50%;
//   left: 50%;
//   -webkit-transform: translateX(-50%) translateY(-50%);
//   transform: translateX(-50%) translateY(-50%);

//   @media (max-width: 960px) {
//     justify-content: center;
//     padding: 0 0px;
//   }
// `;

// export const HeroInnerContainer = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   max-width: 1100px;

//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;
// export const HeroLeftContainer = styled.div`
//   width: 100%;
//   order: 1;
//   @media (max-width: 960px) {
//     order: 2;
//     margin-bottom: 30px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }

//   @media (max-width: 640px) {
//     order: 2;
//     margin-bottom: 30px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// export const HeroRightContainer = styled.div`
//   width: 100%;
//   display: flex;
//   order: 2;
//   justify-content: end;
//   gap: 12px;
//   @media (max-width: 960px) {
//     order: 1;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 80px;
//   }

//   @media (max-width: 640px) {
//     margin-bottom: 30px;
//   }
// `;

// export const Img = styled.img`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   max-width: 400px;
//   max-height: 400px;
//   border-radius: 50%;
//   border: 2px solid ${({ theme }) => theme.primary};

//   @media (max-width: 768px) {
//     max-width: 400px;
//     max-height: 400px;
//   }

//   @media (max-width: 640px) {
//     max-width: 280px;
//     max-height: 280px;
//   }
// `;

// export const Title = styled.div`
//   font-weight: 700;
//   font-size: 50px;
//   color: ${({ theme }) => theme.text_primary};
//   line-height: 68px;
//   @media (max-width: 960px) {
//     text-align: center;
//   }

//   @media (max-width: 640px) {
//     font-size: 40px;
//     line-height: 48px;
//     margin-bottom: 8px;
//   }
// `;

// export const TextLoop = styled.div`
//   font-weight: 600;
//   font-size: 32px;
//   display: flex;
//   gap: 12px;
//   color: ${({ theme }) => theme.text_primary};
//   line-height: 68px;
//   @media (max-width: 960px) {
//     text-align: center;
//   }
//   @media (max-width: 640px) {
//     font-size: 22px;
//     line-height: 48px;
//     margin-bottom: 16px;
//   }
// `;

// export const Span = styled.span`
//   color: ${({ theme }) => theme.primary};
//   cursor: pointer;
// `;

// export const SubTitle = styled.div`
//   font-size: 20px;
//   line-height: 32px;
//   margin-bottom: 42px;
//   color: ${({ theme }) => theme.text_primary + 95};

//   @media (max-width: 960px) {
//     text-align: center;
//   }

//   @media (max-width: 640px) {
//     font-size: 16px;
//     line-height: 32px;
//   }
// `;

// export const ResumeButton = styled.a`
//     -webkit-appearance: button;
//     -moz-appearance: button;
//     appearance: button;
//     text-decoration: none;
//     width: 95%;
//     max-width: 300px;
//     text-align: center;
//     padding: 16px 0;
//     color:${({ theme }) => theme.white};
//     border-radius: 5px;
//     cursor: pointer;
//     font-size: 20px;
//     font-weight: 600;
//     transition: all 0.2s ease-in-out !important;
//     background: hsla(271, 100%, 50%, 1);
//     background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//     background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//     background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//     box-shadow:  20px 20px 60px #1F2634,
//     -20px -20px 60px #1F2634;
//     &:hover {
//         transform: scale(1.05);
//     transition: all 0.4s ease-in-out;
//     box-shadow:  20px 20px 60px #1F2634,
//     filter: brightness(1);
//     }    


//     @media (max-width: 640px) {
//         padding: 12px 0;
//         font-size: 18px;
//     } 

// `;





import styled, { keyframes } from "styled-components";
import _default from "../../themes/default";

// Walking border animation keyframes
const walkingBorder = keyframes`
  0%, 100% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 0% 100%;
  }
`;

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  max-width: 300px;
  padding: 16px 0;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  color: white;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px; 
    padding: 2px; /* Border width */
    background: linear-gradient(
      60deg, 
      #ffffff, /* Indigo */
      #a855f7, /* Purple */
      #ffffff, /* Pink */
      #3b82f6, /* Blue */
      #6366f1  /* Indigo again to complete the loop */
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    background-size: 300% 300%;
    animation: ${walkingBorder} 4s linear infinite;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(100, 100, 255, 0.4);
    
    &::before {
      animation: ${walkingBorder} 2s linear infinite;
    }
  }
  
  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;