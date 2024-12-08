import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import Text from "@/theme/components/text";
import check from '../../icons/rama/check.svg'
import Link from "next/link";
import ramapolygon from '../../icons/rama/ramapolygon.svg'
import Br from "@/theme/components/br";
import Positiontable from "./positiontable";





const useStyles = makeStyles({

    check: {
        display: 'flex',
        gap: '10px',
        padding: '10px 0px',
        alignItems: 'center',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            gap: '5px',
        }
    },
    checkimg: {
        width: '50px',
        '@media(max-width : 600px)': {
            width: '36px',
            height: 'auto'
        }
    }


});
const Sol_cont = [
    {
        id: 1,
        title: "Ramestta Plasma",
        subtitle: 'Live',
        color: '#00FF00'
    },
    {
        id: 2,
        title: "zk Rollups",
        subtitle: 'Coming Soon',
        color: '#08A2A3'
    },
    {
        id: 3,
        title: "Optimistic Rollups",
        subtitle: 'Coming Soon',
        color: '#08A2A3'
    },
    {
        id: 4,
        title: "Validum Chains",
        subtitle: 'Coming Soon',
        color: '#08A2A3'
    },

]


const Sol_cont2 = [
    {
        id: 1,
        title: "Ramestta PoS Chains",
        subtitle: 'Live',
        color: '#00FF00'
    },
    {
        id: 2,
        title: "Sidechains",
        subtitle: 'Coming Soon',
        color: '#08A2A3'
    },
    {
        id: 3,
        title: "Enterprise Chains",
        subtitle: 'Coming Soon',
        color: '#08A2A3'
    },


]

const Positioning = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{ margin: '2rem 0rem' }}>

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
                        Positioning
                    </Typography>
                    <Text text={"Brief comparison with the most notable alternatives suggests that Ramestta offers the most attractive set of features"} />

                </Box>


                <Box sx={{
                    background:'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                    borderRadius:'30px',
                    padding:'1px',
                    marginTop:'2rem'
                }}>
                <Box sx={{
                    background:'linear-gradient(180deg, #000, #000)',
                    padding:'1rem',
                    borderRadius:'30px'
                }}>
                    <Positiontable /> 
                </Box>
                </Box>

            </Box>
        </>
    );
}

export default Positioning;
