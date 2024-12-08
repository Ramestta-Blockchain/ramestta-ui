
import Heading from "@/theme/components/heading";
import { Box, Container, Grid, Typography, } from "@mui/material";
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







const Ser_List = [
    {
        id: 1,
        title: "EVM Compatibility",
        text: "Industry dominance, established tech stack, tools, languages, standards, enterprise adoption",
        Img: ser1,
    },
    {
        id: 2,
        title: "Scalability",
        text: "Dedicated blockchains, scalable consensus algorithms, custom Wasm execution environments",
        Img: ser2,
    },
    {
        id: 3,
        title: "Security",
        text: "Modular ''security as a service'', provided either by Ethereum or by a pool of professional validators",
        Img: ser3,
    },
    {
        id: 4,
        title: "Sovereignty",
        text: "Dedicated throughput/resources, fully customizable tech stack, sovereign governance",
        Img: ser4,
    },
    {
        id: 5,
        title: "Interoperability",
        text: "Native support for arbitrary message passing (tokens, contract calls etc), bridges to external systems",
        Img: ser5,
    },
    {
        id: 6,
        title: "User Experience",
        text: "Comparable to Web2, “zero-gas” transactions, instant (deterministic) transaction finality",
        Img: ser6,
    },
    {
        id: 7,
        title: "Developer Experience",
        text: "Equivalent to EVM, no protocol level knowledge required, no token deposits, fees or permissions",
        Img: ser7,
    },
    {
        id: 8,
        title: "Modularity",
        text: "High customizability, extensibility and upgradeability, short time-to-market, community collaboration",
        Img: ser8,
    },


];








const Services = () => {
    return (

        <>
            <Box sx={{
                paddingTop: '5rem',
                '@media(max-width : 600px)':{
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
                        Features
                    </Typography>
                    <Text text={"Ramestta (RAMA) has designed a novel Proof-of-Stake (PoS) mechanism for network security and economics. Our Effective Proof-of-Stake (EPoS) reduces centralization and distributes rewards fairly to thousands of validators."} />
                </Box>

                <Box marginTop={5}>
                    <Grid container spacing={2}>

                        {Ser_List.map((item, index) => (
                            <Grid key={index} item lg={3} md={3} sm={6} xs={12}>
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
                                        height: '210px',
                                        borderRadius: '29px',
                                        '@media(max-width : 1200px)':{
                                            height: '260px', 
                                            '@media(max-width : 900px)':{
                                                height: '210px', 
                                                '@media(max-width : 600px)':{
                                                height: 'auto', 
                                            }
                                            }
                                        }
                                    }}>
                                        <Box>
                                            <Image src={item.Img} alt="" style={{ width: 40,}} />
                                        </Box>
                                        <Box>
                                            <Typography fontFamily={'Zilap Orion Personal Use'} color={'#fff'}>{item.title}</Typography>
                                            <Typography fontFamily={'Roboto'} color={'#fff'}>{item.text}</Typography>

                                        </Box>
                                    </Box>
                                </Box>

                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Box>
        </>

    );
}


export default Services