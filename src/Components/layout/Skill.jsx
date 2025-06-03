import { Container, Typography, Grid, Box, LinearProgress } from '@mui/material'
import { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import 'swiper/css';
import '../../styles/Components/Skill.css'
import { ImagesearchRoller } from '@mui/icons-material';

const SkillImagesCDN = [
    { title: 'html', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { title: 'css', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { title: 'javascript', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { title: 'React', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { title: 'bootstrap', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
    { title: 'material-ui', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg' },
    { title: 'vite', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
]


// const SkillSwiper = () => {

//     const [thumbsSwiper, setThumbsSwiper] = useState(null);
//     const skillType = ['Frontend', 'backend', 'Database'];


//     const skillProgress = [
//         { title: 'HTML / CSS', progress: 100 },
//         { title: 'JavaScript', progress: 95 },
//         { title: 'React', progress: 70 },
//         { title: 'SEO', progress: 99 },
//         { title: 'MUI / Bootstrap / Tailwind', progress: 100 },
//     ]


//     const [progress, setProgress] = useState(skillProgress.map(skill => 0));



//     useEffect(() => {
//         const interval = setInterval(() => {
//             setProgress(prev =>
//                 prev.map((val, index) => {
//                     const target = skillProgress[index].progress;
//                     if (val >= target) return target;
//                     return val + 2;
//                 })
//             );
//         }, 10);

//         return () => clearInterval(interval);
//     }, []);




//     return (
//         <>
//             <Grid item size={3}>
//                 <Swiper
//                     item
//                     onSwiper={setThumbsSwiper}
//                     loop={true}
//                     slidesPerView={3}
//                     freeMode={true}
//                     watchSlidesProgress={true}
//                     modules={[FreeMode, Navigation, Thumbs]}
//                     className="mySwiper swiper-nav"
//                 >
//                     {
//                         skillType.map((title, index) => (
//                             <SwiperSlide key={index} >
//                                 <Typography
//                                     component='h1'
//                                     variant='h2'
//                                     sx={{
//                                         // mx: 6,
//                                         textAlign: 'start',
//                                         borderBottom: '10px solid transparent',
//                                         transition: 'all ease .s'
//                                     }}
//                                     color='text.secondary'
//                                 >
//                                     {title}
//                                 </Typography>
//                             </SwiperSlide>
//                         ))
//                     }
//                 </Swiper>

//             </Grid >


//             <Grid item size={6} sx={{display:'flex', alignItems:'center', justifyItems:'center'}} >
//                 <Swiper
//                     style={{
//                         '--swiper-navigation-color': '#fff',
//                         '--swiper-pagination-color': '#fff',
//                     }}
//                     loop={false}
//                     spaceBetween={10}
//                     navigation={false}
//                     thumbs={{ swiper: thumbsSwiper }}
//                     modules={[FreeMode, Navigation, Thumbs]}
//                     className="mySwiper2"
//                 >

//                     <SwiperSlide>
//                         {
//                             skillProgress.map((skill, index) => (
//                                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', gap: 1, py: 2 }} key={index}>
//                                     <Typography
//                                     variant='h6'
//                                     component='h3' 
//                                      >
//                                         {skill.title}
//                                     </Typography>

//                                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                                         <LinearProgress
//                                             variant="determinate"
//                                             value={progress[index]}
//                                             sx={{
//                                                 width: '400px',
//                                                 height: 10,
//                                                 borderRadius: 30,
//                                                 bgcolor: 'white',
//                                                 '& .MuiLinearProgress-bar': {
//                                                     bgcolor: '#AC0A5F',
//                                                 },
//                                             }}
//                                         />
//                                         <Typography>{`${progress[index]}%`}</Typography>
//                                     </Box>
//                                 </Box>
//                             ))
//                         }
//                     </SwiperSlide>


//                     <SwiperSlide>
//                         <Box>
//                             <Typography>
//                                 Shamroz Khan
//                             </Typography>
//                         </Box>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <Box>
//                             <Typography>
//                                 Shamroz Khan
//                             </Typography>
//                         </Box>
//                     </SwiperSlide>
//                 </Swiper>
//             </Grid>
//         </>
//     )
// }


export function SkillsProgress() {
    return (
        <>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    border: '1px solid #B50C58',
                    borderRadius: 5,
                    p: 4
                }}
            >

                <Typography
                    sx={{

                        fontSize: 30
                    }}
                    component='h3' >
                    Frontend
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 4,
                        pt: 3
                    }}
                >

                    {
                        SkillImagesCDN.map((image) => (
                            <Box
                                key={image.title}
                                component='img'
                                src={image.cdn}
                                aria-label={image.title}
                                sx={{
                                    width: '50px',
                                    height: '50px'
                                }}
                            >
                            </Box>

                        ))
                    }

                </Box>


            </Box>


        </>
    )
}



const Skill = () => {
    return (

        <Container
            component='section'
            aria-label='Technical Skill of shamroz khan'
            id='skill'
            sx={{
                py: { xs: 2, md: 5, lg: 10 },
            }}
        >
            <Typography
                component={'h1'}
                variant='h2'
                sx={{
                    fontWeight: '600'
                }}
            >
                Technical Skills / Tools
            </Typography>


            <Grid container sx={{ py: 10, alignItems: 'center', justifyContent: 'space-between', px: 3 }} >
                <SkillsProgress />
                {/* <SkillSwiper /> */}
            </Grid>



        </Container>



    )
}

export default Skill;