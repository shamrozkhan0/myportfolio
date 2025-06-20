import React from "react";

// MUI Components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// FramerMotion Compoenent
import { motion } from "framer-motion"; 

// Custom Import
import Heading from "../common/Heading";
import { duration } from "@mui/material";

const FrontendSkillImagesCDN = [
  "html5",
  "css3",
  "javascript",
  "react",
  "bootstrap",
  "redux",
  "materialui",
  "vitejs",
  "vscode",
];

const BackendSkillImagesCDN = [
  "java",
  "spring",
  "nodejs",
  "express",
  "intellij",
  "maven",
  "postman",
];

const DatabaseSkillImageCDN = [
  "mysql",
  "postgresql",
  "mongodb",
  "hibernate",
];

const SkillsProgress = React.memo(({ skill }) => {


  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          borderRadius: 5,
          px: { xs: 2, xl: 5 },
          py: 3,
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: { xs: 3, md: 7 },
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          
          {skill.map((imageName, index) => {
            const timer = 0.1
            const delay = index * 0.2;
            const isDarkIcon = imageName === "express";
            return (
              <motion.img

              initial={{opacity:0}}
              whileInView={{opacity:1}}
              viewport={{once:true}}
              transition={{ delay : delay ,duration: .5, ease:"ease"  }}
              
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${imageName}/${imageName}-original.svg`}
                alt={`${imageName}-icon`}
                key={imageName}
                loading="lazy"
                style={{
                  width: "60px",
                  height: "60px",
                  filter: `${imageName === "express" ? "invert(1)" : ""} drop-shadow(0 0 6px #9119ac)`,
                }}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
})

const Skill = ({ ref }) => {
  return (
    <Container
      id="skills"
      component="section"
      aria-label="Technical Skills Of Shamroz khan"
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        py: { xs: 10, md: 5, lg: 10 },
        gap: { xs: 4, sm: 7 },
      }}
    >
      <Heading SectionHeading="Technical Skills & Tools" />

      <Grid
        container
        direction={"column"}
        gap={2}
        sx={{
          pt: { xs: 0, md: 5 },
          px: { xs: 0, md: 5, xl: 10 },
          alignItems: { xs: "center", sm: "center" },
        }}
      >
        <SkillsProgress skill={FrontendSkillImagesCDN} />
        <SkillsProgress skill={BackendSkillImagesCDN} />
        <SkillsProgress skill={DatabaseSkillImageCDN} />
      </Grid>
    </Container>
  );
};

export default Skill;
