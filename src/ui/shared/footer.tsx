import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Link from "next/link";
import logo from '../../icons/rama/logo.svg'
import Text from "@/theme/components/text";
import linkedin from '../../icons/rama/linkedin.svg'
import twitter from '../../icons/rama/twitter.svg'
import instagram from '../../icons/rama/instagram.svg'
import github from '../../icons/rama/github.svg'
import youtube from '../../icons/rama/youtube.svg'
import discord from '../../icons/rama/discord.svg'
import facebook from '../../icons/rama/facebook.svg'
import telegram from '../../icons/rama/telegram.svg'



const Use_Ramestta = [
    {
        id: 1,
        Title: 'Wallet',
        href: '',
        target:'_self'
        
    },
    {
        id: 2,
        Title: 'Bridge',
        href: 'https://ramabridge.com/',
        target:'_blank'
    },
    {
        id: 3,
        Title: 'Swap',
        href: 'https://ramaswap.com/#/swap',
        target:'_blank'
    },
    {
        id: 4,
        Title: 'Explorer',
        href: 'https://www.ramascan.com/',
        target:'_blank'
    },
    {
        id: 5,
        Title: 'RAMA Coin',
        href: '/ramestta-token',
        target:'_self'
        
    },

]

const Developers = [
    {
        id: 1,
        Title: 'Documentation',
        href: 'https://docs.ramestta.com/',
        target:'_blank'
    },
    {
        id: 2,
        Title: 'Github',
        href: 'https://github.com/Ramestta-Blockchain',
        target:'_blank'
    },
    {
        id: 3,
        Title: 'Libraries',
        href: 'https://www.npmjs.com/search?q=Ramestta',
        target:'_blank'
    },
    {
        id: 4,
        Title: 'Dev support',
        href: '/developer-support-program',
        target:'_self'
    },
    {
        id: 5,
        Title: 'Support Program',
        href: '/support',
        target:'_self'
    },

]

const Resources = [
    {
        id: 1,
        Title: 'Blog',
        href: '/blog',
        target:'_self'
    },
    {
        id: 2,
        Title: 'White Paper',
        href: '/paper',
        target:'_self'
    },

]


const Company = [
    {
        id: 1,
        Title: 'About us',
        href: '/about',
        target:'_self'
    },
    {
        id: 2,
        Title: 'Career',
        href: '/careers',
        target:'_self'
    },
    {
        id: 3,
        Title: 'Contact Us',
        href: '/contact',
        target:'_self'
    },
    {
        id: 4,
        Title: 'Privacy Policy',
        href: '/privacy-and-policy',
        target:'_self'
    },


]






const Social_media = [
    {
        id: 1,
        href: 'https://www.instagram.com/ramestta/',
        img:instagram,
        target:'_blank'
    },
    {
        id: 2,
        href: 'https://x.com/Ramestta',
        img:twitter,
        target:'_blank'
    },
    {
        id: 3,
        href: 'https://t.me/ramestta_blockchain',
        img:telegram,
        target:'_blank'
    },
    {
        id: 4,
        href: 'https://www.facebook.com/Ramestta',
        img:facebook,
        target:'_blank'
    },
    {
        id: 5,
        href: 'https://www.reddit.com/r/ramestta_blockchain/?rdt=42471',
        img:discord,
        target:'_blank'
    },
    {
        id: 6,
        href: 'https://www.youtube.com/@ramestta6851/featured',
        img:youtube,
        target:'_blank'
    },
    {
        id: 7,
        href: 'https://www.linkedin.com/company/ramestta/',
        img:linkedin,
        target:'_blank'
    },
    {
        id: 8,
        href: 'https://github.com/Ramestta-Blockchain',
        img:github,
        target:'_blank'
    },


]

const useStyles = makeStyles({
    list: {
        color: '#fff',
        fontFamily: 'Roboto',
        textDecoration: 'none',
        transition: '0.5s',
        fontSize: 14,
        '&:hover': {
            textDecoration: 'underline',
            color: '#1CA7FB'
        }
    },
    social: {
        background: 'linear-gradient(1deg, #181C1F, #2D3037)',
        borderRadius: '5rem',
        display: 'inline-block',
        transition: '0.5s',
        '&:hover': {
            background: 'linear-gradient(90deg, #00B2B2, #00B2B2)',
        }
    }
});


const Footer = () => {
    const classes = useStyles();




    return (
        <Box sx={{

            marginTop: '4rem'
        }}>


            <Box>
                <Grid container spacing={2}>
                    <Grid item lg={2.5} md={2.5} sm={12} xs={12}>
                        <Box sx={{
                            '@media(max-width : 900px)': {
                                textAlign: 'center'
                            }
                        }}>
                            <Link href={"/"}><Image src={logo} alt={""} style={{ width: 150, height: 'auto' }} /></Link>
                            <Box sx={{
                                marginRight: '2rem',

                                '@media(max-width : 900px)': {
                                    marginRight: '0rem',
                                }

                            }}>
                                <Text text={"Ramestta is a PoS Blockchain with layer 2 solution for building dApp and connecting EVM-compatible blockchain, it a faster Blockahin for the Future."} />
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item lg={2} md={2} sm={12} xs={12}>
                        <Box sx={{
                            '@media(max-width : 900px)': {
                                textAlign: 'center'
                            }
                        }}>
                            <Typography variant="h6" fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'}>Company</Typography>
                            <Box component={'ul'} sx={{
                                margin: '0rem 0rem 0rem 1.3rem',
                                padding: 0,
                                color: '#fff',
                                listStyle: 'disc',

                                '@media(max-width : 900px)': {
                                    listStyle: 'none'
                                }

                            }}>
                                {Company.map((item, index) => (
                                    <Box key={index} component={'li'} mt={0.5}>
                                        <Link className={classes.list} href={item.href} target={item.target}>{item.Title}</Link>
                                    </Box>
                                ))}

                            </Box>
                        </Box>
                    </Grid>

                    <Grid item lg={2} md={2} sm={12} xs={12}>
                        <Box sx={{
                            '@media(max-width : 900px)': {
                                textAlign: 'center'
                            }
                        }}>
                            <Typography variant="h6" fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'}>Resources</Typography>
                            <Box component={'ul'} sx={{
                                margin: '0rem 0rem 0rem 1.3rem',
                                padding: 0,
                                color: '#fff',
                                listStyle: 'disc',

                                '@media(max-width : 900px)': {
                                    listStyle: 'none'
                                }

                            }}>
                                {Resources.map((item, index) => (
                                    <Box key={index} component={'li'} mt={0.5}>
                                        <Link className={classes.list} href={item.href} target={item.target}>{item.Title}</Link>
                                    </Box>
                                ))}

                            </Box>
                        </Box>
                    </Grid>

                    <Grid item lg={2} md={2} sm={12} xs={12}>
                        <Box sx={{
                            '@media(max-width : 900px)': {
                                textAlign: 'center'
                            }
                        }}>
                            <Typography variant="h6" fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'}>Developers</Typography>
                            <Box component={'ul'} sx={{
                                margin: '0rem 0rem 0rem 1.3rem',
                                padding: 0,
                                color: '#fff',
                                listStyle: 'disc',

                                '@media(max-width : 900px)': {
                                    listStyle: 'none'
                                }

                            }}>
                                {Developers.map((item, index) => (
                                    <Box key={index} component={'li'} mt={0.5}>
                                        <Link className={classes.list} href={item.href} target={item.target}>{item.Title}</Link>
                                    </Box>
                                ))}

                            </Box>
                        </Box>
                    </Grid>

                    <Grid item lg={3.5} md={3.5} sm={12} xs={12}>
                        <Box sx={{
                            '@media(max-width : 900px)': {
                                textAlign: 'center'
                            }
                        }}>
                            <Typography variant="h6" fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'}>Use Ramestta <Typography fontFamily={'Roboto'} component={'span'}>(</Typography>RAMA<Typography fontFamily={'Roboto'} component={'span'}>)</Typography></Typography>
                            <Box component={'ul'} sx={{
                                margin: '0rem 0rem 0rem 1.3rem',
                                padding: 0,
                                color: '#fff',
                                listStyle: 'disc',

                                '@media(max-width : 900px)': {
                                    listStyle: 'none'
                                }

                            }}>
                                {Use_Ramestta.map((item, index) => (
                                    <Box key={index} component={'li'} mt={0.5}>
                                        <Link className={classes.list} href={item.href} target={item.target}>{item.Title}</Link>
                                    </Box>
                                ))}

                            </Box>
                        </Box>
                    </Grid>

                </Grid>

                <Box sx={{
                    background: 'linear-gradient(90deg, transparent, #1CA7FB, transparent)',
                    width: '100%',
                    height: '1px',
                    mt: '2rem'
                }} />

                <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '2rem',
                    '@media(max-width : 900px)': {
                        justifyContent: 'center'
                    }
                }}>
                    <Box>
                        <Typography fontFamily={'Roboto'} color={'#fff'}>© 2021 Ramestta Blockchain</Typography>
                    </Box>
                    <Box component={'ul'} sx={{
                        margin: 0, padding: 0, listStyle: 'none',
                        display: 'flex',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        '@media(max-width : 600px)': {
                            justifyContent: 'center',
                            gap:'0.5rem'
                        }
                    }}>
                        {Social_media.map((item, index) => (
                            <Box key={index} component={'li'}>
                                <Link className={classes.social} href={item.href} target={item.target}><Image src={item.img} alt={""} style={{ display: 'block', width: '50px', height: 'auto' }} /></Link>
                            </Box>
                        ))}


                    </Box>
                </Box>
            </Box>


        </Box>
    );
};

export default Footer;
