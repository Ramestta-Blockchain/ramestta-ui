import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import fees from '../../icons/rama/fees.svg'
import staking from '../../icons/rama/staking.svg'
import Text from "@/theme/components/text";


const useStyles = makeStyles({




});

const Utility = () => {
    const classes = useStyles();
    return (
        <>
            <Box>

                <Box sx={{
                    marginTop:'4rem'
                }}>
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Box sx={{
                            background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                            borderRadius: '30px',
                            padding: '1px'
                        }}>
                            <Box sx={{
                                background: 'linear-gradient(180deg, #000, #000)',
                                padding: '1rem',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                                overflow: 'hidden',
                                borderRadius: '29px',
                            }}>
                                <Box sx={{
                                    textAlign: 'end'
                                }}>
                                    <Image src={fees} alt="" style={{ width: 40, }} />
                                </Box>
                                <Box>
                                    <Typography fontFamily={'Roboto'} color={'#00B2B2'}>Fees</Typography>
                                    <Text text={"The RAMA Coin is used to pay fees for transactions taking place on upcoming Dapps running on Ramestta"}/>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Box sx={{
                            background: 'linear-gradient(45deg, #1ca7fb59, #17fcd757)',
                            borderRadius: '30px',
                            padding: '1px'
                        }}>
                            <Box sx={{
                                background: 'linear-gradient(180deg, #000, #000)',
                                padding: '1rem',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderImage: 'linear-gradient(45deg, transparent, transparent) 1',
                                overflow: 'hidden',
                                borderRadius: '29px',
                            }}>
                                <Box sx={{
                                    textAlign: 'end'
                                }}>
                                    <Image src={staking} alt="" style={{ width: 40, }} />
                                </Box>
                                <Box>
                                    <Typography fontFamily={'Roboto'} color={'#00B2B2'}>Staking</Typography>
                                    <Text text={"Validators and delegators secure the network by staking their Ramestta in the staking contracts, which are used to achieve consensus and ensure the security of the network."}/>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Box sx={{
                            '@media(max-width : 600px)':{
                                textAlign:'center',
                            }
                        }}>
                            <Typography variant="h6" color={'#00B2B2'} fontFamily={'Zilap Orion Personal Use'}>Utility of RAMA Coin</Typography>
                            <Text text={"The RAMA Coin serves dual purposes: securing the network via staking and being used for the payment of transaction fees."}/>
                        </Box>
                    </Grid>
                </Grid>
                </Box>
            </Box>
        </>
    );
}

export default Utility;
