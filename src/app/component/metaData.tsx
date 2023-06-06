"use client";
import React from 'react'
import Helmet from "react-helmet";
interface TitleProps {
    title: string;
  
  }
const Metadata:React.FC<TitleProps> = ({title}) => {
    
      
  return (
    <Helmet> <title>{title}</title></Helmet>
  )
}

export default Metadata