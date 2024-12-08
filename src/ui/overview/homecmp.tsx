
import { Box, Typography, styled } from "@mui/material";
import Header from "../shared/Header";
import Bnr from "./bnr";
import Award from "./award";
import Services from "./services";
import Slider from "./slider";
import Faqs from "./faqs";
import Footer from "../shared/footer";
import Builddeveloper from "./builddeveloper";
import Solution from "././solution";
import Explore from "./explore";
import About from "./about";
import Learnmore from "./learnmore";














const Homecmp = () => {
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
                <Bnr />
                <Award />
                <Builddeveloper/>
                <Solution />
                <Explore text={"Explore Ramestta RAMA"} text2={" Technology"} btn1={"Get started"} btn2={"Papers"} ref1={"https://docs.ramestta.com/"} ref2={"/paper"} para={"Or read the whitepaper for a deep dive"} marginTop={"5rem"} target1={"_blank"} target2={"_self"} />
                <Services />
                <Explore text={"Explore Ramestta RAMA"} text2={" Technology"} btn1={"Get started"} btn2={"Papers"} ref1={"https://docs.ramestta.com/"} ref2={"/paper"} para={"Or read the whitepaper for a deep dive"} marginTop={"5rem"} target1={"_blank"} target2={"_self"} />
                <About />
                <Slider />
                <Learnmore />
                <Faqs />
                 
               
                
                 
               
                <Footer />
            </Box>
        </>

    );
}


export default Homecmp