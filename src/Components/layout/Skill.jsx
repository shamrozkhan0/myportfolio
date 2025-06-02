import { Container, Typography, Grid, Box } from '@mui/material'
import {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import '../../styles/Components/Skill.css'


const SkillSwiper = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>

            <Grid item size={6}>
                <Swiper
                    item
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper swiper-nav"
                >
                    <SwiperSlide>
                        <Typography component='h1' variant='h2' sx={{ py: 3 }}>
                            Frontend
                        </Typography>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Typography component='h1' variant='h2' sx={{ py: 3 }}>
                            Backend
                        </Typography>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Typography component='h1' variant='h2' sx={{ py: 3 }}>
                            Databases
                        </Typography>
                    </SwiperSlide>
                </Swiper>

            </Grid>


            <Grid item size={6}>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <Box>
                            <Typography>
                                Shamroz Khan
                            </Typography>
                        </Box>
                    </SwiperSlide>

                    <SwiperSlide>
                    </SwiperSlide>

                    <SwiperSlide>
                    </SwiperSlide>
                </Swiper>
            </Grid>
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
                Technical Skills
            </Typography>


            <Grid container sx={{ py: 10, alignItems: 'center' }}>
                <SkillSwiper />
            </Grid>



        </Container>



    )
}

export default Skill