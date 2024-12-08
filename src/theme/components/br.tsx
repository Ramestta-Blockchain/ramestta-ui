import { Box } from "@mui/material";


 
 

const Br = () => {

    return (
        <>
           <Box component={'br'} sx={{'@media(max-width : 900px)':{
                                    display:'none'
                                }}}/>
        </>
    )
}

export default Br;