import React from 'react'
import { Box, Typography } from '@mui/material'

const Heading = ({SectionHeading}) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: { xs: "column-reverse", md: "row" },
                gap: { xs: 5, md: 0 },
            }}
        >
            <Typography
                component={"h1"}
                variant="h2"
                sx={{
                    fontWeight: "600",
                }}
            >
                {SectionHeading}
            </Typography>

            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    border: "2px dashed green",
                    width: "70%",
                    height: "2px",
                    mr: 4,
                    fontSize: 50,
                    position: "relative",
                    "&::after": {
                        content: '"/"',
                        position: "absolute",
                        top: -40,
                        right: -30,
                    },
                }}
            />
        </Box>
    )
}

export default Heading