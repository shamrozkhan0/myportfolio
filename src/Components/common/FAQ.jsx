import React from 'react';

// MUI Components
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// MUI Icon
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Custom CSS
import '@/styles/Components/ContactForm.css'

const FAQ = ({ heading, text, expanded, onChange }) => {
  return (
    <Accordion
      className="faq-accordion"
      expanded={expanded} onChange={onChange}
      sx={{ 
        width: "100%",
        bgcolor: 'transparent',
        borderRadius:"10px 10px 10px 10px !important",
        overflow:"hidden",
        boxShadow:'0px 0px 10px  #54575C',
        backdropFilter: "blur(0.9px)"
       }}
    >
      <AccordionSummary
        sx={{ bgcolor: theme => theme.palette.background.faqBg }}
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
      >
        <Typography variant="h6">{heading}</Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ bgcolor: theme => theme.palette.background.faqBg }}  >
        <Typography>{text}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQ;
