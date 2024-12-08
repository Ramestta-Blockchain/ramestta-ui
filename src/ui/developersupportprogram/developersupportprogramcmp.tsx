
import { Box, Typography, styled } from "@mui/material";
import Header from "../shared/Header";
import Footer from "../shared/footer";
import Developersupportprogrambnr from "./developersupportprogrambnr";
import Applynow from "./applynow";
import Explore from "../overview/explore";


















const Developersupportprogramcmp = () => {
    return (

        <>
            <Box sx={{
                margin: '4rem',
                background: '#000',
                padding: '1.5rem',
                borderRadius: '30px',
                '@media(max-width : 1200px)': {
                    margin: '2rem',
                    '@media(max-width : 600px)': {
                        margin: '1rem',
                        padding: '0.5rem',
                    }
                }
            }}>
                <Header />
                <Developersupportprogrambnr />
                <Applynow title={"Apply for Ramestta Developer Support Program"} text={"Leverage Ramestta's experience and incredible community"} btn={"Apply Now"} href={"/support"}/>
                <Explore text={"Learn more about us"} text2={""} btn1={"Learn More"} btn2={"Open Positions"} ref1={"/about"} ref2={"/careers"} para={"Or see currently open positions and join us!"} marginTop={"3rem"} target1={"_self"} target2={"_self"}/>
                <Footer />
            </Box>
        </>

    );
}


export default Developersupportprogramcmp