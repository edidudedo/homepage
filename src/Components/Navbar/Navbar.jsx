import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; 
import { FaGlobe } from 'react-icons/fa';
import './Navbar.css'

import React, { useContext } from 'react';
import { LanguageContext } from '../Language/languageContext';




const Navbar = () => {
    const { language, translations, setLanguage } = useContext(LanguageContext)
    const [toggleMenu, setToggleMenu] = useState(false);

    const Menu = () =>(
        <>
        <p><a href = "#home">{translations.navbar.home}</a></p>
        <p><a href = "#aboutMe">{translations.navbar.aboutMe}</a></p>
        <p><a href = "#education">{translations.navbar.education}</a></p>
        <p><a href = "#employment">{translations.navbar.employment}</a></p>
        <p><a href = "#achievements">{translations.navbar.achievements}</a></p>
        <p><a href = "#research">{translations.navbar.research}</a></p>
        <p><a href = "#projects">{translations.navbar.projects}</a></p>
        <p><a href = "#collaboration">{translations.navbar.collab}</a></p>
        </>
    )
    
    const LanguageMenu = () => (
        <>
        <button onClick={() => {
            setToggleMenu(false)
            setLanguage("en")
        }}>English</button>
        <button onClick={() => {
            setToggleMenu(false)
            setLanguage("ja")
        }}>Japanese</button>
        <button onClick={() => {
            setToggleMenu(false)
            setLanguage("id")
        }}>Indonesian</button>
      </>
    )
    return(
        <div className = "navbar" id = "navbar">
            <div className = "navbar-links"> 
                <div className = "navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className = "navbar-sign">
                <a onClick ={() => setToggleMenu(!toggleMenu)}>
                    <FaGlobe color = "#fff" size = {21}  />
                    <p>{language}</p>
                </a>
                {toggleMenu && (
                    <div className = "navbar-menu_container scale-up-center">
                        <div className = "navbar-menu_container-links">
                            <LanguageMenu />
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}

export default Navbar