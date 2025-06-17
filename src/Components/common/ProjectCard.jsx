// MUI Components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Custom Imports
import CardButton from "./CardButton";

const ProjectCard = ({
  Image,
  Heading,
  Headline,
  Features,
  Skill,
  ButtonLink,
  ImageDescription,
}) => {
  return (
    <>
      <Grid
        size={{ xs: 12, md: 6, lg: 4 }}
        sx={{
          p: 1,
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            boxShadow: "2px 2px 100px 3px #360441  ",
            borderRadius: "10px",
            bgcolor: (theme) => theme.palette.background.primary,
          }}
        >
          <img
            src={Image}
            loading="lazy"
            alt={ImageDescription}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px 10px 0 0",
            }}
          />

          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography sx={{ fontSize: 30, fontWeight: 600 }} component="h2">
                {Heading}
              </Typography>

              <Typography
                sx={{ fontSize: 16, fontWeight: 500 }}
                color="text.secondary"
                component="h2"
              >
                {Headline}
              </Typography>
            </Box>

            <Box
              component="ul"
              sx={{
                pl: 2,
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {Features &&
                Features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
            </Box>

            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              {Skill &&
                Skill.map((name) => (
                  <Box
                    key={name}
                    component="img"
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`}
                    sx={{ width: 35 }}
                    alt={name}
                  />
                ))}
            </Box>

            <CardButton githubLink={ButtonLink} />
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default ProjectCard;
