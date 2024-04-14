import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; 
import { FaGlobe } from 'react-icons/fa';
import './Navbar.css'




const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const Menu = () =>(
        <>
        <p><a href = "#home">Home</a></p>
        <p><a href = "#aboutMe">About Me</a></p>
        <p><a href = "#education">Education</a></p>
        <p><a href = "#employment">Employment History</a></p>
        <p><a href = "#achievements">Achievements</a></p>
        <p><a href = "#research">Research</a></p>
        <p><a href = "#projects">Projects</a></p>
        <p><a href = "#collaboration">Collab</a></p>
        </>
    )
    
    const LanguageMenu = () => (
        <>
        <button onClick={() => setToggleMenu(false)}>English</button>
        <button onClick={() => setToggleMenu(false)}>Japanese</button>
        <button onClick={() => setToggleMenu(false)}>Indonesian</button>
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
                <FaGlobe color = "#fff" size = {21} onClick ={() => setToggleMenu(!toggleMenu)} />
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