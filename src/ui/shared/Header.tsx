import Image from "next/image";
import { Box, Button, Container, styled, } from "@mui/material";
import Link from "next/link";
import logo from '../../icons/rama/logo.svg'
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useQuery } from "@tanstack/react-query";
import { ramaCoinGeckoPrice } from "@/lib/api/rest/ramaCoinGeckoPrice";





const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px'
}));



const StyledLink = styled(Link)(({ theme }) => ({

    'img': {
        '@media(max-width : 600px)': {
            width: '170px',
            marginTop: '5px'
        }
    }
}));



export default function Header() {


    const { data: ramaCoinGeckoPriceData } = useQuery({
        queryKey: ['ramaCoinGeckoPrice'],
        queryFn: () => {
            return ramaCoinGeckoPrice()
        }
        ,
    })

    const coin_Gecko_price_market_data = ramaCoinGeckoPriceData?.market_data?.current_price?.usd;
 




    return (
        <Box>
            <StyledBox>

                <Box>
                    <StyledLink href={"/"}><Image src={logo} alt="logo" style={{ width: '160px', height: 'auto' }} /></StyledLink>
                </Box>
                <Box sx={{
                    '@media(max-width : 900px)': {
                        display: 'none'
                    }
                }}>
                    <Navbar />
                </Box>
                <Box sx={{
                    '@media(max-width : 900px)': {
                        display: 'none'
                    }
                }}>
                    <Box sx={{
                        background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                        padding: '1px',
                        display: 'inline-block',
                        borderRadius: '30px',

                    }}>

                        <Box
                            sx={{
                                fontFamily: 'Roboto',
                                textTransform: 'capitalize',
                                background: "linear-gradient(90deg, #191D20, #2C3037)",
                                boxShadow: 'none',
                                borderRadius: '30px',
                                padding: '12px 16px',
                                color: '#00B2B2'
                            }}>
                            1 RAMA={parseFloat(coin_Gecko_price_market_data).toFixed(2)} USDT
                        </Box>

                    </Box>
                </Box>
                <Box sx={{
                    display: 'none',
                    '@media(max-width : 900px)': {
                        display: 'block'
                    }
                }}>
                    <Sidebar />
                </Box>
            </StyledBox>
            <Box sx={{
                background: 'linear-gradient(90deg, transparent, #1CA7FB, transparent)',
                width: '100%',
                height: '1px',
                mt: '1.5rem'
            }} />
        </Box>

    );
}
