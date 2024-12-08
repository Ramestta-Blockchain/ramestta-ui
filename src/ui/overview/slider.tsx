import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Autoplay } from "swiper/modules"; // Import the Autoplay module
import xleftarrow from '../../icons/xleftarrow.svg';
import xrightarrow from '../../icons/xrightarrow.svg';
import slider1 from '../../icons/slider1.svg';
import EastIcon from '@mui/icons-material/East';
import { makeStyles } from '@mui/styles';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Button, Box, Container, Grid, Typography } from "@mui/material";
import Heading from "@/theme/components/heading";
import Image from "next/image";
import p1 from '../../icons/rama/p1.svg';
import p2 from '../../icons/rama/p2.svg';
import p3 from '../../icons/rama/p3.svg';
import p4 from '../../icons/rama/p4.svg';
import p5 from '../../icons/rama/p5.svg';
import p6 from '../../icons/rama/p6.svg';
import p7 from '../../icons/rama/p7.svg';
import p8 from '../../icons/rama/p8.svg';
import p9 from '../../icons/rama/p9.svg';
import p10 from '../../icons/rama/p10.svg';
import p11 from '../../icons/rama/p11.svg';
import Link from "next/link";

const useStyles = makeStyles({
  bnrimg: {
    width: '100%',
    height: 'auto',
  },
});

const Slider = () => {
  const classes = useStyles();
  const swiperRef = useRef<SwiperType>();

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const Slider_list = [
    { id: 1, href: "https://bitgert.com/", img: p1 },
    { id: 2, href: "https://chainlist.org/", img: p2 },
    { id: 3, href: "https://www.koinpark.com/", img: p3 },
    { id: 4, href: "https://metamask.io/", img: p4 },
    { id: 5, href: "https://app.lither.com/", img: p5 },
    { id: 6, href: "https://www.orbler.io/", img: p6 },
    { id: 7, href: "https://biokript.com/", img: p7 },
    { id: 8, href: "https://coinmarketcap.com/", img: p8 },
    { id: 9, href: "https://www.coingecko.com/", img: p9 },
    { id: 10, href: "https://www.bitmart.com/en-US", img: p10 },
    { id: 11, href: "https://gpt-plus.io/en/", img: p11 },
  ];

  return (
    <Box sx={{ marginTop: '5rem', '@media(max-width : 600px)': { marginTop: '3rem' } }}>
      <Box sx={{ position: "relative", width: "100%", mx: "auto" }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            sx={{
              '@media(max-width : 1200px)': {
                fontSize: '36px',
                '@media(max-width : 600px)': { fontSize: '20px' },
              },
            }}
            fontFamily={'Zilap Orion Personal Use'}
            color={'#00B2B2'}
            lineHeight={1.3}
            variant="h3"
          >
            Our Partners
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Box onClick={handlePrev} sx={{ cursor: 'pointer' }}>
              <Image src={xleftarrow} alt="" width={40} height={40} />
            </Box>
            <Box onClick={handleNext} sx={{ cursor: 'pointer' }}>
              <Image src={xrightarrow} alt="" width={40} height={40} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: '2rem' }}>
          <Grid container spacing={2} sx={{ '@media(max-width : 600px)': { justifyContent: 'center' } }}>
            <Grid item lg={12} md={12} sm={12} xs={11}>
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                loop
                autoplay={{
                  delay: 2000, // Auto-scroll delay in milliseconds
                  disableOnInteraction: false, // Continue autoplay after interaction
                }}
                modules={[Autoplay]} // Register the Autoplay module
                className="mySwiper"
                breakpoints={{
                  0: { slidesPerView: 2, spaceBetween: 10 },
                  768: { slidesPerView: 3, spaceBetween: 15 },
                  1200: { slidesPerView: 4, spaceBetween: 20 },
                }}
              >
                {Slider_list.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Box>
                      <Link href={item.href} target="_blank">
                        <Image className={classes.bnrimg} src={item.img} alt="" />
                      </Link>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
