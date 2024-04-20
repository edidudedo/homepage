import { useState } from 'react'
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri'; 
import { FaGlobe } from 'react-icons/fa';
import './Navbar.css'

import React, { useContext, useEffect, useRef } from 'react';
import { LanguageContext } from '../Language/languageContext';




const Navbar = () => {
    const { language, translations, setLanguage } = useContext(LanguageContext)
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleMenu2, setToggleMenu2] = useState(false);

    const ref = useRef(null); 
    const ref2 = useRef(null);

    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (ref.current && !ref.current.contains(event.target)) {
    //             setToggleMenu(false);
    //         }
    //         if (ref2.current && !ref2.current.contains(event.target)) {
    //             setToggleMenu2(false);
    //         }
    //     }

    //     document.addEventListener("mousedown", handleClickOutside);

    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [ref, ref2]); 

    useEffect(() => {
        const body = document.body;
        const toggleBodyScroll = (shouldScroll) => {
            body.style.overflow = shouldScroll ? 'auto' : 'hidden';
        };

        // Enable or disable scrolling
        toggleBodyScroll(!(toggleMenu || toggleMenu2));

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setToggleMenu(false);
            }
            if (ref2.current && !ref2.current.contains(event.target)) {
                setToggleMenu2(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            toggleBodyScroll(true); // Re-enable scrolling when the component unmounts
        };
    }, [toggleMenu, toggleMenu2, ref, ref2]); 

    const Menu = () =>(
        <>
        <a href = "#home" onClick ={() => setToggleMenu2(false)}><p>{translations.navbar.home}</p></a>
        <a href = "#aboutMe" onClick ={() => setToggleMenu2(false)}><p>{translations.navbar.aboutMe}</p></a>
        <a href = "#education" onClick ={() => setToggleMenu2(false)}><p>{translations.navbar.education}</p></a>
        <a href = "#employment" onClick ={() => setToggleMenu2(false)}><p>{translations.navbar.employment}</p></a>
        <a href = "#achievements" onClick ={() => setToggleMenu2(false)}><p>{translations.navbar.achievements}</p></a>
        <a href = "#research" onClick ={() => setToggleMenu2(false)}><p>{translations.navbar.research}</p></a>
        <a href = "#projects" onClick ={() => setToggleMenu2(false)}><p>{translations.navbar.projects}</p></a>
        <a href = "#collaboration" onClick ={() => setToggleMenu2(false)}><p>{translations.navbar.collab}</p></a>
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
            <div className={`nav-overlay ${toggleMenu || toggleMenu2 ? 'active' : ''}`}></div>
            <div className = "gpt3__navbar-menu" ref = {ref2}>
                {toggleMenu2
                  ? <RiCloseLine color = "#fff" size = {27} onClick = {() => setToggleMenu2(false)}/>
                  : <RiMenu2Line color = "#fff" size = {27} onClick = {() => setToggleMenu2(true)}/>
                }
                {toggleMenu2 && (
                    <div className = "gpt3__navbar-menu_container scale-up-center">
                        <div className = "gpt3__navbar-menu_container-links">
                            <Menu />
                        </div>
                    </div>

                )}
            </div>
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