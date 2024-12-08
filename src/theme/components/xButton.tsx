import { Box, styled, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const StyledLink = styled(Link)(({ theme }) => ({
    background: 'linear-gradient(90deg, #17FAD8, #1CA8FA)',
    color:'#fff',
    display: 'inline-flex',
    fontFamily:'Zen Dots',
    alignItems: 'center',
    gap: '1rem',
    textDecoration: 'none',
    padding: '10px 30px !important',
    borderRadius: '30px !important',
    transition: '0.5s !important',
    '&:hover': {
        background: 'linear-gradient(90deg, #17FAD8, #1CA8FA)',
        boxShadow:'0px 0px 12px 0px #1CA8FA'
    },
}));

interface Props {
    text: string;
    xLink:string;
}

const XButton = ({ text, xLink }: Props) => {

    return (
        <>
            <StyledLink href={xLink}>
                <Box m={0} component={'p'}>{text}</Box>
            </StyledLink>
        </>
    )
}

export default XButton;