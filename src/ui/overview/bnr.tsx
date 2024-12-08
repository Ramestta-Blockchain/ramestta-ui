import Br from "@/theme/components/br";
import { Box, Container, Typography, } from "@mui/material";
import Image from "next/image";
import bnrbg from '../../icons/rama/bnrbg.svg'
import bnrlogo from '../../icons/rama/bnrlogo.svg'
import bnrimg from '../../icons/rama/bnrimg.svg'
import { makeStyles } from '@mui/styles';





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
        animation: '$rotate 20s linear infinite',  // Applies continuous rotation
        '@media(max-width : 1200px)': {
            width: '350px',
            '@media(max-width : 600px)': {
                width: '260px',

            }
        }
    },
    bnrlogo: {
        width: '120px',
        height: 'auto',
        '@media(max-width : 600px)': {
            width: '100px',
        }
    },
    gridMain: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media(max-width : 900px)': {
            flexWrap: 'wrap',
            justifyContent: 'center',
            textAlign: 'center',
            flexDirection: "column-reverse",
            gap: '1rem'
        }

    }



});








const Bnr = () => {
    const classes = useStyles();
    return (

        <>
            <Box  >
                {/* <Box>
                    <Image src={bnrbg} alt={""} className={classes.bnrbg} />
                </Box> */}
                <Box
                    // className="bnrbg"
                    sx={{
                        padding: '4rem 2rem',
                        margin: '3rem 0rem',
                        backgroundSize: '100%',
                        '@media(max-width : 1200px)': {
                            margin: '0rem 0rem',
                            '@media(max-width : 600px)': {
                                padding: '2rem 1rem',
                            }
                        }
                    }}>
                    <Box className={classes.gridMain}>
                        <Box>
                            <Typography sx={{
                                '@media(max-width : 1200px)': {
                                    fontSize: '36px',
                                    '@media(max-width : 600px)': {
                                        fontSize: '20px'
                                    }
                                }
                            }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} lineHeight={1.3} variant="h3">
                                Ramestta
                                <Br />
                                Faster Blockchain
                                <Br />
                                for the Future
                            </Typography>
                        </Box>
                        <Box>
                            <Box sx={{ position: 'relative' }}>
                                <Image src={bnrimg} alt={""} className={classes.bnrimg} />
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
            </Box>
        </>

    );
}


export default Bnr