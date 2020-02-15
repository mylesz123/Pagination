import React from 'react'
import { girlNames } from '../data/girlNames';
import { dudeNames } from '../data/dudeNames';

export default function ListItem() {
    let randomGirl = girlNames[Math.floor(Math.random() * girlNames.length)];
    let randomDude = dudeNames[Math.floor(Math.random() * dudeNames.length)];

    const getRandomNumber = (number = 99) => {
        return Math.floor(Math.random() * number);
    }

    const getRandomGender = (number) => {
        let gender = number <= 50 ? "men" : "women";
        return gender;
    }

    const getRandomUrl = (gender, number) => {
        return `https://randomuser.me/api/portraits/thumb/${gender}/${number}.jpg`;
    }

    const getRandomName = (number) => {   
        let person = number <= 50 ? randomGirl : randomDude;     
        return person;
    }

    const getEmail = () => {
        var splitString = getRandomName(getRandomNumber).split(" ");
        var appendedName = `${splitString[0]}.${splitString[1]}`;
        return `${appendedName}@example.com`;
    }

    const getRandomDate = () => {
        // let month = Math.floor(Math.random() * 12);
        let month = getRandomNumber(12);
        let day = getRandomNumber(31);
        let year = getRandomNumber(25);
        let m = month === 0 ? 1 : month;
        let d = day === 0 ? 1 : day;
        let y = year < 10 ? "0" + year : year;

        return `Joined ${m}/${d}/${y < 2000 && y > 1980 ? "19" + y : "20" + y}`
    }
    return (
        <li className="student-item cf">
            <div className="student-details">
                <img className="avatar" alt="user avatar" src={getRandomUrl(getRandomGender(getRandomNumber()), getRandomNumber())} />
                <h3>{getRandomName()}</h3><span className="email">{getEmail()}</span>
                <span className="date">{getRandomDate()}</span>
            </div>
        </li>
    )
}
