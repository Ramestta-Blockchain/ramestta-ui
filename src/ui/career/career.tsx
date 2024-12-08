import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import fees from '../../icons/rama/fees.svg'
import Text from "@/theme/components/text";
import check from '../../icons/rama/check.svg'
import Link from "next/link";





const useStyles = makeStyles({
    linklist: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#141619',
        padding: '10px 1.5rem 10px 10px',
        borderRadius: '50px'
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

const Sol_cont = [
    {
        id: 1,
        title: "Distributed systems"
    },
    {
        id: 2,
        title: "Blockchain"
    },
    {
        id: 3,
        title: "Applied cryptography"
    },

]

const Career = () => {
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
                        Become a core contributor
                    </Typography>
                    <Text text={"Join us on our mission to build an open, borderless world"} />
                </Box>
                <Box sx={{
                    textAlign: 'center',
                    marginTop: '3rem'
                }}>
                    <Typography fontFamily={'Roboto'} color={'#fff'} variant="h6" textTransform={'uppercase'}>We’re looking for developers, engineers and researchers in the following fields:</Typography>
                     
                        <Box sx={{
                            display:'flex',
                            justifyContent:'space-evenly',
                            flexWrap:'wrap'
                        }}>
                            {Sol_cont.map((item, index) => (
                                <Box key={index} className={classes.check}>
                                    <Image src={check} alt={""} width={50} />
                                    <Text text={item.title} />
                                </Box>
                            ))}
                        </Box>
                    <Typography mt={2} fontFamily={'Roboto'} color={'#fff'}>See more details on <Box component={'span'}><Link href={""} style={{color:'#00B2B2', textDecoration:'none'}}>the current openings</Link></Box>. If you don't see what you're looking for, and you find Ramestta interesting, feel free to send us your CV and any additional materials or comments at <Box component={'span'}><Link href={""} style={{color:'#00B2B2', textDecoration:'none'}}>support@ramestta.com</Link></Box>.</Typography>
                </Box>


            </Box>
        </>
    );
}

export default Career;
