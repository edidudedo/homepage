import React from 'react'
import './Collab.css'
import { Maze } from '../../Assets/Collab'




const Collabs = () => {
    const CollabList = [
        {imgSrc : Maze, imgLink : "https://github.com/hiiragi589/vr_work_2022?tab=readme-ov-file",  name : "脱出迷路", year : "2022", desc  : "A 1v1 VR game between two players. One player plays the role of the Game Master, controlling the maze and its dynamics through a computer interface. The opposing player, immersed in a virtual reality environment, takes on the role of a player. The objective of the player is to escape the labyrinth by collecting keys and various items within the time limit, all while avoiding the traps set by the Game Master and evading monsters that lurk within. Credit to 西 滉平, 年藤 悠歩, 佐⼭ 幸翼, "},
    ]
    return(
        <div className = "collabs section__padding" id ="collaboration">
            <div className = "collabs-content">
                <h1 className = "about-title">
                    Collaboration
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