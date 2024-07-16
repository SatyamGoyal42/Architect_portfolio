
import React from 'react'
import './About.css'
import AboutHero from '../../components/AboutPage/Hero/AboutHero'
import UpperMid from '../../components/AboutPage/Uppermid/UpperMid'
import Lowermid from '../../components/AboutPage/Lowermid/Lowermid'
import Signature from '../../components/AboutPage/Signature/Signature'
 const About = () => {
   return (
     <div className='about'>
       <AboutHero/>
       <UpperMid/>
       <Lowermid/>
       <Signature/>
     </div>
   )
 }
 
 export default About
 