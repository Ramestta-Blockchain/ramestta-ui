import Br from "@/theme/components/br";
import Text from "@/theme/components/text";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import bnrlogo from '../../icons/rama/bnrlogo.svg'
import chakr from '../../icons/rama/chakr.svg'
import check from '../../icons/rama/check.svg'
import Link from "next/link";



const useStyles = makeStyles({
     
    bnrbg: {
        width: '100%',
        height: 'auto',
        padding: '3rem 2rem'
    },
    bnrimg: {
        width: '450px',
        height: 'auto',
        animation: '$rotate 10s linear infinite',  // Applies continuous rotation
        '@media(max-width : 1200px)': {
            width: '350px',
            '@media(max-width : 900px)': {
                width: '290px',
                '@media(max-width : 600px)': {
                    width: '260px',

                }
            }
        }
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
    check:{
        display:'flex',
        gap:'10px',
        alignItems:'center',
        '@media(max-width : 600px)':{
            display:'initial',
            textAlign:'center'
        }
    }



});

const Tokenbnr = () => {
    const classes = useStyles();
    return (
        <>
            <Box>

                
                 

                <Box
                    className="bnrbg2"
                    sx={{
                        padding: '4rem 2rem',
                        margin: '3rem 0rem',
                        backgroundSize: '100%',
                        '@media(max-width : 1200px)': {
                            margin: '3rem 0rem 0rem 0rem',

                            '@media(max-width : 900px)': {
                                padding: '2rem 2rem',
                                '@media(max-width : 600px)': {
                                    padding: '2rem 1rem',
                                    backgroundImage: 'inherit',
                                    margin: '0rem 0rem 0rem 0rem',
                                }
                            }
                        }
                    }}>
                    <Box className={classes.gridMain}>
                        <Box>
                            <Box sx={{ position: 'relative',
                                '@media(max-width : 600px)':{
                                    marginTop:'3rem'
                                }
                             }}>
                                <Image src={bnrlogo} alt={""} className={classes.bnrimg} />
                                 
                            </Box>
                        </Box>
                    </Box>
                </Box>

               


                <Box sx={{
                    textAlign: 'center', marginTop: '5rem', padding: '0rem 4rem',
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
                        Ramestta <Typography sx={{
                            '@media(max-width : 1200px)': {
                                fontSize: '36px',
                                '@media(max-width : 600px)': {
                                    fontSize: '20px'
                                }
                            }
                        }} variant="h3" fontWeight={700} component={'span'}>(</Typography>RAMA
                        <Typography sx={{
                            '@media(max-width : 1200px)': {
                                fontSize: '36px',
                                '@media(max-width : 600px)': {
                                    fontSize: '20px'
                                }
                            }
                        }} variant="h3" fontWeight={700} component={'span'}>)</Typography> has been live on Bitmart global exchange  
                    </Typography>
                    <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginTop: '1rem',
                '@media(max-width : 600px)':{
                    flexWrap:'wrap',
                    justifyContent:'center'
                }

            }}>
                <Box sx={{
                    background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                    padding: '1px',
                    display: 'inline-block',
                    borderRadius: '30px',

                }}>

                    <Link target="_blank" href={""}>
                        <Button
                            sx={{
                                fontFamily: 'Roboto',
                                textTransform: 'capitalize',
                                background: "linear-gradient(90deg, #191D20, #2C3037)",
                                boxShadow: 'none',
                                borderRadius: '30px',
                                padding: '10px 30px',
                                color: '#fff',
                                '&:hover': {
                                    boxShadow: 'none'
                                }
                            }}>
                           Bitmart Trade Now
                        </Button>
                    </Link>

                </Box>
                <Box sx={{
                    background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                    padding: '1px',
                    display: 'inline-block',
                    borderRadius: '30px',

                }}>

                    <Link href={""} target="_blank">
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
                           Koinpark Trade Now
                        </Button>
                    </Link>

                </Box>
            </Box>
                </Box>


              
            </Box>
        </>
    );
}

export default Tokenbnr;
