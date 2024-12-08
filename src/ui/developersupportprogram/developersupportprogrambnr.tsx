import Br from "@/theme/components/br";
import Text from "@/theme/components/text";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import Link from "next/link";
import ser5 from '../../icons/rama/ser5.svg'
import ser6 from '../../icons/rama/ser6.svg'
import ser7 from '../../icons/rama/ser7.svg'
import ser8 from '../../icons/rama/ser8.svg'



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
        image: ser5,
        title: 'Early BUILD grants'
    },
    {
        id: 2,
        image: ser6,
        title: 'Technical Guidance for Project Development'
    },
    {
        id: 3,
        image: ser7,
        title: 'Connecting with investors and accelerators'
    },
    {
        id: 4,
        image: ser8,
        title: 'Marketing & Promotional Support'
    },
]

const Developersupportprogrambnr = () => {
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
                        Ramestta Developer Support Program
                    </Typography>

                    <Text text={"Join the Ramestta Developer Support Program (DSP) and scale your Dapp with Ramestta!"} />

                    <Box sx={{
                        background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                        padding: '1px',
                        display: 'inline-block',
                        borderRadius: '30px',
                        marginTop: '1rem'

                    }}>

                        <Link href={"/support"} >
                            <Button
                                sx={{
                                    fontFamily: 'Roboto',
                                    textTransform: 'capitalize',
                                    background: "linear-gradient(90deg, #1999E5, #000202)",
                                    boxShadow: 'none',
                                    borderRadius: '30px',
                                    padding: '10px 30px',
                                    color: '#fff',
                                    '&:hover': {
                                        boxShadow: 'none'
                                    }
                                }}>
                                Apply Now
                            </Button>
                        </Link>

                    </Box>

                </Box>

                <Box sx={{
                    textAlign: 'center',
                    marginTop: '4rem',
                    padding: '0rem 4rem',
                    '@media(max-width : 600px)': {
                        padding: '0rem 1rem',
                    }
                }}>
                    <Typography sx={{
                        '@media(max-width : 1200px)': {
                            fontSize: '24px',
                            '@media(max-width : 600px)': {
                                fontSize: '20px'
                            }
                        }
                    }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5">
                        How does DSP help developers?
                    </Typography>

                    <Text text={"The Ramestta Developer Support Program (DSP) is designed to help developers/teams with:"} />
                </Box>

                <Box mt={3}>
                    <Grid container spacing={3}>
                        {helpdev.map((item, index) => (
                            <Grid key={index} item lg={3} md={3} sm={6} xs={12}>
                                <Box sx={{
                                    border:'1px solid #2E2E2E',
                                    borderRadius:'20px',
                                    height:'100%',
                                    padding:'1rem'
                                }}>
                                    <Image src={item.image} alt={""} width={40}  height={40}/>
                                    <Typography mt={1} fontFamily={'Roboto'} color={'#fff'}>{item.title}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box textAlign={'center'} mt={3}>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>The ultimate aim through this program is to help developers build their dream solution and take it to the masses. Fill the form in the <Typography component={'span'}><Link color="#00B2B2" href={""}>link</Link></Typography> to get started!</Typography>
                </Box>

            </Box>
        </>
    );
}

export default Developersupportprogrambnr;
