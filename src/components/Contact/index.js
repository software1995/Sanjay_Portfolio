// import React from 'react'
// import styled from 'styled-components'
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { Snackbar } from '@mui/material';

// const Container = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// position: relative;
// z-index: 1;
// align-items: center;
// @media (max-width: 960px) {
//     padding: 0px;
// }
// `

// const Wrapper = styled.div`
// position: relative;
// display: flex;
// justify-content: space-between;
// align-items: center;
// flex-direction: column;
// width: 100%;
// max-width: 1350px;
// padding: 0px 0px 80px 0px;
// gap: 12px;
// @media (max-width: 960px) {
//     flex-direction: column;
// }
// `

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


// const ContactForm = styled.form`
//   width: 95%;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   background-color: ${({ theme }) => theme.card};
//   padding: 32px;
//   border-radius: 16px;
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   margin-top: 28px;
//   gap: 12px;
// `

// const ContactTitle = styled.div`
//   font-size: 24px;
//   margin-bottom: 6px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
// `

// const ContactInput = styled.input`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `

// const ContactInputMessage = styled.textarea`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `

// const ContactButton = styled.input`
//   width: 100%;
//   text-decoration: none;
//   text-align: center;
//   background: hsla(271, 100%, 50%, 1);
//   background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//   background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//   background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//   padding: 13px 16px;
//   margin-top: 2px;
//   border-radius: 12px;
//   border: none;
//   color: ${({ theme }) => theme.text_primary};
//   font-size: 18px;
//   font-weight: 600;
// `



// const Contact = () => {

//   //hooks
//   const [open, setOpen] = React.useState(false);
//   const form = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
//       .then((result) => {
//         setOpen(true);
//         form.current.reset();
//       }, (error) => {
//         console.log(error.text);
//       });
//   }



//   return (
//     <Container>
//       <Wrapper>
//         <Title>Contact</Title>
//         <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
//         <ContactForm ref={form} onSubmit={handleSubmit}>
//           <ContactTitle>Email Me 🚀</ContactTitle>
//           <ContactInput placeholder="Your Email" name="from_email" />
//           <ContactInput placeholder="Your Name" name="from_name" />
//           <ContactInput placeholder="Subject" name="subject" />
//           <ContactInputMessage placeholder="Message" rows="4" name="message" />
//           <ContactButton type="submit" value="Send" />
//         </ContactForm>
//         <Snackbar
//           open={open}
//           autoHideDuration={6000}
//           onClose={()=>setOpen(false)}
//           message="Email sent successfully!"
//           severity="success"
//         />
//       </Wrapper>
//     </Container>
//   )
// }

// export default Contact





import React, { useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
// import { Snackbar, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';
import { useSnackbar } from '../GlobalSnackbar';


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

// Border radius animation keyframes
const pulsingRadius = keyframes`
  0%, 100% {
    border-radius: 12px;
  }
  25% {
    border-radius: 20px 12px 20px 12px;
  }
  50% {
    border-radius: 12px 20px 12px 20px;
  }
  75% {
    border-radius: 20px 12px 20px 12px;
  }
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
// z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.button`
  
position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
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
      #ffffff, 
      #a855f7, 
      #ffffff, 
      #3b82f6, 
      #6366f1  
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

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useSnackbar();




  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: name,
      email: email,
      title: subject,
      message: message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send('service_vinljip', 'template_nq3mxdm', templateParams, 'bplfX1CcD3JggJTUx')
      .then(() => {
        showSnackbar('✅ Message sent successfully!', 'success');

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        if (formRef.current) formRef.current.reset();
      })
      .catch((err) => {
        console.error('FAILED...', err);
        showSnackbar('❌ Failed to send message. Please try again.', 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };




  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out for questions or collaborations!</Desc>
        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ContactInput
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <ContactInput
            type="text"
            placeholder="Subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <ContactInputMessage
            rows="4"
            placeholder="Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <ContactButton type="submit" disabled={loading}>
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Send'}
          </ContactButton>

        </ContactForm>

      </Wrapper>
    </Container>
  );
};

export default Contact;
