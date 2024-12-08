
import Text from "@/theme/components/text";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Br from "@/theme/components/br";
import Link from "next/link";



const useStyles = makeStyles({

    bnrimg: {
        width: '300px',
        height: 'auto',
        '@media(max-width : 600px)': {
            width: '100%'
        }
    },
    check: {
        display: 'flex',
        gap: '10px',
        padding: '10px 0px',
        alignItems: 'center',
        '@media(max-width : 600px)': {
            display: 'block',
            textAlign: 'center',

        }
    }


});

 interface props{
    text:string;
    text2:string;
    btn1:string;
    btn2:string;
    ref1:string;
    ref2:string;
    para:string;
    marginTop:string;
    target1:string;
    target2:string;
 }


const Explore = ({text, text2, btn1, btn2, ref1, ref2, para,marginTop,target1,target2}:props) => {
    const classes = useStyles();




    return (
        <Box sx={{
            background: 'linear-gradient(90deg,#15161A, #15161A)',
            padding: '2rem',
            borderRadius: '30px',
            marginTop: {marginTop},
            '@media(max-width : 600px)': {
                padding: '1rem',
                marginTop: '2rem',
            }
        }}>
            <Box sx={{
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
                    
                    {text} <Br /> {text2}
                   
                </Typography>
                <Text text={para} />
            </Box>

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

                    <Link target={target1} href={ref1}>
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
                            {btn1}
                        </Button>
                    </Link>

                </Box>
                <Box sx={{
                    background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                    padding: '1px',
                    display: 'inline-block',
                    borderRadius: '30px',

                }}>

                    <Link href={ref2} target={target2}>
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
                            {btn2}
                        </Button>
                    </Link>

                </Box>
            </Box>


        </Box>
    );
};

export default Explore;
