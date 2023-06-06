"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import Navbar from "./component/header";
import TopBar from "./component/topbar";
import Footer from "./component/footer";
import {  ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import ScrollToTopButton from "./component/scrollTopButton";
import Head from "next/head";

// const inter = Inter({ subsets: ['Outfit'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  
    <html lang="en">
      
      <body> 
        <ChakraProvider>
      <ColorModeProvider
        options={{
         
          useSystemColorMode: false,
        }}
      >
        <Providers>
          <TopBar />
          <Navbar />
          {children}
           <ScrollToTopButton />
          <Footer />

        </Providers>
        </ColorModeProvider>
        
    </ChakraProvider>
     
      </body>
    </html>
  );
}
