'use client'


import Link from 'next/link'
import { Box, colors, styled, Typography } from '@mui/material'
import { usePathname } from 'next/navigation';
import { useAccount } from 'wagmi';
import XButton from '@/theme/components/xButton';
import PopoverServices from '@/theme/components/popoverServices';
import bnrlogo from '../../icons/rama/bnrlogo.svg'
import UseRamestta from '@/theme/components/useRamestta';
import { useQuery } from '@tanstack/react-query';
import { ramaCoinGeckoPrice } from '@/lib/api/rest/ramaCoinGeckoPrice';




const LinkStyled = styled(Link)(({ theme }) => ({
    color: '#fff',
    fontFamily: 'roboto',
    ':hover': {
        color: '#1CA7FB'
    }

}));



const ListBox = styled('ul')(({ theme }) => ({
    padding: 8,
    listStyle: 'none',
    display: 'inline-flex',
    gap: '1rem',
    '@media(max-width : 1200px)': {
        gap: '0rem',
        '@media(max-width : 900px)': {
            display: 'inherit'
        }
    }
}));

const ListItem = styled('li')(({ theme }) => ({
    'a': {
        padding: '4px 8px',
        display: 'inline-block',
        color: theme.palette.primary.contrastText,
        textDecoration: 'none',
        borderRadius: '6px',
        width: 'max-content',
        '@media(max-width : 900px)': {
            marginTop: '1rem'
        }
    }
}));

const BoxConnect = styled(Box)(({ theme }) => ({
    display: 'none',
    '@media(max-width : 900px)': {
        display: 'block',

    }
}));





const Additional_Links = [
    {
        id: 1,
        Title: 'Documentation',
        href: 'https://docs.ramestta.com/',
        img: bnrlogo,
        target:'_blank'
    },
    {
        id: 2,
        Title: 'Github',
        href: 'https://github.com/Ramestta-Blockchain',
        img: bnrlogo,
         target:'_blank'
    },
    {
        id: 3,
        Title: 'Libraries',
        href: 'https://www.npmjs.com/search?q=Ramestta',
        img: bnrlogo,
         target:'_blank'
    },
];

const Community = [
    {
        id: 1,
        Title: 'Instagram',
        href: 'https://www.instagram.com/ramestta/',
        img: bnrlogo,
         target:'_blank'
    },
    {
        id: 2,
        Title: 'Twitter',
        href: 'https://x.com/Ramestta',
        img: bnrlogo,
         target:'_blank'
    },
    {
        id: 3,
        Title: 'Telegram',
        href: 'https://t.me/ramestta_blockchain',
        img: bnrlogo,
         target:'_blank'
    },
    {
        id: 4,
        Title: 'Facebook',
        href: 'https://www.facebook.com/Ramestta',
        img: bnrlogo,
         target:'_blank'
    },
    {
        id: 5,
        Title: 'Youtube',
        href: 'https://www.youtube.com/@ramestta6851/featured',
        img: bnrlogo,
         target:'_blank'
    },
    {
        id: 6,
        Title: 'LinkedIn',
        href: 'https://www.linkedin.com/company/ramestta/',
        img: bnrlogo,
         target:'_blank'
    },
    {
        id: 7,
        Title: 'Raddit',
        href: 'https://www.reddit.com/r/ramestta_blockchain/?rdt=42471',
        img: bnrlogo,
         target:'_blank'
    },
];

const Resources = [
    {
        id: 1,
        Title: 'Whitepaper',
        href: '/white-paper',
        img: bnrlogo,
         target:'_self'
    },
    {
        id: 2,
        Title: 'Blog',
        href: '/blog',
        img: bnrlogo,
         target:'_self'
    },

];

const Company = [
    {
        id: 1,
        Title: 'About Us',
        href: '/about',
        img: bnrlogo,
         target:'_self'
    },
    {
        id: 2,
        Title: 'Contact Us',
        href: '/contact',
        img: bnrlogo,
         target:'_self'
    },

];


const Navbar = () => {

    const pathname = usePathname()

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
            <ListBox>
                <ListItem>
                    <PopoverServices Additional_Links={Additional_Links} maintile={'Developers'}  />
                </ListItem>
                <ListItem>
                    <PopoverServices Additional_Links={Community} maintile={'Community'}  />
                </ListItem>
                <ListItem>
                    <PopoverServices Additional_Links={Resources} maintile={'Resources'}  />
                </ListItem>
                <ListItem>
                    <PopoverServices Additional_Links={Company} maintile={'Company'} />
                </ListItem>
                <ListItem>
                    <UseRamestta />
                </ListItem>




                <ListItem>
                    <BoxConnect>

                        <Box sx={{
                            background: 'linear-gradient(90deg, #0DC1C3, #17FCD700, #17FCD700, #0DC1C3)',
                            padding: '1px',
                            display: 'inline-block',
                            borderRadius: '30px',
                            marginTop: '1rem'
                        }}>

                            <Box
                                sx={{
                                    fontFamily: 'Roboto',
                                    textTransform: 'capitalize',
                                    background: "linear-gradient(90deg, #191D20, #2C3037)",
                                    boxShadow: 'none',
                                    borderRadius: '30px',
                                    padding: '12px 20px',
                                    color: '#00B2B2'
                                }}>
                            1 RAMA={parseFloat(coin_Gecko_price_market_data).toFixed(2)} USDT
                            </Box>

                        </Box>

                    </BoxConnect>
                </ListItem>

            </ListBox>

        </Box>
    )
}
export default Navbar