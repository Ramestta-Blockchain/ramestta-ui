'use client'
import { usePathname } from "next/navigation"; // Use usePathname for extracting slug
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Blog_List from "@/data/blogList";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import WestIcon from "@mui/icons-material/West";
import linkedin from '../../../icons/rama/linkedin.svg';
import twitter from "../../../icons/rama/twitter.svg";
import facebook from "../../../icons/rama/facebook.svg";
import Footer from "@/ui/shared/footer";
import Header from "@/ui/shared/Header";

const Social_media = [
    {
        id: 1,
        href: "https://x.com/Ramestta",
        img: twitter,
        target: "_blank",
    },
    {
        id: 2,
        href: "https://www.facebook.com/Ramestta",
        img: facebook,
        target: "_blank",
    },
    {
        id: 3,
        href: "https://www.linkedin.com/company/ramestta/",
        img: linkedin,
        target: "_blank",
    },
];

const useStyles = makeStyles({
    social: {
        background: "linear-gradient(1deg, #181C1F, #2D3037)",
        borderRadius: "5rem",
        display: "inline-block",
        transition: "0.5s",
        "&:hover": {
            background: "linear-gradient(90deg, #00B2B2, #00B2B2)",
        },
    },
    imagebg: {
        width: '100%',
        height: 'auto',
        marginTop: '2rem'
    }
});

const BlogDetailsPage = () => {
    const classes = useStyles();
    const pathname = usePathname(); // Extract the pathname
    const id = pathname.split("/").pop(); // Extract the last segment of the path

    const blog = Blog_List.find((b) => b.id.toString() === id);

    if (!blog) {
        return (
            <Typography color="error" textAlign="center">
                Blog not found!
            </Typography>
        );
    }

    return (

        <Box sx={{
            margin: '4rem',
            background: '#000',
            padding: '1.5rem',
            borderRadius: '30px',
            '@media(max-width : 1200px)': {
                margin: '2rem',
                '@media(max-width : 600px)': {
                    margin: '1rem',
                    padding: '0.5rem',
                }
            }
        }}>
            <Header />
            <Box
                sx={{
                    padding: "2rem",
                    "@media(max-width: 600px)": {
                        padding: "1rem",
                    },
                }}
            >
                <Link href="/blog">
                    <Button sx={{ marginBottom: "1rem", color: "#00B2B2", '&:hover': { backgroundColor: 'transparent' } }} startIcon={<WestIcon />}>
                        Back to Blogs
                    </Button>
                </Link>

                <Typography
                    fontFamily={"Zilap Orion Personal Use"}
                    color={"#00B2B2"}
                    variant="h5"
                    marginBottom="1rem"
                    sx={{
                        '@media(max-width : 600px)': {
                            fontSize: '18px',
                            textAlign: 'center'
                        }
                    }}
                >
                    {blog.title}
                </Typography>

                <Box>
                    <Typography sx={{
                        '@media(max-width : 600px)': {
                            textAlign: 'center'
                        }
                    }} color={"#00CCCC"}>
                        Posted on {blog.date} by Ramestta
                    </Typography>

                    <Box sx={{
                        display: "flex", gap: "1rem", justifyContent: 'space-between', alignItems: 'center',

                        '@media(max-width : 600px)': {
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }

                    }}>
                        <Box sx={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                            {Social_media.map((item) => (
                                <Link
                                    key={item.id}
                                    className={classes.social}
                                    href={item.href}
                                    target={item.target}
                                >
                                    <Image
                                        src={item.img}
                                        alt="Social Icon"
                                        style={{ display: 'block', width: '50px', height: 'auto', }}
                                    />
                                </Link>
                            ))}

                        </Box>
                        <Box>
                            <Typography color={'#fff'}>Ramestta Team </Typography>
                        </Box>
                    </Box>
                </Box>

                <Image
                    src={blog.Img}
                    alt="Blog Image"
                    className={classes.imagebg}
                />

                {[blog.dt1, blog.dt2, blog.dt3, blog.dt4, blog.dt5, blog.dt6].map((dt, index) => (
                    <Typography key={index} marginTop="1rem" color={"#fff"} fontFamily={"Roboto"}>
                        {dt}
                    </Typography>
                ))}
            </Box>
            <Footer />
        </Box>

    );
};

export default BlogDetailsPage;







