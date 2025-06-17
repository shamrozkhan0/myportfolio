import { useState} from "react";

// MUI COmpoenents
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// MUI Icon
import Menu from "@mui/icons-material/Menu";

const NavLinks = ["About", "Skills", "Projects","FAQ" ];

const Navbar = ({ activeSection, onButtonClick, scrollValue }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isScrolling = scrollValue > 0; 

  return (
    <Container
      component="nav"
      sx={{
        transition: "all ease .3s",
        px: { xs: "0px !important", md: "30px !important" },
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: isScrolling ? "#000814" : "#00081400",
        border: {
          xs: 0,
          md: `1px solid ${isScrolling ? "#ffffff26" : "#ffffff00"}`,
        },
        borderRadius: { xs: 0, md: 10 },
        py: 1,
        position: "sticky",
        top: { xs: 0, md: 5 },
        left: 0,
        gap: 0,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          px: { xs: 2, lg: 0 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: { xs: "100%", md: "30%" },
        }}
      >
        <Typography
          sx={{
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "30px",
            outline: "none",
          }}
          color="text.primary"
        >
          Shamroz Khan
        </Typography>

        <IconButton
          sx={{
            color: "white",
            display: { xs: "block", md: "none" },
          }}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <Menu sx={{ fontSize: "30px" }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "70%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <Box
          sx={{
            position: { xs: "absolute", md: "static" },
            display: "flex",
            alignItems: { xs: "start", md: "center" },
            justifyContent: "end",
            gap: { xs: 3, md: 6 },
            width: "100%",
            flexDirection: { xs: "column", md: "row" },
            height: { xs: isMenuOpen ? "150px" : "0px", md: "100%" },
            overflow: "hidden",
            transition: "all 0.5s ease",
            top: 0,
            py: isMenuOpen ? 2 : 0,
            bgcolor: { xs: "#000814", md: "transparent" },
            px: { xs: 2, lg: 0 },
          }}
        >
          {NavLinks.map((title) => (
            <Button
              key={title}
              sx={{
                color:
                  activeSection == title.toLowerCase()
                    ? "rgb(255, 0, 128)"
                    : "white",
                borderBottom:
                  activeSection == title.toLowerCase()
                    ? "1px solid rgb(255, 0, 128)"
                    : "1px solid transparent",
                fontSize: 16,
                letterSpacing: 1,
                p: 0,
                borderRadius: 0,
                m: 0,
              }}
              onClick={() => {
                const key = title.toLowerCase();
                if (onButtonClick[key]) onButtonClick[key]();
              }}
            >
              <Typography variant="button">{title}</Typography>
            </Button>
          ))}

        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
