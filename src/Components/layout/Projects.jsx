// MUI Components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Custom Imports
import Heading from "../common/Heading";
import ProjectCard from "../common/ProjectCard";

const LimlydocxData = {

    GithubLink: "https://github.com/shamrozkhan0/limlydocx",

    Features: [
        "Dashboard",
        "Can export in PDF and DOCX",
        "Collaborative editing with friends",
        "TTS ( Text To Speech )",
        "AI Bot ( Help's to write )",
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
                component="section"
                id="projects"
                ref={ref}
                aria-label="Shamroz Khan's Full-Stack Projects "
                sx={{
                    pt: 5,
                    pb: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                }}
            >
                <Heading SectionHeading="Projects" />

                <Grid sx={{ pt: { xs: 0, md: 3, justifyContent: 'start' } }} container direction={"row"}>

                    <ProjectCard
                        Heading="LimlyDocx"
                        Headline="A cloud based collaborative text editor"
                        Features={LimlydocxData.Features}
                        Skill={LimlydocxData.Skills}
                        ButtonLink={LimlydocxData.GithubLink}
                        ImageDescription="LimlyDocx project login page"
                    />


                </Grid>
            </Container>
        </>
    );
};

export default Projects;
