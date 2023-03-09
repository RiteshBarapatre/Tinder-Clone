import React from "react";
import { useState,useEffect } from "react";
import TinderCard from "react-tinder-card";
import "../css/tinder_cards.css";
import axios from '../axios.js'

const Tinder_Cards = () => {
  const [people, setPeople] = useState([]);

  useEffect(()=>{
    async function fetchdata(){
      const req = await axios.get('/tinder/getUser')
      setPeople(req.data)
    }

    fetchdata()
  },[])

  const swiped = (direction, nameToDelete) => {
    console.log("removing : " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the Screen");
  };

  return (
    <div className="tinder_cards">
      <div className="tinder_cards__cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.imgUrl})` }}
                className="card"
              >
                <h3 style={{userSelect : 'none'}}>{person.name}</h3>
                <p style={{userSelect : 'none'}}>{person.age}</p>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};

export default Tinder_Cards;
