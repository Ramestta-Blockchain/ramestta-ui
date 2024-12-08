
import { Box, Typography, styled } from "@mui/material";
import Header from "../shared/Header";
import Footer from "../shared/footer";
import Technology from "./technology";
import Securechain from "./securechain";
import Explore from "../overview/explore";
import Architech from "./architech";
import Positioning from "./positioning";
import Positiontable from "./positiontable";

















const Technologycmp = () => {
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
                <Technology />
                <Securechain />
                <Explore text={"Explore Ramestta"} text2={"Technology"} btn1={"Get started"} btn2={"Papers"} ref1={"/get-started"} ref2={"/paper"} para={"Or read the whitepaper for a deep dive"} marginTop={"0rem"} target1={""} target2={""} />
                <Architech />
                <Positioning />
                <Explore text={"Get started with"} text2={"Ramestta"} btn1={"Get started"} btn2={"Whitepaper"} ref1={"/get-started"} ref2={""} para={"Or read the whitepaper to learn more about our technology"} marginTop={"2rem"} target1={""} target2={""} />
                <Footer />
            </Box>
        </>

    );
}


export default Technologycmp