import Br from "@/theme/components/br";
import Text from "@/theme/components/text";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import Link from "next/link";
import mainlogo from '../../icons/rama/mainlogo.svg'
import Applynow from "../developersupportprogram/applynow";



const useStyles = makeStyles({

    bnrbg: {
        width: '100%',
        height: 'auto',
        padding: '3rem 2rem'
    },
    bnrimg: {
        width: '160px',
        height: 'auto',

    },
    bnrlogo: {
        width: '200px',
        height: 'auto',
        '@media(max-width : 600px)': {
            width: '100px',
        }
    },
    gridMain: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-0.5rem',
        '@media(max-width : 1200px)': {
            marginTop: '-1.3rem',
            '@media(max-width : 900px)': {
                flexWrap: 'wrap',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: "column-reverse",
                gap: '1rem'
            }
        }

    },
    check: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        '@media(max-width : 600px)': {
            display: 'initial',
            textAlign: 'center'
        }
    }



});

const helpdev = [
    {
        id: 1,
        image: mainlogo,
        title: 'Primary Logo',
        text: 'This is the main Ramestta logo. It should be used in this form whenever possible.',
        svg: '.SVG',
        png: '.PNG',
    },
    {
        id: 2,
        image: mainlogo,
        title: 'Inverted Primary Logo',
        text: 'This version features a white wordmark for greater legibility on dark or busy backgrounds.',
        svg: '.SVG',
        png: '.PNG',
    },
    {
        id: 3,
        image: mainlogo,
        title: 'Monotone black',
        text: 'When our primary or full-color logos isn’t an option, use the monotone logo that provides the most contrast.',
        svg: '.SVG',
        png: '.PNG',
    },
    {
        id: 4,
        image: mainlogo,
        title: 'Monotone white',
        text: 'When our primary or full-color logos isn’t an option, use the monotone logo that provides the most contrast.',
        svg: '.SVG',
        png: '.PNG',
    },
]


const helpdev2 = [
    {
        id: 1,
        image: mainlogo,
        title: 'Token Icon',
        text: 'This is the main Token icon. It should be used as is whenever possible, on a lighter Background',
        svg: '.SVG',
        png: '.PNG',
        color: '#004747'
    },
    {
        id: 2,
        image: mainlogo,
        title: 'Inverted Token Icon',
        text: 'This version features a white token icon for greater legibility on dark or busy backgrounds.',
        svg: '.SVG',
        png: '.PNG',
        color: '#000'
    },
    {
        id: 3,
        image: mainlogo,
        title: 'Monotone black',
        text: 'When our primary or full-color icon isn’t an option, use the monotone logo that provides the most contrast.',
        svg: '.SVG',
        png: '.PNG',
        color: '#004747'
    },

]

const helpdev3 = [
    {
        id: 1,
        image: mainlogo,
        title: "Don't transform the logo",
        color: '#000'
    },
    {
        id: 2,
        image: mainlogo,
        title: "Don’t have poor contrast",
        color: '#004747'
    },
    {
        id: 3,
        image: mainlogo,
        title: "Don’t use any special effects",
        color: '#000'
    },

]

const Brandresourcesbnr = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{
                marginTop: '5rem'
            }}>


                <Box sx={{
                    textAlign: 'center',
                    marginTop: '1rem',
                    padding: '0rem 4rem',
                    '@media(max-width : 600px)': {
                        padding: '0rem 1rem',
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
                        Media Kit and Brand Resources
                    </Typography>
                    <Text text={"Get the official Ramestta brand resources and learn about the usage guidelines."} />

                </Box>

                <Applynow title={"Download All Assets"} text={"Get all types of logos and token symbol (.svg and .png)"} btn={"Download(.zip)"} href={""} />

                <Box sx={{
                    marginTop: '3rem'
                }}>
                    <Typography sx={{
                        '@media(max-width : 600px)': {
                            fontSize: '16px',
                            textAlign: 'center'
                        }
                    }} mb={1} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5">
                        Wordmark
                    </Typography>
                    <Grid container spacing={3}>
                        {helpdev.map((item, index) => (
                            <Grid key={index} item lg={3} md={3} sm={6} xs={12}>

                                <Box sx={{
                                    background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                                    borderRadius: '20px',
                                    padding: '1px',
                                    height: '100%'
                                }}>
                                    <Box sx={{
                                        background: 'linear-gradient(180deg, #000, #000)',
                                        padding: '10px',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                                        overflow: 'hidden',
                                        borderRadius: '19px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>

                                        <Box>
                                            <Box sx={{
                                                background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                                                borderRadius: '12px',
                                                padding: '1px',

                                            }}>
                                                <Box sx={{
                                                    background: 'linear-gradient(180deg, #000, #000)',
                                                    padding: '1rem',
                                                    borderWidth: '1px',
                                                    borderStyle: 'solid',
                                                    borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                                                    overflow: 'hidden',
                                                    borderRadius: '11px',

                                                }}>


                                                    <Image src={item.image} alt={""} style={{ display: 'block', width: '100%', height: 'auto' }} />

                                                </Box>
                                            </Box>

                                            <Typography mt={1} variant="h6" textTransform={'uppercase'} fontFamily={'Roboto'} color={'#00B2B2'}>{item.title}</Typography>
                                            <Typography mt={0.5} fontFamily={'Roboto'} color={'#fff'}>{item.text}</Typography>
                                        </Box>

                                        <Box>
                                            <Box sx={{
                                                background: 'linear-gradient(90deg, transparent, #1CA7FB, transparent)',
                                                width: '100%',
                                                height: '1px',
                                                mt: '1.5rem'
                                            }} />
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                gap: '1rem',
                                                marginTop: '10px'
                                            }}>
                                                <Link href={""} style={{ color: '#00B2B2', textDecoration: 'none' }}>{item.svg}</Link>
                                                <Link href={""} style={{ color: '#00B2B2', textDecoration: 'none' }}>{item.png}</Link>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>


                <Box sx={{
                    marginTop: '3rem'
                }}>
                    <Typography sx={{
                        '@media(max-width : 600px)': {
                            fontSize: '16px',
                            textAlign: 'center'
                        }
                    }} mb={1} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5">
                        Token Icon
                    </Typography>
                    <Grid container spacing={2}>
                        {helpdev2.map((item, index) => (
                            <Grid key={index} item lg={4} md={4} sm={12} xs={12}>

                                <Box sx={{
                                    background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                                    borderRadius: '20px',
                                    padding: '1px',
                                    height: '100%'
                                }}>
                                    <Box sx={{
                                        background: 'linear-gradient(180deg, #000, #000)',
                                        padding: '10px',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                                        overflow: 'hidden',
                                        borderRadius: '19px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>

                                        <Box>
                                            <Box sx={{
                                                background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                                                borderRadius: '12px',
                                                padding: '1px',

                                            }}>
                                                <Box sx={{
                                                    background: `linear-gradient(180deg, ${item.color}, ${item.color})`,
                                                    padding: '1rem 4rem',
                                                    borderWidth: '1px',
                                                    borderStyle: 'solid',
                                                    borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                                                    overflow: 'hidden',
                                                    borderRadius: '11px',

                                                }}>


                                                    <Image src={item.image} alt={""} style={{ display: 'block', width: '100%', height: 'auto' }} />

                                                </Box>
                                            </Box>

                                            <Typography mt={1} variant="h6" textTransform={'uppercase'} fontFamily={'Roboto'} color={'#00B2B2'}>{item.title}</Typography>
                                            <Typography mt={0.5} fontFamily={'Roboto'} color={'#fff'}>{item.text}</Typography>
                                        </Box>

                                        <Box>
                                            <Box sx={{
                                                background: 'linear-gradient(90deg, transparent, #1CA7FB, transparent)',
                                                width: '100%',
                                                height: '1px',
                                                mt: '1.5rem'
                                            }} />
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                gap: '1rem',
                                                marginTop: '10px'
                                            }}>
                                                <Link href={""} style={{ color: '#00B2B2', textDecoration: 'none' }}>{item.svg}</Link>
                                                <Link href={""} style={{ color: '#00B2B2', textDecoration: 'none' }}>{item.png}</Link>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{
                    marginTop: '3rem'
                }}>
                    <Typography sx={{
                        '@media(max-width : 600px)': {
                            fontSize: '16px',
                            textAlign: 'center'
                        }
                    }}  fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5">
                        Logo Don<Typography fontFamily={'Roboto'} component={'span'}>’</Typography>ts
                    </Typography>
                    <Typography mb={2} sx={{
                        '@media(max-width : 600px)': {
                            fontSize: '16px',
                            textAlign: 'center'
                        }
                    }} fontFamily={'Roboto'} color={'#fff'}>Here are a few things that you should avoid doing when using the logo</Typography>
                    <Grid container spacing={2}>
                        {helpdev3.map((item, index) => (
                            <Grid key={index} item lg={4} md={4} sm={12} xs={12}>

                                <Box sx={{
                                    background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                                    borderRadius: '20px 20px 0px 0px',
                                    padding: '1px',
                                    height: '100%'
                                }}>
                                    <Box sx={{
                                        background: 'linear-gradient(180deg, #000, #000)',
                                        padding: '10px',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                                        overflow: 'hidden',
                                        borderRadius: '19px 19px 0px 0px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>

                                        <Box>
                                            <Box sx={{
                                                background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                                                borderRadius: '12px',
                                                padding: '1px',

                                            }}>
                                                <Box sx={{
                                                    background: `linear-gradient(180deg, ${item.color}, ${item.color})`,
                                                    padding: '1rem 4rem',
                                                    borderWidth: '1px',
                                                    borderStyle: 'solid',
                                                    borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                                                    overflow: 'hidden',
                                                    borderRadius: '11px',

                                                }}>


                                                    <Image src={item.image} alt={""} style={{ display: 'block', width: '100%', height: 'auto' }} />

                                                </Box>
                                            </Box>

                                            <Typography mt={1} variant="h6" textTransform={'uppercase'} fontFamily={'Roboto'} color={'#00B2B2'} textAlign={'center'}>{item.title}</Typography>
                                             
                                        </Box>

                                         
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>




            </Box>
        </>
    );
}

export default Brandresourcesbnr;
