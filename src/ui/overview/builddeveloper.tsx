import Br from "@/theme/components/br";
import Text from "@/theme/components/text";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import bnrlogo from '../../icons/rama/bnrlogo.svg'
import chakr from '../../icons/rama/chakr.svg'
import check from '../../icons/rama/check.svg'



const useStyles = makeStyles({
    "@keyframes rotate": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" }
    },
    bnrbg: {
        width: '100%',
        height: 'auto',
        padding: '3rem 2rem'
    },
    bnrimg: {
        width: '450px',
        height: 'auto',
        animation: '$rotate 10s linear infinite',  // Applies continuous rotation
        '@media(max-width : 1200px)': {
            width: '350px',
            '@media(max-width : 900px)': {
                width: '290px',
                '@media(max-width : 600px)': {
                    width: '260px',

                }
            }
        }
    },
    bnrlogo: {
        width: '65px',
        height: 'auto',
        '@media(max-width : 600px)': {
            width: '100px',
        }
    },
    gridMain: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    check:{
        display:'flex',
        gap:'10px',
        alignItems:'center',
        '@media(max-width : 600px)':{
            display:'initial',
            textAlign:'center'
        }
    }



});

const Builddeveloper = () => {
    const classes = useStyles();
    return (
        <>
            <Box>

                <Box sx={{
                    textAlign: 'center', marginTop: '5rem', padding: '0rem 4rem',
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
                        Built by global developer <Typography sx={{
                            '@media(max-width : 1200px)': {
                                fontSize: '36px',
                                '@media(max-width : 600px)': {
                                    fontSize: '20px'
                                }
                            }
                        }} variant="h3" fontWeight={700} component={'span'}>'</Typography>s<Typography sx={{
                            '@media(max-width : 1200px)': {
                                fontSize: '36px',
                                '@media(max-width : 600px)': {
                                    fontSize: '20px'
                                }
                            }
                        }} variant="h3" fontWeight={700} component={'span'}>,</Typography> for <Br /> developer<Typography sx={{
                            '@media(max-width : 1200px)': {
                                fontSize: '36px',
                                '@media(max-width : 600px)': {
                                    fontSize: '20px'
                                }
                            }
                        }} variant="h3" fontWeight={700} component={'span'}>,</Typography>s
                    </Typography>
                    <Text text={"Developers simply change Chain ID and enjoy faster EVM executions identical at the bytecode level. They can use their familiar and standard Web3 tooling to easily migrate to Ramestta."} />
                </Box>

                <Box sx={{
                    background: 'linear-gradient(90deg, transparent, #1CA7FB, transparent)',
                    width: '100%',
                    height: '1px',
                    my: '1.5rem'
                }} />

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '@media(max-width : 600px)': {
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '1rem'
                    }
                }}>
                    <Box>
                        <Text text={"RPC option 1"} />
                        <Text text={"Network name = RAMESTTA"} />
                        <Text text={"New RPC URL = https://blockchain.ramestta.com"} />
                        <Text text={"Chain ID = 1370"} />
                        <Text text={"Symbol = RAMA"} />
                        <Text text={"Block explorer = https://ramascan.com/"} />
                    </Box>
                    <Box sx={{
                        textAlign: 'end',
                        '@media(max-width : 600px)': {
                            textAlign: 'center'
                        }
                    }}>
                        <Text text={"RPC option 2"} />
                        <Text text={"Network name = RAMESTTA"} />
                        <Text text={"New RPC URL = https://blockchain2.ramestta.com"} />
                        <Text text={"Chain ID = 1370"} />
                        <Text text={"Symbol = RAMA"} />
                        <Text text={"Block explorer = https://ramascan.com/"} />
                    </Box>
                </Box>

                <Box
                    className="bnrbg2"
                    sx={{
                        padding: '2rem 0rem',
                        margin: '3rem 0rem',
                        backgroundSize: '100% 100%',
                        '@media(max-width : 1200px)': {
                            margin: '0rem 0rem',
                            padding: '0rem 0rem',
                            '@media(max-width : 900px)': {
                                margin: '2rem 0rem',
                                '@media(max-width : 600px)': {
                                    padding: '1rem 1rem',
                                    backgroundImage: 'inherit'
                                }
                            }
                        }
                    }}>
                    <Box className={classes.gridMain}>
                        <Box>
                            <Box sx={{ position: 'relative',
                                '@media(max-width : 600px)':{
                                    marginTop:'3rem'
                                }
                             }}>
                                <Image src={chakr} alt={""} className={classes.bnrimg} />
                                <Box sx={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}>
                                    <Image className={classes.bnrlogo} src={bnrlogo} alt={""} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    textAlign:'center',
                    marginTop:'2rem'
                }}>
                    <Text text={"What about users? They can continue to use MetaMask or Ledger — but now pay minimal fees. Any Ethereum wallets or portals can work on Ramestta without code changes or new installs — we are fully compatible for both transaction messages and execution environments."} />
                </Box>
                <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    flexWrap:'wrap',
                    alignItems:'center',
                    marginTop:'2rem',
                    gap:'1rem',
                    '@media(max-width : 600px)':{
                        justifyContent:'center'
                    }
                }}>
                    <Box className={classes.check}>
                        <Image src={check} alt={""} width={50}/>
                        <Text text={"Ramestta bridges can connect any PoS and PoS chains."}/>
                    </Box>
                    <Box className={classes.check}>
                        <Image src={check} alt={""} width={50}/>
                        <Text text={"It is inherently more secure"}/>
                    </Box>
                    <Box className={classes.check}>
                        <Image src={check} alt={""} width={50}/>
                        <Text text={"It is more open and PoSerful"}/>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Builddeveloper;
