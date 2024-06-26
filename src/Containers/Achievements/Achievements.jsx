import React from 'react'
import './Achievements.css'
import { Penghargaan, Penghargaan2, PenghargaanDll, Monbukagakusho, Hackathon } from '../../Assets/Achievements'
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../Components/Language/languageContext';

import ImageModal from '../../Components/ImageModal/ImageModal';

const Achievements = () => {
    const { translations } = useContext(LanguageContext);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const body = document.body;
        const toggleBodyScroll = (shouldScroll) => {
            body.style.overflow = shouldScroll ? 'auto' : 'hidden';
        };

        toggleBodyScroll(!isModalOpen);
    
        // Cleanup function to re-enable scrolling when the modal closes or on component unmount
        return () => {
            toggleBodyScroll(true);
        };
    }, [isModalOpen]);
    

    const handleImageClick = (e, item) => {
        if (!item.imgLink) {
            e.preventDefault();
            setSelectedImage(item.imgSrc);
            setModalOpen(true);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };
    const AchievementList = [
        {imgSrc : Hackathon, imgLink : "https://job.tracks.run/challenges/hackathon-20240413",  name : "ハッカソン優秀賞", year : "2024", desc  : translations.achievements.hackathon_desc},
        {imgSrc : Penghargaan2, imgLink : "",  name : "大阪大学基礎工学部賞", year : "2024", desc  : translations.achievements.gakubusho_desc},
        {imgSrc : Monbukagakusho, imgLink : "https://www.id.emb-japan.go.jp/sch_rs2025.html",  name : "MEXT Scholarship (Master)", year : "2024", desc  : translations.achievements.mextMaster_desc},
        {imgSrc : Penghargaan, imgLink : "https://www.celas.osaka-u.ac.jp/top-50-of-osaka-univ/", name : "大阪大学全学教育優秀賞", year : "2021", desc  : translations.achievements.tpbsho_desc},
        {imgSrc : Monbukagakusho, imgLink : "https://www.id.emb-japan.go.jp/sch_gakubu2024.html",  name : "MEXT Scholarship (Bachelor)", year : "2019", desc  : translations.achievements.mextBach_desc},
        {imgSrc : PenghargaanDll, imgLink : "",  name : "Other", year : "2009-2017", desc  : translations.achievements.other_desc}
    ]
    return(
        <div className = "achievements section__padding" id ="achievements">
            <div className = "achievements-content">
                <h1 className = "about-title">
                    {translations.achievements.achievements}
                </h1>
                <div class="achievements-container">
                    {AchievementList.map(item => (
                        <div class="achievement">
                            <a href={item.imgLink || '#'} target="_blank" onClick={(e) => handleImageClick(e, item)}>
                                <img src={item.imgSrc} alt="Achievement Description" />
                                <div>
                                    <div class="achievement-description">
                                        <span class="achievement-item-label">{translations.achievements.key.name}</span>
                                        <span class="achievement-item-separator">:</span>
                                        <span class="achievement-item-value">{item.name}</span>
                                    </div>
                                    <div class="achievement-description">
                                        <span class="achievement-item-label">{translations.achievements.key.year}</span>
                                        <span class="achievement-item-separator">:</span>
                                        <span class="achievement-item-value">{item.year}</span>
                                    </div>
                                    <div class="achievement-description">
                                        <span class="achievement-item-label">{translations.achievements.key.desc}</span>
                                        <span class="achievement-item-separator">:</span>
                                        <div>{item.desc}</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
            {isModalOpen && <ImageModal src={selectedImage} onClose={closeModal} />}
            {/* <div className={`nav-overlay ${isModalOpen ? 'active' : ''}`} onClick={closeModal}></div> */}
        </div>
    )
}

export default Achievements