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

const Sdkbnr = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{
                marginTop: '5rem'
            }}>
                <Box sx={{
                    textAlign: 'center'
                }}>
                    <Image src={bnrlogo} alt={""} className={classes.bnrimg} />
                </Box>

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
                        Ramestta SDK
                    </Typography>

                    <Text text={"A modular and extensible framework for building Ethereum-compatible blockchain networks, written in Golang."} />


                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginTop: '1rem',
                        '@media(max-width : 600px)': {
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }

                    }}>
                        <Box sx={{
                            background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                            padding: '1px',
                            display: 'inline-block',
                            borderRadius: '30px',

                        }}>

                            <Link target="_blank" href={"https://docs.ramestta.com/"}>
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
                                    Documentation
                                </Button>
                            </Link>

                        </Box>
                        <Box sx={{
                            background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                            padding: '1px',
                            display: 'inline-block',
                            borderRadius: '30px',

                        }}>

                            <Link href={"https://github.com/Ramestta-Blockchain"} target="_blank">
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
                                    Github
                                </Button>
                            </Link>

                        </Box>
                    </Box>
                </Box>



            </Box>
        </>
    );
}

export default Sdkbnr;
