import Br from "@/theme/components/br";
import Text from "@/theme/components/text";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import Link from "next/link";
import r1 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0001.jpg'
import r2 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0002.jpg'
import r3 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0003.jpg'
import r4 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0004.jpg'
import r5 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0005.jpg'
import r6 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0006.jpg'
import r7 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0007.jpg'
import r8 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0008.jpg'
import r9 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0009.jpg'
import r10 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0010.jpg'
import r11 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0011.jpg'
import r12 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0012.jpg'
import r13 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0013.jpg'
import r14 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0014.jpg'
import r15 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0015.jpg'
import r16 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0016.jpg'
import r17 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0017.jpg'
import r18 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0018.jpg'
import r19 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0019.jpg'
import r20 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0020.jpg'
import r21 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0021.jpg'
import r22 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0022.jpg'
import r23 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0023.jpg'
import r24 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0024.jpg'
import r25 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0025.jpg'
import r26 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0026.jpg'
import r27 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0027.jpg'
import r28 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0028.jpg'
import r29 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0029.jpg'
import r30 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0030.jpg'
import r31 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0031.jpg'
import r32 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0032.jpg'
import r33 from '../../icons/rama/whitepaper/Ramestta Whitepaper_page-0033.jpg'
 

 



const useStyles = makeStyles({

    box: {
        padding:'1rem 15rem',
        '@media(max-width : 1200px)':{
            padding:'1rem 10rem',  
            '@media(max-width : 900px)':{
            padding:'1rem 5rem',  
            '@media(max-width : 600px)':{
                padding:'0.3rem 0rem',  
            }
        }
        }
    },
    image: {
        width: '100%',
        height: 'auto',
    },
});

const White__paper = [
    {
        id: 1,
        img: r1,
    },
    {
        id: 2,
        img: r2,
    },
    {
        id: 3,
        img: r3,
    },
    {
        id: 4,
        img: r4,
    },
    {
        id: 5,
        img: r5,
    },
    {
        id: 6,
        img: r6,
    },
    {
        id: 7,
        img: r7,
    },
    {
        id: 8,
        img: r8,
    },
    {
        id: 9,
        img: r9,
    },
    {
        id: 10,
        img: r10,
    },

    {
        id: 11,
        img: r11,
    },
    {
        id: 12,
        img: r12,
    },
    {
        id: 13,
        img: r13,
    },
    {
        id: 14,
        img: r14,
    },
    {
        id: 15,
        img: r15,
    },
    {
        id: 16,
        img: r16,
    },
    {
        id: 17,
        img: r17,
    },
    {
        id: 18,
        img: r18,
    },
    {
        id: 19,
        img: r19,
    },
    {
        id: 20,
        img: r20,
    },
    {
        id: 21,
        img: r21,
    },
    {
        id: 22,
        img: r22,
    },
    {
        id: 23,
        img: r23,
    },
    {
        id: 24,
        img: r24,
    },
    {
        id: 25,
        img: r25,
    },
    {
        id: 26,
        img: r26,
    },
    {
        id: 27,
        img: r27,
    },
    {
        id: 28,
        img: r28,
    },
    {
        id: 29,
        img: r29,
    },
    {
        id: 30,
        img: r30,
    },
    {
        id: 31,
        img: r31,
    },
    {
        id: 32,
        img: r32,
    },
    {
        id: 33,
        img: r33,
    },

]

const Whitepaperbnr = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{
                marginTop: '5rem'
            }}>


                <Box sx={{
                    textAlign: 'center',
                    marginTop: '1rem',
                    padding: '0rem 4rem',
                    '@media(max-width : 600px)': {
                        padding: '0rem 1rem',
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
                        Network
                    </Typography>


                </Box>
 <Box>
    {White__paper.map((item, index)=>(
        <Box className={classes.box} key={index}>
            <Image src={item.img} alt={""} className={classes.image}/>
        </Box>
    ))}
 </Box>
 
            </Box>
        </>
    );
}

export default Whitepaperbnr;
