import React from 'react'
import './Projects.css'
import { Homepage, ToDoList, Calculator } from '../../Assets/Projects'
import { useContext } from 'react';
import { LanguageContext } from '../../Components/Language/languageContext';



const Projects = () => {
    const { translations } = useContext(LanguageContext);
    const ProjectList = [
        {imgSrc : Homepage, imgLink : "https://edidudedo.github.io/homepage/",  name : "Homepage", year : "2024", desc  : translations.project.hp_desc},
        {imgSrc : ToDoList, imgLink : "https://www.youtube.com/watch?v=Z2Zp9fPNdrY",  name : "To-Do List Android App", year : "2024", desc  : translations.project.todo_desc},
        {imgSrc : Calculator, imgLink : "https://edidudedo.github.io/Calculator/",  name : "Calculator Web Service", year : "2023", desc  : translations.project.calculator_desc},
    ]
    return(
        <div className = "projects section__padding" id ="projects">
            <div className = "projects-content">
                <h1 className = "about-title">
                    {translations.project.title}
                </h1>
                <div class="projects-container">
                    {ProjectList.map(item => (
                        <div class="project">
                            <a href={item.imgLink} target="_blank">
                                <img src={item.imgSrc} alt="Project Description" />
                                <div>
                                    <div class="project-description">
                                        <span class="project-item-label">{translations.project.key.name}</span>
                                        <span class="project-item-separator">:</span>
                                        <span class="project-item-value">{item.name}</span>
                                    </div>
                                    <div class="project-description">
                                        <span class="project-item-label">{translations.project.key.year}</span>
                                        <span class="project-item-separator">:</span>
                                        <span class="project-item-value">{item.year}</span>
                                    </div>
                                    <div class="project-description">
                                        <span class="project-item-label">{translations.project.key.desc}</span>
                                        <span class="project-item-separator">:</span>
                                        <div>{item.desc}</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects