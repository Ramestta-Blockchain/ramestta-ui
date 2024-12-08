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







const useStyles = makeStyles({
    tableContainer: {
        // maxHeight: 100, 
        '&::-webkit-scrollbar': {
            width: '12px',
        },
        '&::-webkit-scrollbar-track': {
            background: '#101012',
            borderRadius: '0px',
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



const Positiontable = () => {
    const classes = useStyles();


    const TableList = [
        {
            id: 1,
            img: pi1,
            title: "Finance",
            sidechains: grey,
            sharding: grey,
            quorum: grey,
            cosmos: grey,
            polkadot: "",
            ramestta: green,
        },
        {
            id: 2,
            img: pi2,
            title: "Travel",
            sidechains: grey,
            sharding: grey,
            quorum: grey,
            cosmos: grey,
            polkadot: grey,
            ramestta: grey,
        },
        {
            id: 3,
            img: pi3,
            title: "Presentation",
            sidechains: "",
            sharding: grey,
            quorum: "",
            cosmos: "",
            polkadot: grey,
            ramestta: green,
        },
        {
            id: 4,
            img: pi4,
            title: "Startup",
            sidechains: grey,
            sharding: "",
            quorum: grey,
            cosmos: grey,
            polkadot: grey,
            ramestta: grey,
        },
        {
            id: 5,
            img: pi5,
            title: "Development",
            sidechains: "",
            sharding: grey,
            quorum: "",
            cosmos: grey,
            polkadot: grey,
            ramestta: green,
        },
        {
            id: 6,
            img: pi6,
            title: "Design",
            sidechains: grey,
            sharding: "",
            quorum: grey,
            cosmos: grey,
            polkadot: grey,
            ramestta: green,
        },
        {
            id: 7,
            img: pi7,
            title: "Product",
            sidechains: "",
            sharding: grey,
            quorum: "",
            cosmos: "",
            polkadot: "",
            ramestta: green,
        },

    ]






    return (

        <>
            <Box>
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table sx={{ minWidth: 650, backgroundColor: '#080808', border: '1px solid #000', borderRadius: '4px' }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: '#000' }}>
                            <TableRow>
                                <TableCell sx={{ borderBottom: '1px solid #000', fontSize: 16, color: '#fff', padding: 1 }} ></TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #000', fontSize: 16, color: '#fff', padding: 1 }} >Sidechains</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #000', fontSize: 16, color: '#fff', padding: 1 }} align="left">Sharding</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #000', fontSize: 16, color: '#fff', padding: 1 }} align="left">Quorum</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #000', fontSize: 16, color: '#fff', padding: 1 }} align="left">Cosmos</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #000', fontSize: 16, color: '#fff', padding: 1 }} align="left">Polkadot</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #000', fontSize: 16, color: '#fff', padding: 1 }} align="right">Ramestta</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {TableList.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ borderBottom: '1px solid #000', backgroundColor:'#000', padding: 1, color: '#fff' }} align="left">
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px'
                                        }}>
                                            <Image src={item.img} alt={""} width={20} />
                                            <Typography fontFamily={'Roboto'}>{item.title}</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #000',backgroundColor:'#000', padding: 1, color: '#fff' }} align="left"><Image src={item.sidechains} alt={""} /></TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #000',backgroundColor:'#000', padding: 1, color: '#fff' }} align="left"><Image src={item.sharding} alt={""} /></TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #000',backgroundColor:'#000', padding: 1, color: '#fff' }} align="left"><Image src={item.quorum} alt={""} /></TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #000',backgroundColor:'#000', padding: 1, color: '#fff' }} align="left"><Image src={item.cosmos} alt={""} /></TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #000',backgroundColor:'#000', padding: 1, color: '#fff' }} align="left"><Image src={item.polkadot} alt={""} /></TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #000',backgroundColor:'#000', padding: 1, color: '#fff' }} align="right"><Image src={item.ramestta} alt={""} /></TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>

    );
}

export default Positiontable