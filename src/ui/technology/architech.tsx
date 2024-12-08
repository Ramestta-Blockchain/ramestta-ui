import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import Text from "@/theme/components/text";
import check from '../../icons/rama/check.svg'
import Link from "next/link";
import arch from '../../icons/rama/arch.svg'
import Br from "@/theme/components/br";
import roadmap from '../../icons/rama/roadmap.svg'
import roadmapmob from '../../icons/rama/roadmapmob.svg'





const useStyles = makeStyles({

    check: {
        display: 'flex',
        gap: '10px',
        padding: '10px 0px',
        alignItems: 'center',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            gap: '5px',
        }
    },
    checkimg: {
        width: '50px',
        '@media(max-width : 600px)': {
            width: '36px',
            height: 'auto'
        }
    },
    fordesktop: {
        width: '100%',
        height: 'auto',
        '@media(max-width : 900px)': {
            display: 'none'
        }
    },
    formob: {
        display: 'none',
        '@media(max-width : 900px)': {
            display: 'block',
            width: '100%',
            height: 'auto',
        }
    }


});


const Architech = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{ margin: '4rem 0rem' }}>

                <Box sx={{
                    textAlign: 'center'
                }}>
                    <Typography sx={{
                        '@media(max-width : 1200px)': {
                            fontSize: '36px',
                            '@media(max-width : 600px)': {
                                fontSize: '20px'
                            }
                        }
                    }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} lineHeight={1.3} variant="h3">
                        Architecture
                    </Typography>
                    <Text text={"Ramestta architecture consists of four abstract, composable layers"} />
                    <Box sx={{
                        padding: '0rem 3rem',
                        marginTop: '3rem',
                        '@media(max-width : 600px)': {
                            padding: '0rem 0rem',
                            marginTop: '2rem'
                        }
                    }}>
                        <Image src={arch} alt={""} style={{ width: '100%', height: 'auto' }} />
                    </Box>
                </Box>


                <Box sx={{
                    marginTop: '5rem',
                    '@media(max-width : 900px)': {
                        marginTop: '2rem',
                    }
                }}>
                    <Image src={roadmap} alt={""} className={classes.fordesktop} />
                    <Image src={roadmapmob} alt={""} className={classes.formob} />
                </Box>

            </Box>
        </>
    );
}

export default Architech;
