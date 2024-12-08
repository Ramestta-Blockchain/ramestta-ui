 
import Blog_List from "@/data/blogList";
import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
 
import Link from "next/link";

const Blogserv = () => {
    return (
        <Box
            sx={{
                paddingTop: "5rem",
                "@media(max-width : 600px)": {
                    paddingTop: "1rem",
                },
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    "@media(max-width : 600px)": {
                        padding: "0rem 1rem",
                        marginTop: "2rem",
                    },
                }}
            >
                <Typography
                    sx={{
                        "@media(max-width : 1200px)": {
                            fontSize: "36px",
                            "@media(max-width : 600px)": {
                                fontSize: "20px",
                            },
                        },
                    }}
                    fontFamily={"Zilap Orion Personal Use"}
                    color={"#00B2B2"}
                    lineHeight={1.3}
                    variant="h3"
                >
                    Blogs
                </Typography>
            </Box>

            <Box marginTop={5}>
                <Grid container spacing={2} justifyContent={"center"}>
                    {Blog_List.map((item) => (
                        <Grid key={item.id} item lg={4} md={4} sm={6} xs={12}>
                            <Link
                                href={`/blog/${item.id}`} 
                                style={{ textDecoration: "none" }}
                            >
                                <Box
                                    sx={{
                                        background: "linear-gradient(45deg, #1ca7fb59, #17fcd757)",
                                        borderRadius: "30px",
                                        padding: "1px",
                                        height: "100%",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            background: "linear-gradient(180deg, #000, #000)",
                                            padding: "0.7rem 0.7rem 1.2rem 0.7rem",
                                            height: "100%",
                                            borderRadius: "29px",
                                        }}
                                    >
                                        <Box>
                                            <Image
                                                src={item.Img}
                                                alt="Blog Image"
                                                style={{ width: "100%", height: "auto" }}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                margin: "0.5rem 0rem",
                                            }}
                                        >
                                            <Typography color={"#00CCCC"}>
                                                Posted on {item.date}
                                            </Typography>
                                            <Typography
                                                fontFamily={"Roboto"}
                                                color={"#fff"}
                                                marginY={1}
                                            >
                                                {item.text}
                                            </Typography>
                                            <Typography color={"#00B2B2"}>
                                                Continue Reading
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Blogserv;
