import { Box, styled, Typography, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";



interface Props {
    text: string;
}

const Heading = ({ text }: Props) => {

    return (
        <>
            <Typography sx={{
                background: "linear-gradient(185deg, #1CA7FB, #17FCD7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                '@media(max-width : 900px)': {
                    fontSize: 24,
                }
            }} color={'#fff'} variant="h4" fontFamily={'Zen Dots'}>{text}</Typography>
        </>
    )
}

export default Heading;