import Br from "@/theme/components/br";
import Text from "@/theme/components/text";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import bnrlogo from '../../icons/rama/bnrlogo.svg'
import chakr from '../../icons/rama/chakr.svg'
import check from '../../icons/rama/check.svg'
import Link from "next/link";



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


const sdkftrs=[
    {
        id:1,
         title:'Ethereum Compatible',
         text:'Ramestta SDK has a custom build EVM implementation. This allows developers to continue building using their favorite smart contract languages (Solidity, Vyper..) and enjoy all benefits of the Ethereum ecosystem.',
         sidetext1:"Solidity/Vyper support",
         sidetext2:"MetaMask and other wallets and user infrastructure",
         sidetext3:"Ethereum tools, libraries etc.",
    },
    {
        id:2,
         title:'Modular',
         text:'We started with the idea of making modular software. Even thought it has a lot of moving parts, the Ramestta SDK offers modularity when it comes to all major components of the stack.',
         sidetext1:"Consensus mechanisms",
         sidetext2:"DB engine selection",
         sidetext3:"Runtime",
    },
    {
        id:3,
         title:'Extensible',
         text:'Ramestta SDK was built from the ground up with a high level of pluggability and extensibility - keeping the core layers as performant as possible, while allowing the community to easily implement their own extensions or use the ones provided as part of the toolkit.',
         sidetext1:"Developer friendly plugin system",
         sidetext2:"Standard, extensible core components (libp2p, gRPC etc)",
         sidetext3:"Easy-to-build node extensions and auxiliary solutions",
    },
]

const Sdkfeatures = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{
                marginTop: '5rem'
            }}>

                <Box sx={{
                    textAlign: 'center',
                    marginTop: '1rem',

                }}>
                    <Typography sx={{
                        '@media(max-width : 1200px)': {
                            fontSize: '36px',
                            '@media(max-width : 600px)': {
                                fontSize: '20px'
                            }
                        }
                    }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} lineHeight={1.3} variant="h3">
                        Features
                    </Typography>

                    <Text text={"Ramestta SDK offers a unique set of features which offers high degree of flexibility and at the same time full compatibility with Ethereum."} />



                </Box>

                {sdkftrs.map((item, index)=>(
                    <Box key={index} sx={{
                        backgroundColor: '#15161A',
                        borderRadius: '30px',
                        marginTop:'2rem'
                    }}>
                        <Grid container spacing={0} alignItems={'center'}>
                            <Grid item lg={7} md={7} sm={12} xs={12}>
                                <Box sx={{
                                    padding:'1rem 1.5rem'
                                }}>
                                    <Typography sx={{
                                        '@media(max-width : 1200px)': {
                                            fontSize: '24px',
                                            '@media(max-width : 600px)': {
                                                fontSize: '20px'
                                            }
                                        }
                                    }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5">
                                        {item.title}
                                    </Typography>
                                    <Text text={item.text} />
                                </Box>
                            </Grid>
                            <Grid item lg={5} md={5} sm={12} xs={12}>
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
    
                                        <Text text={item.sidetext1} />
                                        <Box my={3}>
                                            <Text text={item.sidetext2} />
                                        </Box>
                                        <Text text={item.sidetext3} />
    
                                    </Box>
                                </Box>
    
                            </Grid>
                        </Grid>
                    </Box>
                ))}


            </Box>
        </>
    );
}

export default Sdkfeatures;
