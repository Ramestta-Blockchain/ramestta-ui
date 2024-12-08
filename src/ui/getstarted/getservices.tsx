
import Heading from "@/theme/components/heading";
import { Box, Button, Container, Grid, Typography, } from "@mui/material";
import ser1 from '../../icons/rama/ser1.svg'
import ser2 from '../../icons/rama/ser2.svg'
import ser3 from '../../icons/rama/ser3.svg'
import ser4 from '../../icons/rama/ser4.svg'
import ser5 from '../../icons/rama/ser5.svg'
import ser6 from '../../icons/rama/ser6.svg'
import ser7 from '../../icons/rama/ser7.svg'
import ser8 from '../../icons/rama/ser8.svg'
import Image from "next/image";
import Text from "@/theme/components/text";
import Br from "@/theme/components/br";
import cs1 from '../../icons/rama/cs1.svg'
import cs2 from '../../icons/rama/cs2.svg'
import cs3 from '../../icons/rama/cs3.svg'
import Link from "next/link";
import Explore from "../overview/explore";
import { string } from "yup";



const Ser_List2 = [
    {
        id: 1,
        title: "Build a Dapp on Ramestta",
        text: "Complete information including easy tutorials you need to build, deploy, and manage apps on Ramestta",
        Img: cs1,
    },
    {
        id: 2,
        title: "Integration Apps",
        text: "To onboard your DApp or explore integration possibility of your project with Ramestta",
        Img: cs2,
    },
    {
        id: 3,
        title: "SDK",
        text: "To learn more, contribute or share feedback about SDK",
        Img: cs3,
    },




];



const Ser_List = [
    {
        id: 1,
        title: "Ramestta SDK",
        text: "A modular and extensible framework for building Ethereum-compatible blockchain networks, written in Golang.",
        Img: ser1,
        href:'/ramestta-sdk',
        target:'_self'
    },
    {
        id: 2,
        title: "Ramestta PoS Chain",
        text: "EVM-compatible ethereum sidechain, secured by a permissionless set of PoS validators and checkpoints submitted to Ethereum",
        Img: ser2,
        href:'https://ramaswap.com/#/swap',
        target:'_blank'
    },
    {
        id: 3,
        title: "Ramestta Plasma",
        text: "Fully functional, scalable Plasma implementation powered by custom, application-specific predicates",
        Img: ser3,
        href:'',
        target:'_self'
    },
    {
        id: 4,
        title: "zk Rollups",
        text: "Ethereum Layer 2 solution based on succinct validity proofs (aka zero-knowledge proofs) that get periodically submitted and verified on Ethereum",
        Img: ser4,
        href:'',
        target:'_self'
    },
    {
        id: 5,
        title: "Optimistic Rollups",
        text: "Ethereum Layer 2 solution based on fraud proofs, i.e. proofs of malicious actions that get submitted and resolved on Ethereum",
        Img: ser5,
        href:'',
        target:'_self'
    },
    {
        id: 6,
        title: "Stand-Alone Chains",
        text: "Sovereign Ethereum (side)chains, secured by their own set of validators and optionally connected to Ethereum via bridges",
        Img: ser6,
        href:'',
        target:'_self'
    },
    {
        id: 7,
        title: "Shared Security Chains",
        text: 'Blockchains that use "security as a service", i.e. validation service provided by a shared pool of PoS validators managed on Ethereum',
        Img: ser7,
        href:'',
        target:'_self'
    },
    {
        id: 8,
        title: "Ramestta Avail",
        text: "A general-purpose, scalable data availability-focused blockchain targeted for standalone chains, sidechains, and off-chain scaling solutions",
        Img: ser8,
        href:'',
        target:'_self'
    },


];








const Getservices = () => {
    return (

        <>
            <Box sx={{
                paddingTop: '5rem',
                '@media(max-width : 600px)': {
                    paddingTop: '1rem'
                }
            }}>

                <Box sx={{
                    textAlign: 'center',
                    '@media(max-width : 600px)': {
                        padding: '0rem 1rem',
                        marginTop: '2rem',
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
                        Get started with Ramestta
                    </Typography>
                    <Text text={"Ramestta combines the best of Ethereum and sovereign Blockchains into a full-stack scaling solution."} />
                </Box>

                <Box marginTop={5}>
                    <Box sx={{
                        textAlign: 'center',
                        marginBottom: '1.5rem'
                    }}>
                        <Typography sx={{
                            '@media(max-width : 1200px)': {
                                fontSize: '36px',
                                '@media(max-width : 600px)': {
                                    fontSize: '20px'
                                }
                            }
                        }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h4">
                            Solutions
                        </Typography>
                    </Box>
                    <Grid container spacing={2}>

                        {Ser_List.map((item, index) => (
                            <Grid key={index} item lg={3} md={3} sm={6} xs={12}>
                               <Link href={`${item.href}`} target={item.target} style={{textDecoration:'none'}}>
                               <Box sx={{
                                    background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                                    borderRadius: '30px',
                                    padding: '1px'
                                }}>
                                    <Box sx={{
                                        background: 'linear-gradient(180deg, #000, #000)',
                                        padding: '1rem 0.5rem',
                                        textAlign: 'center',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                                        overflow: 'hidden',
                                        height: '240px',
                                        borderRadius: '29px',
                                        '@media(max-width : 1200px)': {
                                            height: '280px',
                                            '@media(max-width : 900px)': {
                                                height: '230px',
                                                '@media(max-width : 600px)': {
                                                    height: 'auto',
                                                }
                                            }
                                        }
                                    }}>
                                        <Box>
                                            <Image src={item.Img} alt="" style={{ width: 40, }} />
                                        </Box>
                                        <Box>
                                            <Typography fontFamily={'Zilap Orion Personal Use'} color={'#fff'}>{item.title}</Typography>
                                            <Typography fontFamily={'Roboto'} color={'#fff'}>{item.text}</Typography>

                                        </Box>
                                    </Box>
                                </Box>
                               </Link>

                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box marginTop={5}>
                    <Grid container spacing={2} justifyContent={'center'}>

                        {Ser_List2.map((item, index) => (
                            <Grid key={index} item lg={4} md={4} sm={12} xs={12}>
                                <Box sx={{
                                    background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                                    borderRadius: '30px',
                                    padding: '1px'
                                }}>
                                    <Box sx={{
                                        background: 'linear-gradient(180deg, #002828, #03151F)',
                                        padding: '1rem',
                                        borderWidth: '1px',
                                        borderStyle: 'solid',
                                        borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                                        overflow: 'hidden',
                                        height: '400px',
                                        borderRadius: '29px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        '@media(max-width : 1200px)': {
                                            height: '350px',
                                            '@media(max-width : 600px)': {

                                                gap: '2rem',
                                                height: 'auto',


                                            }
                                        }
                                    }}>
                                        <Box>
                                            <Box>
                                                <Image src={item.Img} alt="" style={{ width: 40, }} />
                                            </Box>
                                            <Box>
                                                <Typography sx={{
                                                    '@media(max-width : 1200px)': {
                                                        fontSize: '20px'
                                                    }
                                                }} variant="h4" fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'}>{item.title}</Typography>
                                                <Typography fontFamily={'Roboto'} color={'#fff'}>{item.text}</Typography>

                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                                            padding: '1px',
                                            display: 'inline-block',
                                            borderRadius: '30px',
                                            width: '100%'
                                        }}>

                                            <Link href={""} target="_blank">
                                                <Button
                                                    sx={{
                                                        width: '100%',
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
                                                    View Documentation
                                                </Button>
                                            </Link>

                                        </Box>
                                    </Box>
                                </Box>

                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box marginTop={5}>
                    <Grid container spacing={2} alignItems={'center'}>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <Box sx={{
                                background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                                borderRadius: '30px',
                                padding: '1px'
                            }}>
                                <Box sx={{
                                    background: 'linear-gradient(180deg, #002828, #03151F)',
                                    padding: '1rem',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                                    overflow: 'hidden',
                                    borderRadius: '29px',
                                    '@media(max-width : 600px)': {
                                        gap: '2rem',
                                        height: 'auto',
                                    }
                                }}>
                                    <Box>
                                        <Box>
                                            <Image src={cs2} alt="" style={{ width: 40, }} />
                                        </Box>
                                        <Box>
                                            <Typography sx={{
                                                '@media(max-width : 1200px)': {
                                                    fontSize: '20px'
                                                }
                                            }} variant="h6" fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'}>Developer support program</Typography>
                                            <Typography fontFamily={'Roboto'} color={'#fff'}>Here a few easy ways to quickly get started, each one appealing to a different use case</Typography>

                                        </Box>
                                    </Box>

                                </Box>
                            </Box>

                        </Grid>
                        <Grid item lg={8} md={8} sm={12} xs={12}>
                            <Explore text={"Learn more about us"} text2={""} btn1={"Learn More"} btn2={"Open Positions"} ref1={"/about"} ref2={"/careers"} para={"Or see currently open positions and join us!"} marginTop={"0rem"} target1={"_self"} target2={"_self"} />
                        </Grid>

                    </Grid>
                </Box>

            </Box>
        </>

    );
}


export default Getservices