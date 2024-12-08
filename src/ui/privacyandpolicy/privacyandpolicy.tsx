import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import fees from '../../icons/rama/fees.svg'
import Text from "@/theme/components/text";
import check from '../../icons/rama/check.svg'
import Link from "next/link";





const useStyles = makeStyles({
    linklist: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#141619',
        padding: '10px 1.5rem 10px 10px',
        borderRadius: '50px'
    },
    check: {
        display: 'flex',
        gap: '10px',
        padding: '10px 0px',
        alignItems: 'center',
        '@media(max-width : 600px)': {
            display: 'block',
            textAlign: 'center',

        }
    }



});

 

const Privacyandpolicy = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{ margin: '4rem 0rem' }}>
                <Box sx={{
                    textAlign: 'center'
                }}>
                    <Typography sx={{
                        '@media(max-width : 1200px)': {
                            fontSize: '36px',
                            '@media(max-width : 600px)': {
                                fontSize: '20px'
                            }
                        }
                    }} fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} lineHeight={1.3} variant="h3">
                        Privacy and Policy
                    </Typography>
                    <Text text={"This Privacy Policy describes the policies and procedures of DApps Platform, Ramestta Blockchain Technolgy (“we,” “our,” or “us”) pertaining to the collection, use, and disclosure of your information on www.trustwallet.com and related mobile applications and products we offer (the “Services” or “Ramestta Wallet”)."} />
                </Box>

                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}} >Overview</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>Your privacy is important to us. At Ramestta Wallet, we follow a few fundamental principles: We don’t ask you for personally identifiable information (defined below). That being said, your contact information, such as your phone number, social media handle, or email address (depending on how you contact us), may be collected when you communicate with us or if you report a bug or other error related to Ramestta Wallet. We don’t share your information with third parties except to deliver you our Services and products, comply with the law, make Ramestta Wallet better, protect our rights, or effectuate a business transfer. We’re not a huge, faceless corporation. We’re just developers trying to deliver an incredible product. If you have any questions or concerns about this policy, please reach out to us at <Box component={'span'}><Link href={""} style={{textDecoration:'none', color:'#00B2B2'}}>[email protected]</Link></Box> HOW YOU ACCEPT THIS POLICY By using Ramestta Wallet, including downloading one of our mobile applications, visiting our website, you agree to the use, disclosure, and procedures outlined in this Privacy Policy.</Typography>
                </Box>

                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>What personal information do we collect from our users?</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>The information we collect from you falls into two categories: (i) personally identifiable information (i.e., data that could potentially identify you as an individual) (“Personal Information”), and (ii) non-personally identifiable information (i.e., information that cannot be used to identify who you are) (“Non-Personal Information”). This Privacy Policy covers both categories and will tell you how we might collect and use each type. We do our best not to collect any Personal Information from Ramestta Wallet users. That being said, when using our Services, we do collect PUBlIC wallet addresses that you generate through Ramestta Wallet. Further, we may collect some Personal Information from you when you communicate with us, including your contact information, such as your phone number, social media handle, or email address (depending on how you reach out). Like other online services, we also collect a variety of Non-Personal Information, including: Information you create through the Ramestta Wallet’s website or mobile applications, including public wallet addresses. Various analytics data, such as: (i) the IP address of the computer you use to access Ramestta Wallet; (ii) the type of browser software you are using; (iii) the operating system you are using; (iv) the date and time you access or use Trust Wallet; (v) the website address, if any, that linked you to Ramestta Wallet; (vi) the website address, if any, you leave our website and travel to; and (vii) other non-personally identifiable traffic data.</Typography>
                </Box>

                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>How we collect information</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>When You Contact Us. We may collect certain information if you choose to contact us, if you use our Services or if you report a bug or other error with Ramestta Wallet. This may include contact information such as your name, email address, phone number, and public wallet address. We, or companies that provide services on our behalf, may also collect certain Non-Personal Information from you, such as your locally hosted public wallet (a “Wallet”) addresses.</Typography>
                </Box>

                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>Information We Automatically Collect</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>Users who visit our website or use our application may have their device’s IP address logged for the purpose of generating anonymous statistics or troubleshooting the performance of our web servers. Your IP address will not be used to track or identify you, but may be used to determine your geographic location in order to determine which of our services you are presented with. Users of our website or mobile applications will receive an anonymous unique device id (“UDID”) for the purpose of identifying the device to Ramestta Wallet servers. This UDID will not be tied to users’ identities, but will be used for debugging purposes and to differentiate devices when users access our Services using multiple devices.</Typography>
                </Box>

                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>Third Party Services</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>Certain features on Ramestta Wallet rely on various third-party products and services (collectively “Third Party Services”), such as the Ethereum network, Google Analytics, Apple’s application platform, Coinbase, Changelly, Fabric, and Shapeshift. These services may collect certain Personal Information, such as your public Wallet addresses. Ramestta Wallet uses Google Analytics, a web analytics service provided by Google, Inc. (“Google”). Google uses cookies to help the website analyze how users use our website. The information generated by the cookie about your use of our website (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google’s behalf. Google will not associate your IP address with any other data held by Google. You may choose to accept the cookies by selecting the appropriate settings on your browser if you do this you may not be able to use the full functionality of our website. By using our website, you consent to the processing of data about you by Google in the manner and for the purposes set out above. Please note that your use of these Third Party Services is governed by their respective Terms of Service and Privacy Policies. We use and disclose any collected information in accordance with our own Privacy Policy.</Typography>
                </Box>

                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>How we use the information we gather</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>We primarily use the limited information we collect to enhance Ramestta Wallet. Except if we sell all or a portion of our business, or as otherwise described below, we do not rent, trade, or sell your Personal Information. Use of Information to Provide Ramestta Wallet to You Some ways we may use your Personal Information are to: Contact you when necessary; Respond to your comments, questions, or issues related to bugs or errors with Ramestta Wallet; Provide you with additional information; Send you information and marketing materials about services and products available through Ramestta Wallet, using push notifications or other means; Train our team members; or Other internal business purposes. Aggregated Personal Data and Non-Personal Information We may share or disclose aggregated Personal Data or Non-Personal Information with service providers or with other persons we conduct business with, including but not limited potential third-parties for the purpose of showcasing the performance of the company. These service providers and other persons may also share with us aggregated Non-Personal Information that they have independently developed or acquired. Additionally, we may combine aggregate information from the pixel tags, web beacons, and cookies with similar data we collect from other visitors to help us improve our Services. When doing so, we do our best to ensure that the any aggregated information cannot be linked back to you.</Typography>
                </Box>


                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>Agents or Third Party Partners</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>We may provide your Personal Information to our employees, contractors, agents, service providers, and designees (“Agents”) to enable them to perform certain services for us exclusively, including: Improvement of website-related services and features; and Perform maintenance services. Business Transfers We may choose to buy or sell assets. In these types of transactions, customer information is typically one of the business assets that would be transferred. Also, if we (or our assets) are acquired, or if we go out of business, enter bankruptcy, or go through some other change of control, your Personal Information could be one of the assets transferred to or acquired by a third party. By accepting this Privacy Policy, as outlined above, you consent to any such transfer.</Typography>
                </Box>

                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>Protection of Us and Others</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>We reserve the right to access, read, preserve, and disclose any information that we reasonably believe is necessary to: comply with the law or a court order; cooperate with law enforcement; enforce or apply our Terms of Use and other agreements; or protect the rights, property, or safety of Ramestta Wallet, our employees, our users, or others.</Typography>
                </Box>

                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>What personal information can I access or change?</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>You can request access to the information we have collected from you. You can do this by contacting us at <Box component={'span'}><Link href={""} style={{textDecoration:'none', color:'#00B2B2'}}>[email protected]</Link></Box> We will make sure to provide you with a copy of the data we process about you. To comply with your request, we may ask you to verify your identity. We will fulfill your request by sending your copy electronically. For any subsequent access request, we may charge you with an administrative fee. If you believe that the information we have collected is incorrect, you are welcome to contact us so we can update it and keep your data accurate. Any data that is no longer needed for purposes specified in the “How We Use the Information We Gather” section will be deleted after ninety (90) days. Wallet addresses created through the Ramestta Wallet application cannot be deleted from the Ethereum blockchain, therefore we are unable to delete this personal information. If at any point you wish for Ramestta Wallet to delete information about you, you may contact us at <Box component={'span'}><Link href={""} style={{textDecoration:'none', color:'#00B2B2'}}>[email protected]</Link></Box></Typography>
                </Box>

                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>Data retention</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>If you delete your Wallet or addresses from the Ramestta Wallet Android mobile application, uninstall Ramestta Wallet mobile applications from your device, or request that your information be deleted, we still may retain some information that you have provided to us to maintain Ramestta Wallet or to comply with relevant laws.</Typography>
                </Box>

                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>Data security</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>We are committed to making sure your information is protected and have selected third-party vendors which use the Ethereum network, including Coinbase, Shapeshift, and Changelly, that help keep your Personal Information safe. Unfortunately, we do not control these third parties and therefore cannot guarantee complete security. We employ several physical and electronic safeguards to keep your information safe, including encrypted user passwords, two factor verification and authentication on passwords where possible, and securing all connections with industry standard transport layer security. Even with all these precautions, we cannot fully guarantee against the access, disclosure, alteration, or deletion of data through events, including but not limited to hardware or software failure or unauthorized use. Any information that you provide to us is done so entirely at your own risk.</Typography>
                </Box>
                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>Children</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>We are especially sensitive about children’s information. Our Services are not targeted towards children, and we don’t knowingly collect information from children under the age of 13. If you are a parent or legal guardian of a minor child, we will treat any information that you provide us while using Ramestta Wallet on behalf of your minor child as Personal Information as otherwise provided in this Privacy Policy. If you have questions concerning our information practices with respect to children, or if you learn that a child under the age of 13 has used Ramestta Wallet, created a user account, or provided us with personal information, please email us at <Box component={'span'}><Link href={""} style={{textDecoration:'none', color:'#00B2B2'}}>[email protected]</Link></Box></Typography>
                </Box>
                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>Online tracking and how we respond to do not track signals</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>Online tracking is the collection of data about an individual’s Internet activity used to deliver targeted advertisements and for other purposes. Some web browsers (including Safari, Internet Explorer, Firefox, and Chrome) incorporate a “Do Not Track” (DNT) or similar feature that signals to websites that a visitor does not want to have his/her online activity and behavior tracked. If an online service elects to respond to a particular DNT signal, the service may refrain from collecting certain personal information about the browser’s user. Not all browsers offer a DNT option and there is currently no industry consensus as to what constitutes a DNT signal. For these reasons, many website operators, including Trust Wallet, do not take action to respond to DNT signals. For more information about DNT signals, visit <Box component={'span'}><Link href={""} style={{textDecoration:'none', color:'#00B2B2'}}>http://allaboutdnt.com</Link></Box>.</Typography>
                </Box>

                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>Changes and updates to privacy policy</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>We reserve the right to update and revise this privacy policy at any time. We occasionally review this Privacy Policy to make sure it complies with applicable laws and conforms to changes in our business. We may need to update this Privacy Policy, and we reserve the right to do so at any time. If we do revise this Privacy Policy, we will update the “Effective Date” at the bottom of this page so that you can tell if it has changed since your last visit and will do our best to notify you. Please review this Privacy Policy regularly to ensure that you are aware of its terms. Any use of Ramestta Wallet after an amendment to our Privacy Policy constitutes your acceptance to the revised or amended agreement.</Typography>
                </Box>
                <Box marginTop={5} sx={{'@media(max-width : 600px)':{textAlign:'center'}}}>
                    <Typography fontFamily={'Zilap Orion Personal Use'} color={'#00B2B2'} variant="h5" sx={{'@media(max-width : 600px)':{fontSize:17}}}>International users and visitors</Typography>
                    <Typography fontFamily={'Roboto'} color={'#fff'}>Ramestta Wallet is hosted in the United States. If you are a user accessing the Services from the European Union, Asia, or any other region with laws or regulations governing personal data collection, use, and disclosure that differ from United States laws, please be advised that through your continued use of the Services, which is governed by US law, you are transferring your Personal Information to the United States and you consent to that transfer.</Typography>
                </Box>
            </Box>
        </>
    );
}

export default Privacyandpolicy;
