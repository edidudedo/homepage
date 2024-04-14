import React from 'react'
import './Projects.css'
import { Homepage, ToDoList, Calculator } from '../../Assets/Projects'




const Projects = () => {
    const ProjectList = [
        {imgSrc : Homepage, imgLink : "https://edidudedo.github.io/homepage/",  name : "Homepage", year : "2024", desc  : "My own homepage, used as digital portofolio similar to LinkedIn. In this web, I will be sharing my achievements and various projects that I made with my own style."},
        {imgSrc : ToDoList, imgLink : "https://www.youtube.com/watch?v=Z2Zp9fPNdrY",  name : "To-Do List Android App", year : "2024", desc  : "An android app to insert your to-do-list. Users can choose their own date and activity and it will appear on the app. User can also delete the activity once it is over. This project was made as my first step towards app development"},
        {imgSrc : Calculator, imgLink : "https://edidudedo.github.io/Calculator/",  name : "Calculator Web Service", year : "2023", desc  : "A simple calculator web service where user can do simple calculation. This project was made as my first step towards web development."},
    ]
    return(
        <div className = "projects section__padding" id ="projects">
            <div className = "projects-content">
                <h1 className = "about-title">
                    My Little Projects
                </h1>
                <div class="projects-container">
                    {ProjectList.map(item => (
                        <div class="project">
                            <a href={item.imgLink} target="_blank">
                                <img src={item.imgSrc} alt="Project Description" />
                                <div class="project-description">
                                    <span class="project-item-label">Name</span>
                                    <span class="project-item-separator">:</span>
                                    <span class="project-item-value">{item.name}</span>
                                </div>
                                <div class="project-description">
                                    <span class="project-item-label">Year</span>
                                    <span class="project-item-separator">:</span>
                                    <span class="project-item-value">{item.year}</span>
                                </div>
                                <div class="project-description">
                                    <span class="project-item-label">Desc</span>
                                    <span class="project-item-separator">:</span>
                                    <div>{item.desc}</div>
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