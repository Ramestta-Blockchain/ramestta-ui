
import { ColorModeContext } from '@/context';
import { Box, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useContext } from 'react';

const useStyles = makeStyles({
    mainDiv: {
         marginTop:'4rem',
    },




});




const ComingSoon = () => {
    const classes = useStyles();
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>

            <Box className={classes.mainDiv}>
                <Box
                    sx={{
                        backgroundColor: '#15161A',
                        border: `1px solid #00b2b261`,
                        display: 'flex',
                        justifyContent: 'center',
                        height: '480px',
                        alignItems: 'center',
                        borderRadius: '12px',
                        '@media(max-width : 600px)':{
                            height: '150px',
                        }
                    }}
                >
                    <Typography color={'#00B2B2'} variant='h4'>Coming Soon</Typography>

            </Box>
            </Box>

        </>
    )
}

export default ComingSoon