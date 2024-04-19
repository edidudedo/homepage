import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; 
import { FaGlobe } from 'react-icons/fa';
import './Navbar.css'

import React, { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../Language/languageContext';




const Navbar = () => {
    const { language, translations, setLanguage } = useContext(LanguageContext)
    const [toggleMenu, setToggleMenu] = useState(false);

    const ref = useRef(null); 

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setToggleMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]); 

    const Menu = () =>(
        <>
        <a href = "#home"><p>{translations.navbar.home}</p></a>
        <a href = "#aboutMe"><p>{translations.navbar.aboutMe}</p></a>
        <a href = "#education"><p>{translations.navbar.education}</p></a>
        <a href = "#employment"><p>{translations.navbar.employment}</p></a>
        <a href = "#achievements"><p>{translations.navbar.achievements}</p></a>
        <a href = "#research"><p>{translations.navbar.research}</p></a>
        <a href = "#projects"><p>{translations.navbar.projects}</p></a>
        <a href = "#collaboration"><p>{translations.navbar.collab}</p></a>
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
        <div className = "navbar" id = "navbar" >
            <div className = "navbar-links"> 
                <div className = "navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className = "navbar-sign" ref = {ref}>
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