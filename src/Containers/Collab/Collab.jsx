import React from 'react'
import './Collab.css'
import { Maze, ImageCropper, Hackathon, IVRC } from '../../Assets/Collab'
import { useContext } from 'react';
import { LanguageContext } from '../../Components/Language/languageContext';

const Collabs = () => {
    const { translations } = useContext(LanguageContext);
    const handleLinkClick = (e, imgLink) => {
        if (!imgLink) {
          e.preventDefault();
          alert('The code is not published yet.');
        }
      };
    const CollabList = [
        {imgSrc : IVRC, imgLink : "https://youtu.be/v_F31aNTskI",  name : "色彩の旅人", year : "2024", desc  : translations.collab.ivrc},
        {imgSrc : Hackathon, imgLink : "https://github.com/hiiragi589/hackathon2024April",  name : "SmartSplitter", year : "2024", desc  : translations.collab.hackathon},
        {imgSrc : ImageCropper, imgLink : "",  name : "Automatic Image Cropper", year : "2023", desc  : translations.collab.image_desc},
        {imgSrc : Maze, imgLink : "https://github.com/hiiragi589/vr_work_2022?tab=readme-ov-file",  name : "脱出迷路", year : "2022", desc  : translations.collab.vr_desc},
    
    ]
    return(
        <div className = "collabs section__padding" id ="collaboration">
            <div className = "collabs-content">
                <h1 className = "about-title">
                    {translations.collab.title}
                </h1>
                <div class="collabs-container">
                    {CollabList.map(item => (
                        <div class="collab">
                            <a href={item.imgLink} target="_blank" onClick={(e) => handleLinkClick(e, item.imgLink)}>
                                <img src={item.imgSrc} alt="collab Description" />
                                <div>
                                    <div class="collab-description">
                                        <span class="collab-item-label">{translations.collab.key.name}</span>
                                        <span class="collab-item-separator">:</span>
                                        <span class="collab-item-value">{item.name}</span>
                                    </div>
                                    <div class="collab-description">
                                        <span class="collab-item-label">{translations.collab.key.year}</span>
                                        <span class="collab-item-separator">:</span>
                                        <span class="collab-item-value">{item.year}</span>
                                    </div>
                                    <div class="collab-description">
                                        <span class="collab-item-label">{translations.collab.key.desc}</span>
                                        <span class="collab-item-separator">:</span>
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

export default Collabs