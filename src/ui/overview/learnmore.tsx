
import Text from "@/theme/components/text";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import learnmore from '../../icons/rama/learnmore.svg'
import Link from "next/link";
import Image from "next/image";



const useStyles = makeStyles({

    bnrimg: {
        width: '300px',
        height: 'auto',
        '@media(max-width : 600px)': {
            width: '100%',
            padding:'0rem 2rem'
        }
    },
    

});




const Learnmore = () => {
    const classes = useStyles();




    return (
        <Box sx={{
            position: 'relative',
            marginTop:'3rem',
            '@media(max-width : 900px)':{
                   display:'flex',
                   flexWrap:'wrap',
                   flexDirection:"column-reverse",
                   '@media(max-width : 600px)':{
                    marginTop:'0rem',
                }
                }
        }}>
            <Box sx={{
                background: 'linear-gradient(90deg,#15161A, #15161A)',
                padding: '2rem',
                borderRadius: '30px 80px 80px 30px',
                marginTop: '8rem',
                marginRight:'1rem',
                '@media(max-width : 900px)': {
                    padding: '1rem',
                    marginTop: '2rem',
                    borderRadius: '30px 30px 30px 30px',
                    textAlign:'center',
                    marginRight:'0rem',
                    '@media(max-width : 600px)': {
                    padding: '1rem',
                    marginTop: '2rem',
                    
                }
                }
            }}>
                <Box sx={{

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
                        Learn more about us
                    </Typography>
                    <Text text={"Or see currently open positions and join us!"} />
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    gap: '1rem',
                    marginTop: '1rem',
                    '@media(max-width : 900px)': {
                        justifyContent: 'center',
                        '@media(max-width : 600px)': {
                            justifyContent: 'center',
                            flexWrap:'wrap'
                        }
                    }

                }}>
                    <Box sx={{
                        background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                        padding: '1px',
                        display: 'inline-block',
                        borderRadius: '30px',

                    }}>

                        <Link href={"/about"}>
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
                                Learn More
                            </Button>
                        </Link>

                    </Box>
                    <Box sx={{
                        background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                        padding: '1px',
                        display: 'inline-block',
                        borderRadius: '30px',

                    }}>

                        <Link href={"/careers"}>
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
                                Open Positions
                            </Button>
                        </Link>

                    </Box>
                </Box>


            </Box>
            <Box sx={{
                position:'absolute',
                top:'50%',
                transform:'translateY(-50%)',
                right:'0px',
                '@media(max-width : 900px)':{
                    position:'inherit',
                    transform:'inherit',
                    textAlign:'center',
                    marginTop:'3rem'
                }
            }}>
                <Image src={learnmore} alt={""} className={classes.bnrimg}/>
            </Box>
        </Box>
    );
};

export default Learnmore;
