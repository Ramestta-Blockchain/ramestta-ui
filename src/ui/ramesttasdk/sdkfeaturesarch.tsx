import Br from "@/theme/components/br";
import Text from "@/theme/components/text";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import bnrlogo from '../../icons/rama/bnrlogo.svg'
import chakr from '../../icons/rama/chakr.svg'
import check from '../../icons/rama/check.svg'
import Link from "next/link";



const useStyles = makeStyles({

    bnrbg: {
        width: '100%',
        height: 'auto',
        padding: '3rem 2rem'
    },
    bnrimg: {
        width: '160px',
        height: 'auto',

    },
    bnrlogo: {
        width: '200px',
        height: 'auto',
        '@media(max-width : 600px)': {
            width: '100px',
        }
    },
    gridMain: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-0.5rem',
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
    check: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        '@media(max-width : 600px)': {
            display: 'initial',
            textAlign: 'center'
        }
    }



});


const sdkftrs=[
    {
        id:1,
         title:'Networking',
         text:'It all starts at the base networking layer, which utilizes libp2p. libp2p is modular, extensible and fast and provides a great foundation for some of the advanced features of Ramestta SDK.',
       
    },
    {
        id:2,
         title:'Synchronization & Consensus',
         text:'The separation of the synchronization and consensus protocols allows for modularity and implementation of custom sync and consensus mechanisms.',
       
    },
    {
        id:3,
         title:'Blockchain',
         text:'The Blockchain layer is the central layer that coordinates everything in a Ramestta SDK based system.',
       
    },
    {
        id:4,
         title:'State',
         text:'The State inner layer contains state transition logic. It deals with how the state changes when a new block is included.',
       
    },
    {
        id:5,
         title:'JSON RPC',
         text:'The JSON RPC layer is an API layer that dApp developers use to interact with the blockchain.',
       
    },
    {
        id:6,
         title:'TxPool',
         text:'The transaction pool that is closely linked with other modules in the system, so transactions can be added from multiple entry points.',
       
    },
    {
        id:7,
         title:'GRPC',
         text:'The GRPC layer is vital for operator interactions. Through it, node operators can easily interact with the client, providing an enjoyable UX.',
       
    },
     
]

const Sdkfeaturesarch = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{
                marginTop: '5rem'
            }}>

                 

               
                    <Box >
                        <Grid container spacing={2} justifyContent={'center'}>
                        {sdkftrs.map((item, index)=>(
                            <Grid key={index} item lg={4} md={4} sm={6} xs={12}>
                                <Box sx={{
                                    padding:'1rem',
                                    border:'1px dashed #005959',
                                    height:'100%'
                                }}>
                                    <Typography sx={{
                                        '@media(max-width : 1200px)': {
                                            fontSize: '24px',
                                            '@media(max-width : 600px)': {
                                                fontSize: '20px'
                                            }
                                        }
                                    }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5">
                                        {item.title}
                                    </Typography>
                                    <Text text={item.text} />
                                </Box>
                            </Grid>
                        ))}
                        </Grid>
                    </Box>
               


            </Box>
        </>
    );
}

export default Sdkfeaturesarch;
