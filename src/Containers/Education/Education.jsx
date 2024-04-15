import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {ReactComponent as SchoolIcon} from '../../Assets/school.svg'

import EducationElements from './educationElements';
import { LanguageContext } from '../../Components/Language/languageContext';
import { useContext } from 'react';



const Education = () => {
    const { translations } = useContext(LanguageContext);
    const educationElements = EducationElements()
    return(
        <div className = "education section__padding" id = "education">
            <h1>
                {translations.education.education}
            </h1>
            <VerticalTimeline lineColor="#443232">
                {
                    educationElements.map(element => {
                        return (
                            <VerticalTimelineElement
                                key ={element.key}
                                date = {element.date}
                                dateClassName='education-date'
                                iconStyle={{ background: "#C6C6C6"}}
                                icon={<SchoolIcon />}
                                contentArrowStyle={{ borderRightColor: "#d3d3d3"}}
                                
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <p class="education-description">{element.description}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default Education