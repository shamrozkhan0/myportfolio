import React from "react";
import Heading from "../common/Heading";
import { Container, Grid } from "@mui/material";
import ProjectCard from "../common/ProjectCard";

const LimlydocxData = {

    GithubLink: "https://github.com/shamrozkhan0/limlydocx",

    Features: [
        "Dashboard",
        "Can export in PDF or DOCX",
        "Collaborative editing with friends",
        "TTS ( Text To Speech )",
        "AI Bot ( Helps to write )",
    ],

    Skills: [
        "html5",
        "css3",
        "bootstrap",
        "javascript",
        "java",
        "spring",
        "mysql",
        "maven"
    ]
}


const Projects = ({ ref }) => {
    return (
        <>
            <Container
                ref={ref}
                aria-label="shamroz khan projects "
                sx={{
                    py: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                }}
            >
                <Heading SectionHeading="Projects" />

                <Grid container direction={"row"}>

                    <ProjectCard
                        Heading="LimlyDocx"
                        Headline="A cloud based collaborative text editor"
                        Features={LimlydocxData.Features}
                        Skill={LimlydocxData.Skills}
                        ButtonLink={LimlydocxData.GithubLink}
                    />


                </Grid>
            </Container>
        </>
    );
};

export default Projects;
