import React from 'react'
import './Collab.css'
import { Homepage } from '../../Assets/Projects'




const Collabs = () => {
    const CollabList = [
        {imgSrc : Homepage, imgLink : "https://edidudedo.github.io/homepage/",  name : "Homepage", year : "2024", desc  : "My own homepage, used as digital portofolio similar to LinkedIn. In this web, I will be sharing my achievements and various collabs that I made with my own style."},
    ]
    return(
        <div className = "collabs section__padding" id ="collaboration">
            <div className = "collabs-content">
                <h1 className = "about-title">
                    Collab
                </h1>
                <div class="collabs-container">
                    {CollabList.map(item => (
                        <div class="collab">
                            <a href={item.imgLink} target="_blank">
                                <img src={item.imgSrc} alt="collab Description" />
                                <div class="collab-description">
                                    <span class="collab-item-label">Name</span>
                                    <span class="collab-item-separator">:</span>
                                    <span class="collab-item-value">{item.name}</span>
                                </div>
                                <div class="collab-description">
                                    <span class="collab-item-label">Year</span>
                                    <span class="collab-item-separator">:</span>
                                    <span class="collab-item-value">{item.year}</span>
                                </div>
                                <div class="collab-description">
                                    <span class="collab-item-label">Desc</span>
                                    <span class="collab-item-separator">:</span>
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

export default Collabs