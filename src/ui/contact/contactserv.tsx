
import Heading from "@/theme/components/heading";
import { Box, Container, Grid, Typography, } from "@mui/material";
import cs1 from '../../icons/rama/cs1.svg'
import cs2 from '../../icons/rama/cs2.svg'
import cs3 from '../../icons/rama/cs3.svg'
import cs4 from '../../icons/rama/cs4.svg'
import cs5 from '../../icons/rama/cs5.svg'
import cs6 from '../../icons/rama/cs6.svg'

import Image from "next/image";
import Link from "next/link";








const Ser_List = [
    {
        id: 1,
        title: "Wallet and Transaction support",
        text: "For Web Wallet, Staking, Transactions or any Technical support",
        Img: cs1,
        href:'/support',
        
    },
    {
        id: 2,
        title: "Integration DApps",
        text: "To onboard your DApp or explore integration possibility of your project with Ramestta",
        Img: cs2,
        href:'/support',
    },
    {
        id: 3,
        title: "SDK",
        text: "To learn more, contribute or share feedback about SDK",
        Img: cs3,
        href:'/support',
    },
    {
        id: 4,
        title: "Press inquiry",
        text: "For your media and press requests",
        Img: cs4,
        href:'/support',
    },
    {
        id: 5,
        title: "Careers",
        text: "To become core contributor and part of passionate team",
        Img: cs5,
        href:'/careers',
    },
    {
        id: 6,
        title: "General inquiry",
        text: "For your general interest, enquiry or collaboration related",
        Img: cs6,
        href:'/support',
    },



];








const Contactserv = () => {
    return (

        <>
            <Box sx={{
                paddingTop: '5rem',
                '@media(max-width : 600px)': {
                    paddingTop: '1rem'
                }
            }}>

                <Box sx={{
                    textAlign: 'center',
                    '@media(max-width : 600px)': {
                        padding: '0rem 1rem',
                        marginTop: '2rem',
                    }
                }}>
                    <Typography sx={{
                        '@media(max-width : 1200px)': {
                            fontSize: '36px',
                            '@media(max-width : 600px)': {
                                fontSize: '20px'
                            }
                        }
                    }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} lineHeight={1.3} variant="h3">
                        How can we help you?
                    </Typography>

                </Box>

                <Box marginTop={5}>
                    <Grid container spacing={2}>

                        {Ser_List.map((item, index) => (
                           
                             <Grid key={index} item lg={4} md={4} sm={6} xs={12}>
                                <Link href={item.href}  style={{textDecoration:'none'}}>
                                <Box sx={{
                                    background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                                    borderRadius: '30px',
                                    padding: '1px'
                                }}>
                                    <Box sx={{
                                        background: 'linear-gradient(180deg, #002828, #03151F)',
                                        padding: '1rem 0.5rem',
                                        textAlign: 'center',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                                        overflow: 'hidden',
                                        height: '180px',
                                        borderRadius: '29px',
                                        '@media(max-width : 1200px)': {
                                            height: '200px',
                                            '@media(max-width : 900px)': {
                                                 
                                                '@media(max-width : 600px)': {
                                                    height: 'auto',
                                                }
                                            }
                                        }
                                    }}>
                                        <Box>
                                            <Image src={item.Img} alt="" style={{ width: 40, }} />
                                        </Box>
                                        <Box>
                                            <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'}>{item.title}</Typography>
                                            <Typography fontFamily={'Roboto'} color={'#fff'}>{item.text}</Typography>

                                        </Box>
                                    </Box>
                                </Box>
                                </Link>
                            </Grid>
                        
                        ))}
                    </Grid>
                </Box>

            </Box>
        </>

    );
}


export default Contactserv