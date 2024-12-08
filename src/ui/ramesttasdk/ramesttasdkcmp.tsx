
import { Box, Typography, styled } from "@mui/material";
import Header from "../shared/Header";
import Footer from "../shared/footer";
import Sdkbnr from "./sdkbnr";
import Sdkfeatures from "./sdkfeatures";
import Explore from "../overview/explore";
import Sdkfeaturesarch from "./sdkfeaturesarch";
 
















const Ramesttasdkcmp = () => {
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
                <Sdkbnr />
                <Sdkfeatures/>
                <Explore text={"Explore Ramestta SDK"} text2={""} btn1={"Documentation"} btn2={"Github"} ref1={"https://docs.ramestta.com/"} ref2={"https://github.com/Ramestta-Blockchain"} para={"Read the docs to learn more or start building today"} marginTop={"3rem"} target1={"_blank"} target2={"_blank"}/>
                <Sdkfeaturesarch/>
                <Explore text={"Reach out to us for"} text2={"more information"} btn1={"Documentation"} btn2={"Github"} ref1={"https://docs.ramestta.com/"} ref2={"https://github.com/Ramestta-Blockchain"} para={"Read the docs to learn more or start building today"} marginTop={"3rem"} target1={"_blank"} target2={"_blank"}/>
                <Footer />
            </Box>
        </>

    );
}


export default Ramesttasdkcmp