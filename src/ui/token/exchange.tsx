import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import fees from '../../icons/rama/fees.svg'
import Text from "@/theme/components/text";
import exarrow from '../../icons/rama/exarrow.svg'
import Link from "next/link";
import ex1 from '../../icons/rama/ex1.svg'
import ex2 from '../../icons/rama/ex2.svg'
import ex3 from '../../icons/rama/ex3.svg'
import ex4 from '../../icons/rama/ex4.svg'
import ex5 from '../../icons/rama/ex5.svg'
import ex6 from '../../icons/rama/ex6.svg'
import ex7 from '../../icons/rama/ex7.svg'
import ex8 from '../../icons/rama/ex8.svg'
import ex9 from '../../icons/rama/ex9.svg'
import ex10 from '../../icons/rama/ex10.svg'
import ex11 from '../../icons/rama/ex11.svg'
import ex12 from '../../icons/rama/ex12.svg'
import ex13 from '../../icons/rama/ex13.svg'
import ex14 from '../../icons/rama/ex14.svg'
import ex15 from '../../icons/rama/ex15.svg'
import ex16 from '../../icons/rama/ex16.svg'




const exchange_list = [
    {
        id: 1,
        title: "Bitmart",
        live: "Live",
        img: ex1,
        href:'https://www.bitmart.com/trade/en-US?symbol=RAMA_USDT&layout=basic'
    },
    {
        id: 2,
        title: "Koinpark",
        live: "Live",
        img: ex2,
        href:'https://www.koinpark.com/trade/RAMA-INR'
    },
    {
        id: 3,
        title: "Coinbase",
        img: ex3,
        href:''
    },

    {
        id: 4,
        title: "Binance",
        img: ex4,
        href:''
    },
    {
        id: 5,
        title: "Huobi",
        img: ex5,
        href:''
    },


    {
        id: 6,
        title: "Crypto.com",
        img: ex6,
        href:''
    },
    {
        id: 7,
        title: "FTX",
        img: ex7,
        href:''
    },

    {
        id: 8,
        title: "Digifinex",
        img: ex8,
        href:''
    },
    {
        id: 9,
        title: "KuCoin",
        img: ex9,
        href:''
    },
    {
        id: 10,
        title: "Gate.io",
        img: ex10,
        href:''
    },
    {
        id: 11,
        title: "Kraken",
        img: ex11,
        href:''
    },
    {
        id: 12,
        title: "WazirX",
        img: ex12,
        href:''
    },
    {
        id: 13,
        title: "Poloniex",
        img: ex13,
        href:''
    },
    {
        id: 14,
        title: "CEX.io",
        img: ex14,
        href:''
    },
    {
        id: 15,
        title: "Probit",
        img: ex15,
        href:''
    },
    {
        id: 16,
        title: "HitBTC",
        img: ex16,
        href:''
    },

]

const useStyles = makeStyles({
    linklist:{
        textDecoration:'none',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#141619',
        padding:'10px 1.5rem 10px 10px',
        borderRadius:'50px'
    }



});

const Exchange = () => {
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
                        Where can you get RAMA Coin?
                    </Typography>
                    <Text text={"RAMA Coin will available in upcoming time on many of the leading centralized and decentralized exchanges around the world. "} />
                </Box>

                <Box sx={{
                    textAlign: 'center',
                    marginTop: '2rem'
                }}>
                    <Typography sx={{
                        '@media(max-width : 1200px)': {
                            fontSize: '36px',
                            '@media(max-width : 600px)': {
                                fontSize: '20px'
                            }
                        }
                    }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} lineHeight={1.3} variant="h3">
                        Other Exchanges
                    </Typography>

                </Box>

                <Box sx={{
                    background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                    borderRadius: '30px',
                    padding: '1px',
                    marginTop:'2rem'
                }}>
                    <Box sx={{
                        background: 'linear-gradient(180deg, #000, #000)',
                        padding: '1rem',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                        overflow: 'hidden',
                        borderRadius: '29px',
                    }}>
                        <Box component={'ul'}>
                            {exchange_list.map((item, index) => (
                                <Box key={index} component={'li'} py={1}>
                                   <Link href={item.href} className={classes.linklist} target="_blank">
                                   <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        <Image src={item.img} alt={""} width={44} height={44} />
                                        <Typography fontFamily={'Roboto'} color={'#fff'}>{item.title}</Typography>
                                        {item.live && <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.3rem'
                                        }}>
                                            <Box sx={{
                                                backgroundColor: '#00FF00',
                                                width: '15px',
                                                height: '15px',
                                                borderRadius: '30px'
                                            }} />
                                            <Typography fontFamily={'Roboto'} color={'#00FF00'}>{item.live}</Typography>
                                        </Box>}
                                    </Box>
                                    <Box>
                                        <Image src={exarrow} alt={""} style={{display:'inline-flex'}}/>
                                    </Box>
                                   </Link>
                                </Box>
                            ))}
                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Exchange;
