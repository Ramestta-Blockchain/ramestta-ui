import Br from "@/theme/components/br";
import Text from "@/theme/components/text";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import Link from "next/link";
import ser5 from '../../icons/rama/ser5.svg'
import ser6 from '../../icons/rama/ser6.svg'
import ser7 from '../../icons/rama/ser7.svg'
import ser8 from '../../icons/rama/ser8.svg'



const useStyles = makeStyles({

    bnrbg: {
        width: '100%',
        height: 'auto',
        padding: '3rem 2rem'
    },
    bnrimg: {
        width: '160px',
        height: 'auto',

    },
    bnrlogo: {
        width: '200px',
        height: 'auto',
        '@media(max-width : 600px)': {
            width: '100px',
        }
    },
    gridMain: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-0.5rem',
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
    check: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        '@media(max-width : 600px)': {
            display: 'initial',
            textAlign: 'center'
        }
    }



});

const helpdev = [
    {
        id: 1,
        title: 'Ramestta PRICE',
        data: `$${1.0400}`,
        datab: '',
    },
    {
        id: 2,
        title: 'MARKETCAP',
        data: `$${"6,607,710,524"}`,
        datab: 'Fully diluted market cap for Ramestta',
    },
    {
        id: 3,
        title: 'TRANSACTION PER DAY',
        data: `${"7,432,973"}`,
        datab: '343,036,955 Total Transactions',
    },
    {
        id: 4,
        title: 'WALLET ADDRESSES',
        data: `${"660,000+"}`,
        datab: 'Fully diluted market cap for Ramestta',
    },
    {
        id: 5,
        title: 'TOTAL Ramestta STAKED',
        data: `$${"1,763,456,155"}`,
        datab: 'The total value of all staked Ramestta',
    },
    {
        id: 6,
        title: 'ACTIVE VALIDATORS',
        data: `${"100"}`,
        datab: '',
    },
    {
        id: 7,
        title: 'ACTIVE DELEGATORS',
        data: `${"10,888"}`,
        datab: '',
    },
    {
        id: 8,
        title: 'DAPPS USING Ramestta',
        data: `${"350+"}`,
        datab: 'View all dapps',
    },

]

const Statsbnr = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{
                marginTop: '5rem'
            }}>


                <Box sx={{
                    textAlign: 'center',
                    marginTop: '1rem',
                    padding: '0rem 4rem',
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
                        Network
                    </Typography>


                </Box>



                <Box mt={3}>
                    <Grid container spacing={3}>
                        {helpdev.map((item, index) => (
                            <Grid key={index} item lg={3} md={3} sm={6} xs={12}>

                                <Box sx={{
                                    background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                                    borderRadius: '20px',
                                    padding: '1px',
                                    height: '100%'
                                }}>
                                    <Box sx={{
                                        background: 'linear-gradient(180deg, #000, #000)',
                                        padding: '1rem',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                                        overflow: 'hidden',
                                        borderRadius: '19px',
                                        height: '100%'
                                    }}>

                                        <Typography textTransform={'uppercase'} fontFamily={'Roboto'} color={'#999999'}>{item.title}</Typography>
                                        <Typography fontWeight={500} fontSize={18} mt={1} fontFamily={'Roboto'} color={'#fff'}>{item.data}</Typography>
                                        <Typography mt={0.5} fontFamily={'Roboto'} fontSize={14} color={item.id === 8 ? "#00B2B2" : "#999999"}>{item.id === 8 ? <Link href={""} style={{ color: '#00B2B2' }}>{item.datab}</Link> : item.datab}</Typography>

                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box textAlign={'center'} mt={3}>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>The ultimate aim through this program is to help developers build their dream solution and take it to the masses. Fill the form in the <Typography component={'span'}><Link style={{ color: '#00B2B2' }} href={""}>link</Link></Typography> to get started!</Typography>
                </Box>

                <Box sx={{
                    textAlign: 'center',
                    marginTop: '3rem',
                    padding: '0rem 4rem',
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
                        Comparison Between Ethereum and Ramestta Transactions
                    </Typography>


                </Box>

            </Box>
        </>
    );
}

export default Statsbnr;
