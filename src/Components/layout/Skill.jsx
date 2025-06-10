import {
    Container,
    Typography,
    Grid,
    Box,
    LinearProgress,
} from "@mui/material";
import "../../styles/Components/Skill.css";

const FrontendSkillImagesCDN = [
    {
        title: "html-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
        title: "css-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
        title: "javascript-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
        title: "react-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
        title: "bootstrap-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    {
        title: "material-ui-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    },
    {
        title: "vite-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
    {
        title: "vs-code-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
];

const BackendSkillImagesCDN = [
    {
        title: "java-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
        title: "spring-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
        title: "nodejs-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
        title: "expressjs-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
        title: "intelij-logo",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
    },
    {
        title: "maven-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
    },
    {
        title: "postman-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
];

const DatabaseSkillImageCDN = [
    {
        title: "mysql-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    },
    {
        title: "postgresql-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    },
    {
        title: "mongodb-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
        title: "hibernate-icon",
        cdn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original-wordmark.svg",
    },
];


function SkillsProgress({ heading, skill, gridSize }) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent:'center',
                    gap: 4,
                    borderRadius: 5,
                    px: { xs: 2, xl: 5 },
                    py: 3,
                    boxShadow: "0px 0px  100px rgba(173, 9, 94, 0.28) ",
                    bgcolor: 'rgba(255, 255, 255, 0.12)',
                    width: { xs: '100%', sm: 'auto' }
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: { xs: 3, md: 7 },
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {skill.map((image) => (
                        <Box
                            key={image.title}
                            component="img"
                            src={image.cdn}
                            alt={image.title}
                            aria-label={image.title}
                            sx={{
                                width: { xs: '50px', md: "60px" },
                                height: { xs: '50px', md: "60px" },
                            }}
                        ></Box>
                    ))}
                </Box>
            </Box>
        </>
    );
}



const Skill = ({ref}) => {
    return (
        <Container
            component="section"
            aria-label="technical skills of shamroz khan"
            id="skill"
            ref={ref}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                py: { xs: 10, md: 5, lg: 10 },
                gap: { xs: 4, sm: 7 },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "space-between",
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    gap: { xs: 5, md: 0 }
                }}
            >
                <Typography
                    component={"h1"}
                    variant="h2"
                    sx={{
                        fontWeight: "600",
                    }}
                >
                    Technical Skills & Tools
                </Typography>

                <Box
                    sx={{
                        display:{xs:'none', md:'flex'},
                        border: '2px dashed green',
                        width: '70%',
                        height: '2px',
                        mr: 4,
                        fontSize: 50,
                        position: 'relative',
                        '&::after': {
                            content: '"/"',
                            position: 'absolute',
                            top:-40,
                            right: -30,
                        }

                    }}
                />

            </Box>

            <Grid
                container
                direction={"column"}
                gap={2}
                sx={{

                    px: { xs: 0, md: 5, xl: 10 },
                    alignItems: { xs: 'center', sm: 'center' }
                }}
            >
                <SkillsProgress heading={"Frontend"} skill={FrontendSkillImagesCDN} />
                <SkillsProgress heading={"Backend"} skill={BackendSkillImagesCDN} />
                <SkillsProgress heading={"databases"} skill={DatabaseSkillImageCDN} />
            </Grid>
        </Container>
    );
};

export default Skill;
