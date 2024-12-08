
import { Box} from "@mui/material";
import Header from "../shared/Header";
import Footer from "../shared/footer";
import Blogserv from "./blogserv";
 
 
 
 
 














const Blogcmp = () => {
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
                <Blogserv />
                <Footer />
            </Box>
        </>

    );
}


export default Blogcmp