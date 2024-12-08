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

        },
        '&::-webkit-scrollbar-track': {
            background: '#101012',

        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#1D1D20',
            borderRadius: '10px',
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



const Transactionstable = () => {
    const classes = useStyles();


    const TableList = [
        {
            id: 1,
            text1: "0xaa56cc28f30136a63473c789aec91e751628fd357c868f4151478d3e2b5f75c7",
            text2: "Launchpad Sale",
            href:'',
        },
        {
            id: 2,
            text1: "0x505cc36275a61fab4c7b0f997fd0439255354a7fa6f29a3d3799aae32be7640b",
            text2: "Private Sale",
            href:'',
        },
       


    ]






    return (

        <>
            <Box mt={5}>

                 

               <Box mt={4}>
               <Typography sx={{
                    '@media(max-width : 600px)': {
                        fontSize: '16px',
                        textAlign: 'center'
                    }
                }} mb={1} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h6">
                  Transactions
                </Typography>
                <TableContainer sx={{ borderRadius: '16px', }} component={Paper} className={classes.tableContainer}>
                    <Table sx={{ minWidth: 650, backgroundColor: '#080808', border: '1px solid #1F1F1F', borderRadius: '16px' }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: '#000', }}>
                            <TableRow>
                                <TableCell sx={{ borderBottom: '1px solid #1F1F1F', fontSize: 16, color: '#fff', padding: 1 }} >Address</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1F1F1F', fontSize: 16, color: '#fff', padding: 1 }} >Description</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1F1F1F', fontSize: 16, color: '#fff', padding: 1 }} align="right">Explorer Link</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {TableList.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ borderBottom: '1px solid #1F1F1F', backgroundColor: '#000', padding: 1, color: '#fff' }} align="left"><Typography fontFamily={'Roboto'} fontSize={14}>{item.text1}</Typography></TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #1F1F1F', backgroundColor: '#000', padding: 1, color: '#fff' }} align="left"><Typography fontFamily={'Roboto'} fontSize={14}>{item.text2}</Typography></TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #1F1F1F', backgroundColor: '#000', padding: 1, color: '#fff' }} align="right"><Link href={item.href} target="_blank" style={{color:'#00B2B2'}} >Etherscan</Link></TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
               </Box>


            </Box>
        </>

    );
}

export default Transactionstable