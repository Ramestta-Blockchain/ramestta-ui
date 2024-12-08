import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Typography, styled, useTheme } from "@mui/material"
import SouthIcon from '@mui/icons-material/South';
import { useContext, useState } from "react";
import Heading from "@/theme/components/heading";





const Accordion_list = [
    {
        id: 1,
        title: 'Build Your Own Decentrailized Apps on Ramestta',
        text: 'Ramestta is based on the Ethereum blockchain, which may be thought of as a global computer that is controlled by many different computers all over the world. Each contact with the blockchain necessitates a tiny transaction cost to reimburse the Ethereum operators – this is the Gas Fee. When the Ethereum blockchain becomes overburdened, the transaction fee rises in accordance with supply and demand.',
        text2: 'Ramestta (RAMA) is an open-source project developed by a global community of collaborators or developers. It is an independent protocol and framework for constructing and linking EVM-compatible blockchain networks.',
        text3: '',
        text4: '',
    },
    {
        id: 2,
        title: 'Rama Coin',
        text: "The RAMA Coin is used to pay transaction fees for prospective dApps that operate on the Ramestta blockchain, as well as for staking to secure the network. RAMA Coin is intended to be a utility token that serves as a means of payment and settlement amongst members in the Ramestta Network's ecosystem.",
        text2:"Ramestta Network provides a scalable solution with the greatest transaction capacity of 70,000 TPS in a single sidechain. It has developed in top of the Polygon as Layer 1 (PoS) and Ramestta itself as Sidechain Layer 2 (PoS) solutions to ensure quicker transaction times and reduced transaction fees in.",
        text3: '',
        text4: '',
    },
    {
        id: 3,
        title: 'What is a Blockchain',
        text: "Blockchain is a distributed ledger that can be used for more than just digital assets. Any data (value) transfer is recorded. And this offers up a slew of new options, mainly if we lower the speed and scalability barriers.",
        text2:"Ethereum is a decentralized, expansive blockchain that allows smart contracts. Ether is the platform's cryptocurrency.",
        text3:"Decentralized applications or Dapps are programs that facilitate interaction without the use of foreign entities. Connections that rely on third parties to accomplish the activity include financial transactions and legal discussions. In this aspect, dApps are advantageous since they implement contracts and agreements using solid code and a layer of computers, rather than depending on the expertise and integrity of 3rd parties.",
        text4:"To put it another way, decentralized applications are more advanced versions of traditional apps that provide you with complete control over your transactions. They allow you to interact with a peer without fear of being judged or having Big Brother watching you at all times. These programs, too, do not require any personal data to operate."
    },
]




const Faqs = () => {


    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel: any | any | ((prevState: any) => any)) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <Box sx={{

                marginTop: '6rem',
                '@media(max-width : 600px)':{
                    marginTop:'1.5rem'
                }
            }}>

                {/* <Box textAlign={'center'} mb={2}>
                    <Typography sx={{
                        '@media(max-width : 1200px)': {
                            fontSize: '36px',
                            '@media(max-width : 600px)': {
                                fontSize: '20px'
                            }
                        }
                    }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} lineHeight={1.3} variant="h3">
                        FAQs
                    </Typography>
                </Box> */}
                <Grid container spacing={2}>

                    <Grid item lg={12} md={12} sm={12} xs={12}>

                        {Accordion_list.map((item, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index}` as any}
                                onChange={handleChange(`panel${index}`)}
                                sx={{
                                    background: 'linear-gradient(0deg, #000, #000)',
                                    border: `1px solid #43454B`,
                                    borderRadius: '12px',
                                    boxShadow: 'inherit',
                                    marginTop: '1rem',
                                    padding: '0px',
                                    '&.Mui-expanded': {
                                        background: 'linear-gradient(90deg, #000, #000)',
                                        marginTop: '1rem',
                                        color: '#000',
                                        borderRadius: '12px',
                                        border: `1px solid #055565`,
                                    },
                                }}>
                                <AccordionSummary

                                    sx={{
                                        fontSize: 22,

                                        color: expanded === `panel${index}` as any ? "#fff" : "#999",
                                        fontFamily: 'Zilap Orion Personal Use'
                                    }}
                                    expandIcon={<SouthIcon sx={{ color: expanded === `panel${index}` as any ? "#fff" : "#999" }} />}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}

                                >
                                    {item.title}
                                </AccordionSummary>
                                <AccordionDetails color={"#fff"} sx={{ fontSize: 14 }}>
                                    <Typography color={expanded === `panel${index}` as any ? "#fff" : "#999"}>{item.text}</Typography>
                                    <Typography mt={1.5} color={expanded === `panel${index}` as any ? "#fff" : "#999"}>{item.text2}</Typography>
                                    <Typography mt={1.5} color={expanded === `panel${index}` as any ? "#fff" : "#999"}>{item.text3}</Typography>
                                    <Typography color={expanded === `panel${index}` as any ? "#fff" : "#999"}>{item.text4}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}

                    </Grid>

                </Grid>

            </Box>

        </>
    )
}

export default Faqs


