import { Container, Grid, Typography } from "@mui/material";
import React from "react";

import Typed from "typed.js";
import { motion } from "framer-motion";

import AstroBoyImageAnimation from "../common/AstroBoyImageAnimation";





const Banner2 = ({ ref }) => {
    return (
        <Container ref={ref}>
            <Grid container sx={{ pt: 26, pb: 10, justifyContent: 'center' }} >
                {/* <AstroBoyImageAnimation /> */}

                {/* <Grid size={{xs:12 , md: 3}}></Grid> */}
                <Grid size={{ xs: 12, md: 12, }} >
                    {/* <Typography textAlign={"center"} sx={{ fontSize: 70, fontWeight: 600 }}>
                        Shamroz Khan
                    </Typography> */}
                    <Typography
                        textAlign={"center"}
                        sx={{ fontSize: { xs: 50, md: 70 }, fontWeight: 600, color: "#5ce55b", }}
                    >
                        FRONTEND
                    </Typography>
                    {/* <Typography
                        textAlign={"center"}
                        sx={{ fontSize: {xs:50, md: 70}, fontWeight: 600 }}
                    >
                        BACKEND
                    </Typography>
                    <Typography
                        textAlign={"end"}
                        sx={{ fontSize: {xs:50, md: 70}, fontWeight: 600, color: "#ff5e7a" }}
                    >
                        DATABASE
                    </Typography> */}
                </Grid>
                {/* <Grid size={{xs:12 , md: 3}}></Grid> */}
            </Grid>
        </Container>
    );
};

export default Banner2;
