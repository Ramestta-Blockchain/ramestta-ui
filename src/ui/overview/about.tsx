import { Box, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import whitelogo from '../../icons/rama/whitelogo.svg'
import Text from "@/theme/components/text";


const useStyles = makeStyles({


imgabout:{
  width:200, 
  height:'auto',
  '@media(max-width : 600px)':{
    width:100,
  }
}


});


const About = () => {
  const classes = useStyles();



  return (
    <Box sx={{
      textAlign: 'center',
      margin: '5rem 0rem 0rem 0rem',
      padding:'0rem 16rem',
      '@media(max-width : 1200px)':{
        padding:'0rem 12rem',
        '@media(max-width : 900px)':{
        padding:'0rem 6rem',
        '@media(max-width : 600px)':{
          padding:'0rem 0rem',
          margin: '3rem 0rem 0rem 0rem',
        }
      }
      }
    }}>
      <Image src={whitelogo} alt={""} className={classes.imgabout}/>
      <Typography sx={{
        '@media(max-width : 1200px)': {
          fontSize: '36px',
          '@media(max-width : 600px)': {
            fontSize: '20px'
          }
        }
      }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} lineHeight={1.3} variant="h3">
        About us
      </Typography>
      <Text text={"Ramestta (RAMA) is an open source project built by decentralized team of contributors from all over the world"} />
    </Box>
  );
};

export default About;
