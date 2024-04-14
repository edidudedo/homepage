import React from 'react'
import './Home.css'
import Profile from '../../Assets/Profile.jpg'


const NewsItems = () => {
    const items = [
        { year: 2024, name: 'Started master degree in Osaka University' },
        { year: 2024, name: 'Graduated from Osaka University (Bachelor Degree).' },
        { year: 2024, name: 'Received MEXT Scholarship for master' },
        { year: 2023, name: 'Started working as Web Developer in C-Channel Japan' },
        { year: 2023, name: 'Started working as Indonesian teacher in Hello Sensei' },
        { year: 2023, name: 'Started working as translator in Mori Kosan' },
        { year: 2022, name: 'Became Head of Internal in PPI-ON' },
        { year: 2021, name: 'Became member of Internal in PPI-ON' },
        { year: 2020, name: 'Started bachelor degree in Osaka University' },
        { year: 2019, name: 'Started japanese school in Japanese Language Center for International Students' },
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
    return(
        <div className = "header section__padding" id ="home">
            <div className = "header-content">
                <h1 className = "gradient__text">
                    Eduardo Iglesius
                </h1>
                <p>
                Hey guys, welcome to my homepage. My name is Eduardo Iglesius. This site is one of my personal projects, used as a digital portfolio similar to LinkedIn. Here, I'll be sharing my achievements and various projects that  I made alone or with my friends. I hope you find it interesting. For contact information and more, please scroll down. Enjoy your visit!
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