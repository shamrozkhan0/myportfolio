import { useState } from "react";

import Container from "@mui/material/Container";
import Box  from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Menu  from "@mui/icons-material/Menu";
import PurpleButton from "@/components/common/PurpleButton";

const NavLinks = ["About", "Skills", "Projects"];

const Navbar = ({ hire, activeSection, onButtonClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container
      component="nav"
      // maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "transparent",
        borderRadius: { xs: 0, md: 10 },
        py: 1,
        position: 'sticky',
        top: { xs: 0, md: 20 },
        left: 0,
        gap: 0,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
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
          position: 'relative',
          width: { xs: '100%', md: '70%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
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
            height: { xs: isMenuOpen ? "230px" : "0px", md: "100%" },
            overflow: "hidden",
            transition: "all 0.5s ease",
            top: 0,
            py: isMenuOpen ? 2 : 0,
            px: { xs: 1, md: 0 },
            bgcolor: "transparent",
          }}
        >

          {NavLinks.map((title) => (
            <Button
              key={title}
              sx={{
                color: activeSection == title.toLowerCase() ? "rgb(255, 0, 128)" : "white",
                borderBottom: activeSection == title.toLowerCase() ? "1px solid rgb(255, 0, 128)" : "1px solid transparent",
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

          {/* <PurpleButton event={hire} responsiveWidth={true} ClickEvent Title="HIRE ME" /> */}
        </Box>
      </Box>


    </Container>
  );
};

export default Navbar;