import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import pi1 from '../../icons/rama/pi1.svg'
import pi2 from '../../icons/rama/pi2.svg'
import pi3 from '../../icons/rama/pi3.svg'
import pi4 from '../../icons/rama/pi4.svg'
import pi5 from '../../icons/rama/pi5.svg'
import pi6 from '../../icons/rama/pi6.svg'
import pi7 from '../../icons/rama/pi7.svg'
import green from '../../icons/rama/green.svg'
import grey from '../../icons/rama/grey.svg'
import { title } from "process";
import Image from "next/image";
import Link from "next/link";







const useStyles = makeStyles({
    tableContainer: {
        // maxHeight: 100, 
        '&::-webkit-scrollbar': {
            width: '12px',
            borderRadius: '30px',
        },
        '&::-webkit-scrollbar-track': {
            background: '#101012',
         
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#1D1D20',
            borderRadius: '30px',
            border: '3px solid #101012',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
             
        },
    },
    noData: {
        height: '50px',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        justifyItems: "center",
        backgroundColor: '#080808'
    }
})



const Transactiontable = () => {
    const classes = useStyles();


    const TableList = [
        {
            id: 1,
            text1: "ETH Transfer",
            text2: "~$0.44",
            text3: "~$0.000197",
        },
        {
            id: 2,
            text1: "NFT Transfer",
            text2: "~$1.06",
            text3: "~$0.000468",
        },
        {
            id: 3,
            text1: "ETH-ERC20 Swap",
            text2: "~$2.75",
            text3: "~$0.001217",
        },

        {
            id: 4,
            text1: "Add Liquidity",
            text2: "~$2.97",
            text3: "~$0.001310",
        },
        {
            id: 5,
            text1: "Opensea: Registry",
            text2: "~$8.29",
            text3: "~$0.003664",
        },
        

    ]






    return (

        <>
            <Box mt={5}>
                <TableContainer sx={{borderRadius:'16px',  }} component={Paper} className={classes.tableContainer}>
                    <Table sx={{ minWidth: 650, backgroundColor: '#080808', border: '1px solid #1F1F1F', borderRadius: '16px' }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: '#000', }}>
                            <TableRow>
                                <TableCell sx={{ borderBottom: '1px solid #1F1F1F', fontSize: 16, color: '#fff', padding: 1 }} >Interactions</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1F1F1F', fontSize: 16, color: '#fff', padding: 1 }} >Ethereum</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1F1F1F', fontSize: 16, color: '#fff', padding: 1 }} align="left">Ramestta</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {TableList.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ borderBottom: '1px solid #1F1F1F', backgroundColor:'#000', padding: 1, color: '#fff' }} align="left"><Typography fontFamily={'Roboto'} fontSize={14}>{item.text1}</Typography></TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #1F1F1F',backgroundColor:'#000', padding: 1, color: '#fff' }} align="left"><Typography fontFamily={'Roboto'} fontSize={14}>{item.text2}</Typography></TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #1F1F1F',backgroundColor:'#000', padding: 1, color: '#fff' }} align="left"><Typography fontFamily={'Roboto'} fontSize={14}>{item.text3}</Typography></TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>

                <Box marginTop={1}>
                <Link href={""} style={{color:'#00B2B2', textDecoration:'none',}}>More on Ramestta Gas Station</Link>
                </Box>
            </Box>
        </>

    );
}

export default Transactiontable