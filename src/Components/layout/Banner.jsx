import { Container, Box, Grid, IconButton, Typography } from "@mui/material";
import { LinkedIn, GitHub, Download } from "@mui/icons-material";

import BannerProfie from "@/assets/images/shamroz.avif";
import ShifterIcon from "@/components/common/ShifterIconSVG";

const BannerLinks = [
  {
    icon: <Download sx={{ fontSize: 30 }} />,
    url: "../../assets/images/shamroz.png",
    top: 0,
    right: 10,
    isDownload: true,
  },
  {
    icon: <ShifterIcon size={30} />,
    url: "https://shifters.dev/shamrozkhan",
    bottom: 0,
    right: 0,
  },
  {
    icon: <LinkedIn sx={{ fontSize: 30 }} />,
    url: "https://www.linkedin.com/in/shamrozkhan0/",
    top: 100,
    left: 30,
  },
  {
    icon: <GitHub sx={{ fontSize: 30 }} />,
    url: "https://github.com/shamrozkhan0/",
    bottom: 100,
    left: 30,
  },
];

const Bannerr = ({ ref }) => {
  return (
    <Container
      ref={ref}
      sx={{
        pt: { xs: 5, md: 15, lg: 15 },
        pb: { xs: 2, md: 5, lg: 10 },
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <Grid container>
        <Grid
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
            pl: { xs: 0, xl: 4 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 25, sm: 45, lg: 40 },
              fontWeight: "500",
            }}
            color="GrayText"
          >
            Full Stack Java Developer
          </Typography>

          <Typography
            variant="h1"
            color="text.primary"
            sx={{
              fontSize: { xs: 70, sm: 100 },
              fontWeight: "600",
              letterSpacing: 1,
            }}
          >
            Shamroz Khan
          </Typography>

          <Typography
            component={"p"}
            variant="body1"
            color="text.secondary"
            sx={{
              pl: 4,
              pr: { xs: 0, sm: 20, md: 10, lg: 20 },
              fontSize: { xs: 15, sm: 16, md: 17 },
              borderLeft: "2px solid #1DBF73",
            }}
          >
            Hey I am a full stack java developer working on the Spring Boot
            stack building scalable, robust web-application and secure API end
            points
          </Typography>
        </Grid>

        <Grid
          component="section"
          container
          item
          size={{ xs: 12, md: 6 }}
          gap={{ xs: 5, lg: 0 }}
          sx={{
            pt: { xs: 10, md: 0 },
            pr: { xs: 0, xl: 10 },
            display: "flex",
            alignItems: { xs: "center", md: "end", lg: "initial" },
            justifyContent: "end",
            flexDirection: { xs: "column", md: "column-reverse", lg: "row" },
          }}
        >
          <Grid
            item
            size={{ xs: 12, lg: 4 }}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: { xs: "row", lg: "column" },
              justifyContent: { xs: 'center', md: "end" },
              gap: 5,
            }}
          >
            {BannerLinks.map(
              ({ icon, url, bottom, top, right, left, isDownload }, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...(isDownload === true && { download: true })}
                  sx={{
                    background: (theme) =>
                      theme.palette.background.mainGradient,
                    color: "white",
                    position: { xs: "static", lg: "absolute" },
                    p: 1.5,
                    ...(top !== undefined && { top: { xs: "auto", lg: top } }),
                    ...(left !== undefined && {
                      left: { xs: "auto", lg: left },
                    }),
                    ...(right !== undefined && {
                      right: { xs: "auto", lg: right },
                    }),
                    ...(bottom !== undefined && {
                      bottom: { xs: "auto", lg: bottom },
                    }),
                  }}
                >
                  {icon}
                </IconButton>
              )
            )}
          </Grid>

          <Grid
            item
            size={{ xs: 12, lg: 8 }}
            sx={{
              backgroundImage: (theme) => theme.palette.background.mainGradient,
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              maxWidth: { xs: "250px", md: "400px" },
              maxHeight: { xs: "250px", md: "400px" },
              boxShadow: "2px 2px 10px 0px  rgba(178, 11, 89, 0.54)",
            }}
          >
            <Box
              component={"img"}
              src={BannerProfie}
              alt="Shamroz Khan Full Stack Java Developer Profile Picture"
              sx={{
                maxWidth: { xs: "250px", md: "400px" },
                maxHeight: { xs: "250px", md: "400px" },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Bannerr;
