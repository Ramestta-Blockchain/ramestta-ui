import Heading from "@/theme/components/heading";
import Text from "@/theme/components/text";
import msg from '../../icons/msg.svg'
import phn from '../../icons/phn.svg'
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import net from '../../icons/net.svg'

import circleimg from '../../icons/circleimg.svg'

const useStyles = makeStyles({
    "@keyframes rotate": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" }
    },
    bnrimg: {
        width: '600px',
        height: 'auto',
        mixBlendMode: 'lighten',
        '@media(max-width : 900px)': {
            width: '400px',
            '@media(max-width : 600px)': {
                width: '100%'
            }
        }
    },
    imgOne: {
        width: '100%',
        height: 'auto',
    },
    imgTwo: {
        width: '300px',
        height: 'auto',
        animation: '$rotate 10s linear infinite',  // Applies continuous rotation
        '@media(max-width : 900px)': {
            width: '400px',
            '@media(max-width : 600px)': {
                width: '250px',
            }
        }


    },
    imgThree: {
        width: '120px',
        height: 'auto',
        '@media(max-width : 600px)': {
            width: '100px',
        }
    }
});

interface props{
    icon:any;
    title:string;
    text:string;
    para:string;
}

const Bnrcmp = ({icon,title,text,para}:props) => {
    const classes = useStyles();

    return (
        <Box sx={{ margin: '6rem 0rem 4rem 0rem',
            '@media(max-width : 600px)': {
                margin: '4rem 0rem 4rem 0rem'
            }
         }}>
            <Container>
                <Box position={'relative'}  >
                    <Box sx={{
                        background: 'linear-gradient(90deg, #17FAD8, #1CA8FA)',
                        padding: '1px',
                        borderRadius: '20px',
                        width: '400px',
                        position: 'absolute',
                        top: '-2rem',
                        '@media(max-width : 900px)': {
                            position: 'inherit',
                            margin: 'auto',
                            width: '100%',
                            '@media(max-width : 600px)': {
                                width: '100%'
                            }
                        }
                    }}>
                        <Box sx={{
                            background: 'linear-gradient(90deg, #2C3B3F, #253238)',
                            padding: '1.5rem 2rem',
                            borderRadius: '18px'
                        }}>
                            <Heading text={title} />
                            <Typography fontFamily={'Roboto'} color={'#fff'}>{text}</Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        background: 'linear-gradient(180deg, #25282d, #2d3037)',
                        borderTop:'1px solid #47494F',
                        borderLeft:'1px solid #47494F',
                        borderRight:'1px solid #47494F',
                        borderRadius: '20px',
                        padding: '2rem',
                        marginLeft: '2rem',
                        '@media(max-width : 900px)': {
                            marginLeft: '0rem',
                            '@media(max-width : 600px)': {
                                padding: '1rem'
                            }
                        }
                    }}>
                        <Grid container spacing={4} alignItems={'center'}>
                            <Grid item lg={8} md={8} sm={12} xs={12}>
                                <Text text={para} />
                                <Box sx={{
                                    display: 'flex',
                                    gap: '2rem',
                                    marginTop: '1.5rem',
                                    '@media(max-width : 900px)': {
                                        flexWrap: 'wrap',
                                        gap: '1rem',
                                    }
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        gap: '1rem',
                                        alignItems: 'center'
                                    }}>
                                        <Image src={msg} alt={""} width={50} />
                                        <Text text={"connect@metaflowx.com"} />
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        gap: '1rem',
                                        alignItems: 'center'
                                    }}>
                                        <Image src={phn} alt={""} width={50} />
                                        <Text text={"+91 9135378281"} />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={4} sm={12} xs={12}>
                                <Box>
                                    <Box sx={{
                                        position: 'relative'
                                    }}>
                                        <Image className={classes.imgOne} src={net} alt={""} />
                                        <Box sx={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)'
                                        }}>
                                            <Image className={classes.imgTwo} src={circleimg} alt={""} />
                                        </Box>
                                        <Box sx={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)'
                                        }}>
                                            <Image className={classes.imgThree} src={icon} alt={""} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Bnrcmp;
