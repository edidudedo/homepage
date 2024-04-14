import React from 'react'
import './Achievements.css'
import { Penghargaan, Penghargaan2, PenghargaanDll, Monbukagakusho } from '../../Assets/Achievements'




const Achievements = () => {
    const handleLinkClick = (e, imgLink) => {
        if (!imgLink) {
          e.preventDefault();
          alert('There is no reference website.');
        }
      };
    const AchievementList = [
        {imgSrc : Penghargaan2, imgLink : "",  name : "大阪大学基礎工学部賞", year : "2024", desc  : "An award issued by Osaka University, given to one outstanding student from the course who is currently enrolled in Osaka University"},
        {imgSrc : Monbukagakusho, imgLink : "https://www.id.emb-japan.go.jp/sch_rs2025.html",  name : "MEXT Scholarship (Master)", year : "2024", desc  : "A scholarship funded by the Japanese Ministry of Education, Culture, Sports, Science and Technology (MEXT), supports foreign students studying in Japan. It covers tuition, provides a monthly stipend, and include travel expenses to and from Japan."},
        {imgSrc : Penghargaan, imgLink : "https://www.celas.osaka-u.ac.jp/top-50-of-osaka-univ/", name : "大阪大学全学教育優秀賞", year : "2021", desc  : "An award issued by Osaka univeristy, Honored to students who excel in liberal arts education, focusing on one of the university's educational goals. It evaluates overall achievements including credits earned and academic performance. Annually, around 50 students out of 3000s students from across all faculties are selected, based on their accomplishments by the end of their second year, including those in the International College's English courses by their third year."},
        {imgSrc : Monbukagakusho, imgLink : "https://www.id.emb-japan.go.jp/sch_gakubu2024.html",  name : "MEXT Scholarship (Bachelor)", year : "2019", desc  : "A scholarship funded by the Japanese Ministry of Education, Culture, Sports, Science and Technology (MEXT), supports foreign students studying in Japan. It covers tuition, provides a monthly stipend, and include travel expenses to and from Japan."},
        {imgSrc : PenghargaanDll, imgLink : "",  name : "Other", year : "2009-2017", desc  : "Any other awards that I received during my elementary high school to senior high school which are too many to list individually, thus will only be shown from the picture."}
    ]
    return(
        <div className = "achievements section__padding" id ="achievements">
            <div className = "achievements-content">
                <h1 className = "about-title">
                    Achievements
                </h1>
                <div class="achievements-container">
                    {AchievementList.map(item => (
                        <div class="achievement">
                            <a href={item.imgLink} target="_blank" onClick={(e) => handleLinkClick(e, item.imgLink)}>
                                <img src={item.imgSrc} alt="Achievement Description" />
                                <div class="achievement-description">
                                    <span class="achievement-item-label">Name</span>
                                    <span class="achievement-item-separator">:</span>
                                    <span class="achievement-item-value">{item.name}</span>
                                </div>
                                <div class="achievement-description">
                                    <span class="achievement-item-label">Year</span>
                                    <span class="achievement-item-separator">:</span>
                                    <span class="achievement-item-value">{item.year}</span>
                                </div>
                                <div class="achievement-description">
                                    <span class="achievement-item-label">Desc</span>
                                    <span class="achievement-item-separator">:</span>
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

export default Achievements