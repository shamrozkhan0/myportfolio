// MUI Components 
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// MUI Icons (Socials)
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Download from "@mui/icons-material/Download";

// Custom Imports
import BannerProfie from "@/assets/images/profile-bg.png";
import ShifterIcon from "@/components/common/ShifterIconSVG";
import PurpleButton from "@/components/common/PurpleButton";


const BannerLinks = [
  {
    IconName:"resume",
    icon: <Download sx={{ fontSize: 30 }} />,
    url: "../../assets/images/shamroz.png",
    top: 0,
    right: 10,
    isDownload: true,
  },
  {
    IconName:"shifters.dev",
    icon: <ShifterIcon size={30} />,
    url: "https://shifters.dev/shamrozkhan",
    bottom: 0,
    right: 0,
  },
  {
    IconName:"linkedin",
    icon: <LinkedIn sx={{ fontSize: 30 }} />,
    url: "https://www.linkedin.com/in/shamrozkhan0/",
    top: 100,
    left: 30,
  },
  {
    IconName:'github',
    icon: <GitHub sx={{ fontSize: 30 }} />,
    url: "https://github.com/shamrozkhan0/",
    bottom: 100,
    left: 30,
  },
];

const Bannerr = ({ ref, hireRef }) => {
  return (
    <Container
      id="about"
      component="section"
      aria-label="About Section Of Shamroz Khan's Portfolio"
      ref={ref}
      sx={{
        pt: { xs: 5, md: 15, lg: 15 },
        pb: { xs: 2, md: 5, lg: 10 },
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid
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



          <PurpleButton title="Let's Talk" clickEvent={hireRef}  />

        </Grid>

        <Grid
          component="section"
          container
          size={{ xs: 12, md: 6 }}
          gap={{ xs: 5, lg: 0 }}
          sx={{
            pt: { xs: 5, md: 0 },
            pr: { xs: 0, xl: 10 },
            display: "flex",
            alignItems: { xs: "center", md: "end", lg: "initial" },
            justifyContent: "end",
            flexDirection: { xs: "column", md: "column-reverse", lg: "row" },
          }}
        >
          <Grid
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
              ({ IconName, icon, url, bottom, top, right, left, isDownload }, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={IconName}
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
            size={{ xs: 12, lg: 8 }}
            sx={{
              boxShadow: "2px 2px 100px 4px #360441  ",
              background: theme => theme.palette.background.mainGradient,
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              maxWidth: { xs: "250px", md: "400px" },
              maxHeight: { xs: "250px", md: "400px" },
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


        <Grid size={{ xs: 12, md: 10 }} sx={{ pt: {xs: 5 , md: 15}, display: "flex", flexDirection: 'column', gap: {xs: 2 ,md: 3} }}>

          <Typography component="h3" sx={{ textAlign: 'center' }} fontSize={{ fontSize: 35, fontWeight: 700 }}>
            About Shamroz
          </Typography>


          <Typography
            component="p"
            sx={{
              textAlign:"center",
              fontSize: {xs: 20 ,md : 30},

              fontWeight: 500,
              color: theme => theme.palette.text.secondary
            }}
          >
             I am a full stack java developer working on the Spring
            stack building scalable, robust web-application and secure API end points.
          </Typography>


        </Grid>


      </Grid>
    </Container>
  );
};

export default Bannerr;
