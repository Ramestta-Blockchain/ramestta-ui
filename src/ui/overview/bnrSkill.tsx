
import { Box, Grid, Typography } from "@mui/material";
import s1 from '../../icons/s1.svg'
import s2 from '../../icons/s2.svg'
import s3 from '../../icons/s3.svg'
import s4 from '../../icons/s4.svg'
import s5 from '../../icons/s5.svg'
import Image from "next/image";





const ListSkill = [
    {
        id: 1,
        Title: 'Web3.0',
        Img: s1,

    },
    {
        id: 2,
        Title: 'Blockchain',
        Img: s2,
    },
    {
        id: 3,
        Title: 'Web',
        Img: s3,
    },
    {
        id: 4,
        Title: 'UI/UX',
        Img: s4,
    },
    {
        id: 5,
        Title: 'Metaverse',
        Img: s5,
    },
]








const BnrSkill = () => {
    return (

        <>
            <Box>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    '@media(max-width : 600px)':{
                        gap:'1rem',
                        justifyContent:'space-around'
                    }

                }}>
                    {ListSkill.map((item, index) => (
                        <Box key={index} sx={{
                            display: 'flex',
                            alignItems: 'baseline',
 
                        }}>
                            <Box textAlign={'center'}>
                                <Box display={'inline-block'}>
                                    <Box sx={{
                                        background: 'linear-gradient(1deg, #181C1F, #2D3037)',
                                        padding: '1rem',
                                        // display: 'inline-block',
                                        borderRadius: '60px',
                                        height: '90px',
                                        width: '90px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        
                                    }}><Image src={item.Img} alt="" style={{ width: 50, height: 'auto' }} /></Box>
                                </Box>
                                <Box>
                                    <Typography mt={2} color={'#fff'}>{item.Title}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{
                                width: '1px',
                                height: '60px',
                                background: item.id === ListSkill.length ? '' : 'linear-gradient(180deg, #1CA7FB, #17FCD7)',
                                margin: item.id === ListSkill.length ? '0rem' : '0rem 2.5rem',
                                '@media(max-width : 600px)':{
                                    display:'none'
                                }

                            }} />
                        </Box>
                    ))}

                </Box>
            </Box>
        </>

    );
}


export default BnrSkill