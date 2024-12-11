import Br from "@/theme/components/br";
import Text from "@/theme/components/text";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import bnrlogo from '../../icons/rama/bnrlogo.svg'
import chakr from '../../icons/rama/chakr.svg'
import check from '../../icons/rama/check.svg'



const useStyles = makeStyles({
    "@keyframes rotate": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" }
    },
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
        width: '65px',
        height: 'auto',
        '@media(max-width : 600px)': {
            width: '100px',
        }
    },
    gridMain: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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

const Aboutbnr = () => {
    const classes = useStyles();
    return (
        <>
            <Box>

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
                       Who we are and why we are <Br /> doing this
                    </Typography>
                    <Text text={"Learn more about the vision of Ramestta and meet the people behind it"} />
                </Box>

                

                 

                <Box
                    className="bnrbg2"
                    sx={{
                        padding: '2rem 0rem',
                        margin: '3rem 0rem',
                        backgroundSize: '100% 100%',
                        '@media(max-width : 1200px)': {
                            margin: '0rem 0rem',
                            padding: '0rem 0rem',
                            '@media(max-width : 900px)': {
                                margin: '2rem 0rem',
                                '@media(max-width : 600px)': {
                                    padding: '1rem 1rem',
                                    backgroundImage: 'inherit'
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
                                <Image src={chakr} alt={""} className={classes.bnrimg} />
                                <Box sx={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}>
                                    <Image className={classes.bnrlogo} src={bnrlogo} alt={""} />
                                </Box>
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
                      Our Vision
                    </Typography>
                    <Text text={"We envision an open, borderless world. A world in which people and machines collaborate and exchange value globally and freely, without gatekeepers or intermediaries. A world in which communities thrive, unconstrained by artificial borders and archaic regulations."} />
                    <Box mt={2}>
                    <Text text={"We will strive to empower everyone to effortlessly join this new, better world."} />
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
                     Who we are?
                    </Typography>
                    <Text text={"Ramestta (RAMA) is built by a decentralized team of contributors from all over the world."} />
                    <Box mt={2}>
                    <Text text={"We don’t believe in traditional companies, hierarchy and management. Anyone is welcome to contribute code, ideas or anything else that can help make our vision a reality!"} />
                    </Box>
                </Box>


              
            </Box>
        </>
    );
}

export default Aboutbnr;
