
import { Box, Typography, styled } from "@mui/material";
import Header from "../shared/Header";
import Footer from "../shared/footer";
import Builddeveloper from "../overview/builddeveloper";
import Explore from "../overview/explore";
import Aboutbnr from "./aboutbnr";
 














const Aboutcmp = () => {
    return (

        <>
            <Box sx={{
                margin:'4rem',
                background:'#000',
                padding:'1.5rem',
                borderRadius:'30px',
                '@media(max-width : 1200px)':{
                    margin:'2rem',
                    '@media(max-width : 600px)':{
                    margin:'1rem',
                    padding:'0.5rem',
                }
                }
            }}>
                <Header />
                <Aboutbnr />
                <Explore text={"Become a contributor"} text2={""} btn1={"Contribute"} btn2={"Open Positions"} ref1={"/contact"} ref2={"/careers"} para={"Or see open positions for core contributors"} marginTop={"5rem"} target1={"_self"} target2={"_self"}/>
                <Footer />
            </Box>
        </>

    );
}


export default Aboutcmp