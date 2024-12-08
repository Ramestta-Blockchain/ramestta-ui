import Br from "@/theme/components/br";
import Text from "@/theme/components/text";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import scale from '../../icons/rama/scale.svg'


const Award = () => {
    return (
        <>
            <Box>
                <Box sx={{
                    padding: '0rem 7rem',
                    textAlign: 'center',
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
                        Build dApp on Ramestta
                    </Typography>
                    <Box mb={1} mt={0.8}>
                        <Text text={"Ramestta Mainnet has live it is a PoS, EVM based Blockchain, with Layer 2 Solution and a framework for building and connecting EVM-compatible blockchain networks."} />
                    </Box>
                    <Box sx={{
                        background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                        padding: '1px',
                        display: 'inline-block',
                        borderRadius: '30px',

                    }}>

                        <Link href={"/blog"}>
                            <Button
                                sx={{
                                    fontFamily: 'Roboto',
                                    textTransform: 'capitalize',
                                    background: "linear-gradient(90deg, #191D20, #2C3037)",
                                    boxShadow: 'none',
                                    borderRadius: '30px',
                                    padding: '12px 20px',
                                    color: '#fff',
                                    '&:hover': {
                                        boxShadow: 'none'
                                    }
                                }}>
                                News & Update
                            </Button>
                        </Link>

                    </Box>
                </Box>

                <Box sx={{
                    position: 'relative',
                    marginTop: '7rem',
                    '@media(max-width : 900px)': {
                        marginTop: '4rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'column-reverse',
                        gap: '2rem'
                    }
                }}>
                    <Box sx={{
                        background: 'linear-gradient(90deg, transparent, #15161A,#15161A, #15161A)',
                        padding: '2rem',
                        borderRadius: '30px',
                        '@media(max-width : 900px)': {
                            background: 'linear-gradient(90deg, #15161A, #15161A,#15161A, #15161A)',
                            textAlign: 'center',
                            padding: '0.7rem',
                        }
                    }}>
                        <Grid container spacing={2}>
                            <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
                            <Grid item lg={8} md={8} sm={12} xs={12}>
                                <Box>
                                    <Typography sx={{
                                        '@media(max-width : 1200px)': {
                                            fontSize: '36px',
                                            '@media(max-width : 600px)': {
                                                fontSize: '20px'
                                            }
                                        }
                                    }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} lineHeight={1.3} variant="h3">
                                        Scale your <Br /> Decentralized app <Br />
                                        in <Typography sx={{
                                            '@media(max-width : 1200px)': {
                                                fontSize: '36px',
                                                '@media(max-width : 600px)': {
                                                    fontSize: '20px'
                                                }
                                            }
                                        }} variant="h3" fontWeight={700} component={'span'}>30</Typography> mins.
                                    </Typography>
                                    <Text text={"Testnet & Mainnet are live now !"} />
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'end',
                                        gap: '1rem',
                                        marginTop: '-3rem',
                                        '@media(max-width : 900px)': {
                                            marginTop: '1rem',
                                            justifyContent: 'center',
                                        }
                                    }}>
                                        <Box sx={{
                                            background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                                            padding: '1px',
                                            display: 'inline-block',
                                            borderRadius: '30px',

                                        }}>

                                            <Link href={"https://docs.ramestta.com/"} target="_blank">
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
                                                    Get started
                                                </Button>
                                            </Link>

                                        </Box>
                                        <Box sx={{
                                            background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                                            padding: '1px',
                                            display: 'inline-block',
                                            borderRadius: '30px',

                                        }}>

                                            <Link href={"/contact"} >
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
                                                    Contact Us
                                                </Button>
                                            </Link>

                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>

                        </Grid>
                    </Box>

                    <Box sx={{
                        width: '400px',
                        position: 'absolute',
                        bottom: '-5px',
                        '@media(max-width : 900px)': {
                            position: 'inherit',
                            margin: 'auto',
                            bottom: '0px',
                            '@media(max-width : 900px)': {
                                width: '100%',
                            }
                        }
                    }}>
                        <Image src={scale} alt={""} style={{ width: '100%', height: 'auto' }} />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Award;
