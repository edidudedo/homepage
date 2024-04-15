import React from 'react'
import './AboutMe.css'
import Profile2 from '../../Assets/Profile2.jpg'
import { Games, Gym, Indonesia, Hobbies, Interest, Name, Nationality, Studying, Age, Occupation, Music, Guitar, Keyboard, Language } from '../../Assets/AboutMe'
import Tag from '../../Components/Tag/Tag'

import { LanguageContext } from '../../Components/Language/languageContext'
import { useContext } from 'react'


const AboutMe = () => {
    const { translations } = useContext(LanguageContext)
    const HobbyItems = [
        {picture : Games, key : "Games"},
        {picture : Gym, key : "Gym"},
        {picture : Studying, key : "Studying"},
        {picture : Music, key : "Music"},
        {picture : Guitar, key : "Guitar"},
        {picture : Keyboard, key : "Keyboard"},
    ];
    const Interests = [
        {key : "Robotics"},
        {key : "Machine Learning"},
        {key : "Web Development"},
        {key : "App Development"},
        {key : "VR"},
        {key : "AR"},
        {key : "Game Development"},
    ]
    const Languages = [
        {key : "Indonesian"},
        {key : "English"},
        {key : "Japanese"},
    ]
    const tableItems =  [
        {picture : Name, key : translations.aboutMe.name, item : "Eduardo Iglesius"},
        {picture : Age, key : translations.aboutMe.age, item : "24"},
        {picture : Nationality, key : translations.aboutMe.nationality, item : translations.aboutMe.indonesia, imgSrc : Indonesia},
        {picture : Occupation, key : translations.aboutMe.occupation, item : translations.aboutMe.masterStudent},
        {picture : Hobbies, key : translations.aboutMe.hobby, item2 : HobbyItems},
        {picture : Interest, key : translations.aboutMe.interest, item2 : Interests},
        {picture : Language, key : translations.aboutMe.language, item2 :Languages},
    ]

    return(
        <div className = "about section__padding" id ="aboutMe">
            <div className = "about-image">
                <img src = { Profile2 } alt = "profile2"/>
            </div>
            <div className = "about-content">
                <h1 className = "about-title">
                    {translations.aboutMe.aboutMe}
                </h1>
                
                <div className = "about-table">
                    {tableItems.map(tableItem => (
                        <div className="item-row" key={tableItem.key}>
                            <span className="item-label">
                                <img src={tableItem.picture} alt="test" />  {tableItem.key}
                            </span>
                            <span className="item-separator">:</span>
                            {tableItem.item ? (
                                <span className="item-value">
                                    {tableItem.item} 
                                    {tableItem.imgSrc && <img src={tableItem.imgSrc} alt = {tableItem.imgSrc} />}
                                </span>

                            ) : (
                                <div className = "about-tag_group">
                                    {tableItem.item2.map(interest => (
                                    <Tag key={interest.key} text={interest.key} imgSrc={interest.picture} />
                                    ))}
                                </div>
                            )}
                        </div>
                ))}
            </div> 
        </div>
        </div>
    )
}

export default AboutMe