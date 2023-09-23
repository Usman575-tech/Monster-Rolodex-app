// import React, {useState} from "react";
// let App =()=>{
//     let time = new Date().toLocaleTimeString();
//     const[cTime, setCTime]= useState(time);
//     const updateTime = () => {
//         time = new Date().toLocaleTimeString();
//         setCTime(time);
//     };
//     setInterval(updateTime,1000);
//     return(
//         <h2>{cTime}</h2>
//     )
// };
// export default App;


import React, {useState } from 'react';

const App = () => {
  const cards = [
    { name: 'Lahore Qalandar',picture:'https://robohash.org/1?set=set2&size=180x180' },
    { name: 'Multan Sultan',picture:'https://robohash.org/2?set=set2&size=180x180' },
    { name: 'Islamabad United',picture:'https://robohash.org/3?set=set2&size=180x180' },
    { name: 'Pishawar Zalmi',picture:'https://robohash.org/4?set=set2&size=180x180' },
    { name: 'Quetta Qaladiator',picture:'https://robohash.org/5?set=set2&size=180x180' },
    { name: 'Karachi King',picture:'https://robohash.org/6?set=set2&size=180x180' },
    { name: 'Lahore Qalandar',picture:'https://robohash.org/1?set=set2&size=180x180' },
    { name: 'Multan Sultan',picture:'https://robohash.org/2?set=set2&size=180x180' },
    { name: 'Islamabad United',picture:'https://robohash.org/3?set=set2&size=180x180' },
    { name: 'Pishawar Zalmi',picture:'https://robohash.org/4?set=set2&size=180x180' },
    { name: 'Quetta Qaladiator',picture:'https://robohash.org/5?set=set2&size=180x180' },
    { name: 'Karachi King',picture:'https://robohash.org/6?set=set2&size=180x180' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <input className='search-box'
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className='card-list'>
        {filteredCards.map((card, index) => (
          <div className='card-container' key={index}>
            <img
            alt={card.name}
            src={card.picture}
            />
            {card.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;


