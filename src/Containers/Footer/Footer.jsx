import React from 'react'
import './Footer.css'

import Profile3 from '../../Assets/Profile3.jpg'
import ReactLogo from '../../Assets/ReactLogo.png'
import { Blogger, Facebook, Flaticon, Github, Instagram, Linkedin, Twitter, Gmail } from '../../Assets/Footer'

import { LanguageContext } from '../../Components/Language/languageContext';
import { useContext } from 'react';

const Footer = () => {
    const { translations } = useContext(LanguageContext)
    return(
        <div className = "footer section__padding">
            <div className = "footer-links">
                <div className = "footer-links_logo">
                    <img src= {Profile3} alt = "profile3" />
                </div>
                <div className = "footer-links_div">
                    <h4>{translations.footer.contact}</h4>
                    <span>
                        <img src= {Gmail} alt = "gmail" /> 
                        eduardoiglesius101@gmail.com
                    </span>
                </div>
                <div className = "footer-links_div">
                    <h4>{translations.footer.professional}</h4>
                    <a href="https://github.com/edidudedo" target = "_blank">
                        <img src= {Github} alt = "github" /> 
                        Edidudedo
                    </a>
                    <a href="https://www.linkedin.com/in/eduardo-iglesius-918a93126/" target = "_blank">
                        <img src= {Linkedin} alt = "linked" /> 
                        Eduardo Iglesius
                    </a>
                    <a href="https://www.blogger.com/profile/08473636752480475487" target = "_blank">
                        <img src= {Blogger} alt = "blogger" /> 
                        Eduardo Iglesius
                    </a>
                </div>
                <div className = "footer-links_div">
                    <h4>{translations.footer.personal}</h4>
                    <a href="https://www.facebook.com/eduardo.iglesius/" target = "_blank">
                        <img src= {Facebook} alt = "facebook" /> 
                        eduardo.iglesius
                    </a>
                    <a href="https://www.instagram.com/eduardoiglesiuz" target = "_blank">
                        <img src= {Instagram} alt = "instagram" /> 
                        Eduardoiglesiuz
                    </a>
                    
                    <a href="https://twitter.com/eduardoiglesiuz" target = "_blank">
                        <img src= {Twitter} alt = "twitter" /> 
                        Eduardoiglesiuz
                    </a>
                </div>
                <div className = "footer-links_div">
                    <h4>{translations.footer.credits}</h4>
                    <a href="https://www.flaticon.com/" target = "_blank">
                        <img src= {Flaticon} alt = "flaticon" /> 
                        Flaticon
                    </a>
                    <a href="https://react.dev/" target = "_blank">
                        <img src= {ReactLogo} alt = "react" /> 
                        React
                    </a>
                </div>
            </div>
            <div className = "footer-copyright">
                <p>All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer