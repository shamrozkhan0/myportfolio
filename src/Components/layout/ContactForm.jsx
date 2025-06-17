import React, { useState } from 'react';

// MUI Compoenets
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Custom Components
import FAQ from '../common/FAQ';
import Heading from '../common/Heading';

const faqData = [
  { question: "Can you integrate third-party APIs or services?", answer: "Yes, I've integrated APIs for payments, authentication (OAuth2), email services, and more." },
  { question: "Can you collaborate with other developers or designers?", answer: "Yes, working with other developers will be fantastic." },
  { question: "Do you use version control and follow Git practices?", answer: "Absolutely. I use Git with proper commit messages, branching strategy (feature branches), and pull requests." },
  { question: "Do you write backend APIs from scratch?", answer: "Yes. I write custom REST APIs using Express or Spring Boot with proper structure, error handling, and response formatting." }
];

const ContactForm = ({ ref }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleChange = (index) => (_, isExpanded) => {
    setExpandedIndex(isExpanded ? index : null);
  };

  return (
    <Box ref={ref} component="section" sx={{py:10}} id='faq' >
      <Container sx={{display:'flex', alignItems:'center', flexDirection:'column', }}>

        <Heading SectionHeading="FAQ's" />

        <Box sx={{ display: "flex", flexDirection: 'column', gap: 4, pt: 10 }}>
          {faqData.map((faq, index) => (
            <FAQ key={index} heading={faq.question} text={faq.answer} onChange={handleChange(index)} expanded={expandedIndex == index} />
          ))
          }
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
