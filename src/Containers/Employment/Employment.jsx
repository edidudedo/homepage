import React from 'react'
import './Employment.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {ReactComponent as WorkIcon} from '../../Assets/work.svg'

import employmentElements from './employmentElements';



const Employment = () => {
    return(
        <div className = "employment section__padding" id = "employment">
            <h1>
                Employment
            </h1>
            <VerticalTimeline lineColor="#443232">
                {
                    employmentElements.map(element => {
                        return (
                            <VerticalTimelineElement
                                key ={element.key}
                                date = {element.date}
                                dateClassName='employment-date'
                                iconStyle={{ background: "#C6C6C6"}}
                                icon={<WorkIcon />}
                                contentArrowStyle={{ borderRightColor: "#d3d3d3"}}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <p class="employment-description">{element.description}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default Employment