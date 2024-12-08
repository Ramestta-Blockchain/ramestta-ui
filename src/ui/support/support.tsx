import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import fees from '../../icons/rama/fees.svg'
import Text from "@/theme/components/text";
import check from '../../icons/rama/check.svg'
import Link from "next/link";
import Supportform from "./supportform";





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



const Support = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{ margin: '4rem 0rem' }}>
                <Box sx={{
                    textAlign: 'center'
                }}>




                    <Typography fontFamily={'Roboto'} color={'#fff'} variant="h6">
                        Support
                    </Typography>
                    <Typography sx={{
                        '@media(max-width : 1200px)': {
                            fontSize: '36px',
                            '@media(max-width : 600px)': {
                                fontSize: '20px'
                            }
                        }
                    }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} lineHeight={1.3} variant="h3">
                        We<Typography sx={{
                            '@media(max-width : 1200px)': {
                                fontSize: '36px',
                                '@media(max-width : 600px)': {
                                    fontSize: '20px'
                                }
                            }
                        }} variant="h3" fontWeight={700} component={'span'}>,</Typography>re Here to Help You
                    </Typography>
                    <Text text={"Have some suggestions or just want to say hi? Contact us:"} />
                </Box>

                <Supportform />

            </Box>
        </>
    );
}

export default Support;
