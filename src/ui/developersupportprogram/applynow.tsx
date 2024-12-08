import Text from "@/theme/components/text";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Link from "next/link";




const useStyles = makeStyles({



});

interface props{
    title:string;
    text:string;
    btn:string;
    href:string;
}


const Applynow = ({title, text, btn, href}:props) => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{
                marginTop: '3rem'
            }}>

                <Box sx={{
                    background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                    borderRadius: '20px',
                    padding: '1px'
                }}>
                    <Box sx={{
                        background: 'linear-gradient(180deg, #000, #000)',
                        padding: '1rem',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                        overflow: 'hidden',
                        borderRadius: '19px',
                    }}>

                        <Grid container spacing={2} alignItems={'center'}>
                            <Grid item lg={8} md={8} sm={8} xs={12}>
                                <Box>
                                    <Typography sx={{
                                        '@media(max-width : 1200px)': {
                                            fontSize: '24px',
                                            '@media(max-width : 600px)': {
                                                fontSize: '20px'
                                            }
                                        }
                                    }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h4">
                                        {title}
                                    </Typography>
                                    <Text text={text} />
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                <Box sx={{
                                    textAlign: 'end'
                                }}>
                                    <Box sx={{
                                        background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                                        padding: '1px',
                                        display: 'inline-block',
                                        borderRadius: '30px',


                                    }}>

                                        <Link href={href} target="_blank">
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
                                               {btn}
                                            </Button>
                                        </Link>

                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>


            </Box>
        </>
    );
}

export default Applynow;
