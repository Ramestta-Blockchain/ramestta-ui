"use client";

import React, {ReactNode } from "react";
import { Inter } from "next/font/google";
import { State, cookieToInitialState } from 'wagmi';
import { Providers, config } from '@/configs/providers';
import { CssBaseline, } from "@mui/material";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

const inter = Inter({ subsets: ["latin"] });

 

 

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  const initialState = cookieToInitialState(config) as State;
 

  return (
    <html lang="en">
      <head>
      <title>Build & Scale your Decentralized app on Ramestta | Build Your ...</title>
      <meta name="description" content={
        "Ramestta (RAMA) is an open-source project developed by a global community of collaborators or developers. It is an independent protocol and framework for ..."
        } />
      </head>
      <body className={inter.className}>
        <Providers initialState={initialState}>
              <CssBaseline />
              <ToastContainer theme="dark"/>
              {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
