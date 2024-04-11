import React from 'react'
import './AboutMe.css'
import Profile2 from '../../Assets/Profile2.jpg'
import { Games, Gym, Indonesia, Hobbies, Interest, Name, Nationality, Studying, Age, Occupation, Music, Guitar, Keyboard } from '../../Assets/AboutMe'
import Tag from '../../Components/Tag/Tag'




const AboutMe = () => {
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
    const tableItems =  [
            {picture : Name, key : "Name", item : "Eduardo Iglesius"},
            {picture : Age, key : "Age", item : "24"},
            {picture : Nationality, key : "Nationality", item : "Indonesia", imgSrc : Indonesia},
            {picture : Occupation, key : "Occupation", item : "Master Student"},
            {picture : Hobbies, key : "Hobby", item2 : HobbyItems},
            {picture : Interest, key : "Interest", item2 : Interests}
    ]

    return(
        <div className = "about section__padding" id ="aboutMe">
            <div className = "about-image">
                <img src = { Profile2 } alt = "profile2"/>
            </div>
            <div className = "about-content">
                <h1 className = "about-title">
                    About Me
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