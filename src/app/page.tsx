"use client"
import About from './About/page'
import Services from './Services/page'
import Talent from './Talent/page'
import Banner from './component/banner'
import styles from './page.module.css'

export default function Home() {
  return (
     <> 
             <Banner />
             <About />
             <Services />
             <Talent />
     </>
  )
}
