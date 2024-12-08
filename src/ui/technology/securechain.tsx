import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import Text from "@/theme/components/text";
import check from '../../icons/rama/check.svg'
import Link from "next/link";
import ramapolygon from '../../icons/rama/ramapolygon.svg'
import Br from "@/theme/components/br";





const useStyles = makeStyles({

    check: {
        display: 'flex',
        gap: '10px',
        padding: '10px 0px',
        alignItems: 'center',
        '@media(max-width : 600px)': { 
            flexWrap:'wrap',
            gap: '5px',
        }
    },
    checkimg:{
        width:'50px',
        '@media(max-width : 600px)':{
            width:'36px',
            height:'auto'
        }
    }


});
const Sol_cont = [
    {
        id: 1,
        title: "Ramestta Plasma",
        subtitle: 'Live',
        color: '#00FF00'
    },
    {
        id: 2,
        title: "zk Rollups",
        subtitle: 'Coming Soon',
        color: '#08A2A3'
    },
    {
        id: 3,
        title: "Optimistic Rollups",
        subtitle: 'Coming Soon',
        color: '#08A2A3'
    },
    {
        id: 4,
        title: "Validum Chains",
        subtitle: 'Coming Soon',
        color: '#08A2A3'
    },

]


const Sol_cont2 = [
    {
        id: 1,
        title: "Ramestta PoS Chains",
        subtitle: 'Live',
        color: '#00FF00'
    },
    {
        id: 2,
        title: "Sidechains",
        subtitle: 'Coming Soon',
        color: '#08A2A3'
    },
    {
        id: 3,
        title: "Enterprise Chains",
        subtitle: 'Coming Soon',
        color: '#08A2A3'
    },
    

]

const Securechain = () => {
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
                        Ramestta Chains
                    </Typography>
                    <Text text={"Ramestta supports two major types of Polygon-compatible blockchain networks: stand-alone networks and networks that leverage “security as a service”"} />

                </Box>


                <Box sx={{
                    backgroundColor: '#131518',
                    padding: '2rem',
                    borderRadius: '30px',
                    marginTop: '3rem',
                    '@media(max-width : 600px)':{
                        padding: '1rem',
                    }
                }}>

                    <Box sx={{
                        textAlign: 'center'
                    }}>
                        <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5">
                            Secured Chains
                        </Typography>
                        <Text text={"Blockchain networks that use “security as a service” instead of establishing their own validator pool. The service can be provided either by Polygon directly (via fraud proofs or validity proofs) or by a pool of professional validators (similar to Polkadot’s “shared security”). Secured chains offer high level of security, with the tradeoff of sacrificing a portion of independence and flexibility."} />
                    </Box>

                    <Box marginTop={5}>
                        <Grid container spacing={2} alignItems={'center'}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box sx={{
                                    backgroundColor: '#000',
                                    borderRadius: '30px',
                                    padding: '1rem 8rem',
                                    '@media(max-width : 1200px)':{
                                        padding:'1rem 5rem',
                                        '@media(max-width : 600px)':{
                                            padding:'1rem 1rem'
                                        }
                                    }
                                }}>
                                    <Image src={ramapolygon} alt={""} style={{ width: '100%', height: 'auto' }} />
                                </Box>
                            </Grid>

                            <Grid item lg={6} md={6} sm={12} xs={12}>
                               <Box sx={{
                                display:'flex',
                                alignItems:'center',
                                '@media(max-width : 900px)':{
                                        padding:'1rem 5rem',
                                        '@media(max-width : 600px)':{
                                            padding:'1rem 0rem'
                                        }
                                    }
                               }}>
                               <Box sx={{
                                    background: 'linear-gradient(0deg, transparent, #1CA7FB, transparent)',
                                    width: '1px',
                                    height: '280px',
                                    margin: '0rem 2rem',
                                    '@media(max-width : 900px)':{
                                        display:'none'
                                    }
                                }} />
                                <Box>
                                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h6">
                                        Implementations
                                    </Typography>
                                    {Sol_cont.map((item, index) => (
                                        <Box key={index} className={classes.check}>
                                            <Image src={check} alt={""} className={classes.checkimg} />
                                            <Text text={item.title} />
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '5px'
                                            }}>
                                                <Box sx={{
                                                    backgroundColor: item.color,
                                                    width: '15px',
                                                    height: '15px',
                                                    borderRadius: '30px'
                                                }} />
                                                <Typography sx={{
                                                    '@media(max-width : 600px)':{
                                                        fontSize:12
                                                    }
                                                }} color={item.color}>{item.subtitle}</Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                               </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>


                <Box sx={{
                    backgroundColor: '#131518',
                    padding: '2rem',
                    borderRadius: '30px',
                    marginTop: '3rem',
                    '@media(max-width : 600px)':{
                        padding: '1rem',
                    }
                }}>

                    <Box sx={{
                        textAlign: 'center'
                    }}>
                        <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5">
                        Stand<Typography component={'span'} fontFamily={'Roboto'}   variant="h5">-</Typography>alone Chains
                        </Typography>
                        <Text text={"Fully sovereign Polygon-compatible blockchain networks. These networks are fully in charge of their own security, i.e. have their own pool of validators. Stand-alone chains offer the highest level of independence and flexibility, with the tradeoff of sometimes challenging validator pool establishing."} />
                    </Box>

                    <Box marginTop={5}>
                        <Grid container spacing={2} alignItems={'center'}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box sx={{
                                    backgroundColor: '#000',
                                    borderRadius: '30px',
                                    padding: '1rem 8rem',
                                    '@media(max-width : 1200px)':{
                                        padding:'1rem 5rem',
                                        '@media(max-width : 600px)':{
                                            padding:'1rem 1rem'
                                        }
                                    }
                                }}>
                                    <Image src={ramapolygon} alt={""} style={{ width: '100%', height: 'auto' }} />
                                </Box>
                            </Grid>

                            <Grid item lg={6} md={6} sm={12} xs={12}>
                               <Box sx={{
                                display:'flex',
                                alignItems:'center',
                                '@media(max-width : 900px)':{
                                        padding:'1rem 5rem',
                                        '@media(max-width : 600px)':{
                                            padding:'1rem 0rem'
                                        }
                                    }
                               }}>
                               <Box sx={{
                                    background: 'linear-gradient(0deg, transparent, #1CA7FB, transparent)',
                                    width: '1px',
                                    height: '280px',
                                    margin: '0rem 2rem',
                                    '@media(max-width : 900px)':{
                                        display:'none'
                                    }
                                }} />
                                <Box>
                                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h6">
                                        Implementations
                                    </Typography>
                                    {Sol_cont2.map((item, index) => (
                                        <Box key={index} className={classes.check}>
                                            <Image src={check} alt={""} className={classes.checkimg} />
                                            <Text text={item.title} />
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '5px'
                                            }}>
                                                <Box sx={{
                                                    backgroundColor: item.color,
                                                    width: '15px',
                                                    height: '15px',
                                                    borderRadius: '30px'
                                                }} />
                                                <Typography sx={{
                                                    '@media(max-width : 600px)':{
                                                        fontSize:12
                                                    }
                                                }} color={item.color}>{item.subtitle}</Typography>
                                            </Box>
                                        </Box>
                                    ))}
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

export default Securechain;
