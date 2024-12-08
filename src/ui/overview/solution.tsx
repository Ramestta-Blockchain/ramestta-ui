
import Text from "@/theme/components/text";
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import solution from '../../icons/rama/solution.svg'
import check from '../../icons/rama/check.svg'
import { title } from "process";



const useStyles = makeStyles({

  bnrimg: {
    width: '300px',
    height: 'auto',
    '@media(max-width : 600px)': {
      width: '100%'
    }
  },
  check: {
    display: 'flex',
    gap: '10px',
    padding:'10px 0px',
    alignItems: 'center',
    '@media(max-width : 600px)': {
      display: 'block',
      textAlign: 'center',
     
    }
  }


});

const Sol_cont=[
  {
    id:1,
    title:"One-click deployment of preset blockchain networks"
  },
  {
    id:2,
    title:"Growing set of modules for developing custom networks"
  },
  {
    id:3,
    title:"Interoperability protocol for exchanging arbitrary messages with EVM and other blockchain networks"
  },
  {
    id:4,
    title:"Modular and optional “security as a service”"
  },
  {
    id:5,
    title:"Adaptor modules for enabling interoperability for existing blockchain networks"
  },
]


const Solution = () => {
  const classes = useStyles();




  return (
    <Box>
      <Box sx={{
        textAlign: 'center', marginTop: '5rem', padding: '0rem 4rem',
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
          Solution
        </Typography>
        <Text text={"Ramestta (RAMA) - a protocol and a framework for building and connecting EVM-compatible blockchain networks."} />
      </Box>

      <Box sx={{
        marginTop: '5rem',
        padding:'0rem 5rem',
        '@media(max-width : 600px)':{
          padding:'0rem 1rem',
          textAlign:'center'
        }
      }}>
        <Grid container spacing={4} alignItems={'center'}>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box>
              <Image src={solution} alt={""} style={{ width: '100%', height: 'auto' }} />
            </Box>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Box>
              {Sol_cont.map((item, index)=>(
                <Box key={index} className={classes.check}>
                <Image src={check} alt={""} width={50} />
                <Text text={item.title} />
              </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Solution;
