import React from 'react'
import './Home.css'
import Profile from '../../Assets/Profile.jpg'


const NewsItems = () => {
    const items = [
        { year: 2024, name: 'Apple, Banana, Banana, Banana, Banana, Banana, Banana, Banana, Banana, Banana, Banana' },
        { year: 2024, name: 'Banana' },
        { year: 2024, name: 'Cherry' },
        { year: 2024, name: 'A' },
        { year: 2023, name: 'A' },
        { year: 2023, name: 'A' },
        { year: 2022, name: 'A' },
        { year: 2021, name: 'A' },
        { year: 2021, name: 'A' },
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
        <div className = "gpt3__header section__padding" id ="home">
            <div className = "gpt3__header-content">
                <h1 className = "gradient__text">
                    Eduardo Iglesius
                </h1>
                <p>
                Hey guys, welcome to my homepage. My name is Eduardo Iglesius. This site is one of my personal projects, used as a digital portfolio similar to LinkedIn. Here, I'll be sharing my achievements and various projects that  I made alone or with my friends. I hope you find it interesting. For contact information and more, please scroll down. Enjoy your visit!
                </p>

                <NewsItems />

            </div>
            <div className = "gpt3__header-image">
                <img src = { Profile } alt = "profile"/>
            </div>
                    
                
           
        </div>
    )
}

export default Home