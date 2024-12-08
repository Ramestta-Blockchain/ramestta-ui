import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import Text from "@/theme/components/text";
import polygonimg from '../../icons/rama/polygonimg.svg'
import Link from "next/link";
import check from '../../icons/rama/check.svg'
import Br from "@/theme/components/br";





const useStyles = makeStyles({




});


const Technology = () => {
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
                        Foundation for the Internet of Value and People
                    </Typography>
                    <Text text={"Ramestta provides the core components and tools to join the new, borderless economy and society"} />

                    <Box sx={{
                        padding: '0rem 6rem',
                        '@media(max-width : 600px)':{
                            padding: '1rem 1rem 0rem 1rem',
                        }
                    }}>
                        <Image src={polygonimg} alt={""} style={{ width: '100%', height: 'auto' }} />
                    </Box>

                    <Box mt={2}>
                        <Text text={"With Ramestta, any project can easily spin-up a dedicated blockchain network which combines the best features of stand-alone blockchains (sovereignty, scalability and flexibility) and Polygon (security, interoperability and developer experience). Additionally, these blockchains are compatible with all the existing Polygon tools (Metamask, MyCrypto, Remix etc), and can exchange messages among themselves and with Polygon."} />
                    </Box>
                    <Box mt={2}>
                        <Text text={"Ramestta technology is materialized through two major components: Ramestta framework and Ramestta protocol."} />
                    </Box>
                </Box>


                <Box sx={{
                    background:'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                    borderRadius:'30px',
                    padding:'1px',
                    marginTop:'4rem'
                }}>
                <Box sx={{
                    background:'linear-gradient(180deg, #000, #000)',
                    padding:'1rem 1.5rem',
                    borderRadius:'30px'
                }}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box sx={{
                                '@media(max-width : 600px)':{
                                    textAlign:'center'
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
                                    Framework
                                </Typography>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    '@media(max-width : 600px)': {
                                           flexWrap:'wrap',
                                           justifyContent:'center',
                                           marginTop:'1rem',
                                        }
                                }}>
                                    <Image src={check} alt={""} />
                                    <Typography color={'#fff'}>One-click deployment of preset Polygon-<Br />compatible blockchains</Typography>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginTop:'1rem',
                                    '@media(max-width : 600px)': {
                                           flexWrap:'wrap',
                                           justifyContent:'center'
                                        }
                                }}>
                                    <Image src={check} alt={""} />
                                    <Typography color={'#fff'}>Growing set of modules (pluggable consensus, <Br /> staking, governance, EVM/Ewasm, execution <Br /> environments, dispute resolvers etc.) for <Br /> developers who want to build their custom <Br /> blockchains</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{
                            textAlign:'end',
                            '@media(max-width : 600px)': {
                                           textAlign:'center'
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
                                    Protocol
                                </Typography>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    justifyContent:'end',
                                    '@media(max-width : 600px)': {
                                           flexWrap:'wrap',
                                           justifyContent:'center',
                                           marginTop:'1rem',
                                           flexDirection:'column-reverse'
                                        }
                                }}>
                                    
                                    <Typography color={'#fff'}>Arbitrary message passing between any two <Br/> participating Ramestta chains, as <Br/> well as between any Ramestta chain and Polygon</Typography>
                                    <Image src={check} alt={""} />
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    justifyContent:'end',
                                    marginTop:'1rem',
                                    '@media(max-width : 600px)': {
                                        flexWrap:'wrap',
                                        justifyContent:'center',
                                        marginTop:'1rem',
                                        flexDirection:'column-reverse'
                                     }
                                }}>
                                    
                                    <Typography color={'#fff'}>"Security as a service" (non-mandatory, <Br/> modular security services, provided either by <Br/> Polygon directly or by <Br/> a dedicated set of validators)</Typography>
                                    <Image src={check} alt={""} />
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

export default Technology;
