import React from 'react'
import './Research.css'
import { useContext } from 'react';
import { LanguageContext } from '../../Components/Language/languageContext';

const Research = () => {
    const { translations } = useContext(LanguageContext);
    const ResearchList = [
        {webLink : "https://mertcookimg.github.io/mrnab/", title : "MRNaB: Mixed Reality-Based Robot Navigation Interface Using Optical-See-Through MR-Beacon", youtubeLink : "https://www.youtube.com/embed/JVErDjF2axc", desc  : "Recent advancements in robotics have led to the development of numerous interfaces to enhance the intuitiveness of robot navigation. However, the reliance on traditional 2D displays imposes limitations on the simultaneous visualization of information. Mixed Reality (MR) technology addresses this issue by enhancing the dimensionality of information visualization, allowing users to perceive multiple pieces of information concurrently. This paper proposes Mixed reality-based robot navigation interface using an optical-see-through MR-beacon (MRNaB), a novel approach that incorporates an MR-beacon, situated atop the real-world environment, to function as a signal transmitter for robot navigation. This MR-beacon is designed to be persistent, eliminating the need for repeated navigation inputs for the same location. Our system is mainly constructed into four primary functions: “Add”, “Move”, “Delete”, and “Select”. These allow for the addition of a MR-beacon, location movement, its deletion, the selection of MR-beacon for navigation purpose, respectively. The effectiveness of the proposed method was then validated through experiments by comparing it with the traditional 2D system. As the result, MRNaB was proved to increase the performance of the user when doing navigation to a certain place subjectively and objectively."},
    ]
    return(
        <div className = "research section__padding" id ="research">
            <div className = "research-content">
                <h1 className = "about-title">
                    {translations.research.research}
                </h1>
                <div class="research-container">
                    {ResearchList.map(item => (
                        <div class="_research">
                            <h2>{item.title}</h2>
                            <div className="research-iframe_container">
                                <iframe
                                    width="560"
                                    height="315"
                                    src={item.youtubeLink}
                                    title="Research Video"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            <div class="research-description">
                                <span class="research-item-label">Abstract</span>
                                <span class="research-item-separator">:</span>
                                <div class ="research-item-description">{item.desc}</div>
                            </div>
                            <div class = "research-button">
                                <a href={item.webLink} className="research-button-style" target="_blank">
                                    {translations.research.detail + " >>"}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Research