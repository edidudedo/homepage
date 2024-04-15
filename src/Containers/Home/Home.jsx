import React from 'react'
import './Home.css'
import Profile from '../../Assets/Profile.jpg'
import { LanguageContext } from '../../Components/Language/languageContext';
import { useContext } from 'react';

const NewsItems = () => {
    const { translations } = useContext(LanguageContext)

    const items = [
        { year: 2024, name: translations.home.news.masterHandai },
        { year: 2024, name: translations.home.news.graduateHandai },
        { year: 2024, name: translations.home.news.mextMaster },
        { year: 2023, name: translations.home.news.cChannel },
        { year: 2023, name: translations.home.news.helloSensei },
        { year: 2023, name: translations.home.news.wasabi },
        { year: 2022, name: translations.home.news.headInternal },
        { year: 2021, name: translations.home.news.memberInternal },
        { year: 2020, name: translations.home.news.bachelorHandai },
        { year: 2019, name: translations.home.news.jlc },
      ];
    return (
        <div className = "Home-news">
            <h2 className = "gradient__text">News</h2>
            <ul>
                {items.map(item => (
                    <li key  = "NewsItem">{item.year} : {item.name}</li>
                ))}
            </ul>
        </div>

  );
}

const Home = () => {
    const { translations } = useContext(LanguageContext)
    return(
        <div className = "header section__padding" id ="home">
            <div className = "header-content">
                <h1 className = "gradient__text">
                    Eduardo Iglesius
                </h1>
                <p>
                    {translations.home.desc}
                </p>

                <NewsItems />

            </div>
            <div className = "header-image">
                <img src = { Profile } alt = "profile"/>
            </div>
                    
                
           
        </div>
    )
}

export default Home