import { Typography, } from "@mui/material";



 
interface Props {
    text: string;
}

const Text = ({ text }: Props) => {

    return (
        <>
           <Typography color={'#fff'} fontFamily={'roboto'}>{text}</Typography>
        </>
    )
}

export default Text;