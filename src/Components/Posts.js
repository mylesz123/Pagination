import React from 'react'

export default function Posts({posts}) {
    
    const getRandomNumber = (number = 99) => {
        return Math.floor(Math.random() * number);
    }

    const getUrl = (number) => {
        let gender = number <= 50 ? "men" : "women";
        return `https://randomuser.me/api/portraits/thumb/${gender}/${number}.jpg`;
    }

    const getEmail = (name) => {
        let splitString = name.split(" ");
        let appendedName = `${splitString[0]}.${splitString[1]}`;
        return `${appendedName}@example.com`;
    }

    const getRandomDate = () => {
        let month = getRandomNumber(12);
        let day = getRandomNumber(31);
        let year = getRandomNumber(25);
        let m = month === 0 ? 1 : month;
        let d = day === 0 ? 1 : day;
        let y = year < 10 ? "0" + year : year;

        return `Joined ${m}/${d}/${y < 2000 && y > 1980 ? "19" + y : "20" + y}`
    }

    return (
        <ul className="student-list">
            {/* dynamically generate list of fake users with list item class (user) */}
            {posts.map(post => (
                <li key={post} className="student-item cf">
                    <div className="student-details">
                        <img className="avatar" alt="user avatar" src={getUrl(getRandomNumber())} />
                        <h3>{post}</h3><span className="email">{getEmail(post)}</span>
                        <span className="date">{getRandomDate()}</span>
                    </div>
                </li>
            ))}
        </ul>         
    )
}
