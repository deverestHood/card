import "./styles.css";
import React, { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import birthdaySong from './birthday-song.mp3'
import DogCard from './DogCard';

const Card = () => {
  const displayComponent = () => {
    setShowDogCard(true);
  }
  const hideComponent = () => {
    setShowDogCard(false);
  }
  const { width, height } = useWindowSize();
  const [showDogCard, setShowDogCard] = useState(false);
  const [playSound, { stop }] = useSound(birthdaySong);
    return (
    <div>
    <Confetti width={width} height={height} numberOfPieces={100} />
    {showDogCard ? (
      <div id="component">
        <DogCard />
      </div>
    ) : (
      <div className="card">
        <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">Happy Birthday Everest! 🎉</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div onMouseEnter={() => playSound()} onMouseLeave={() => stop()}>
      <div className="cardInside">
        <h3 className="back">Happy Birthday Everest! 🎉</h3>
        <p>
          Dear Ev,
          <br></br><br></br>Happy happy birthday!! I hope your day is filled with lots of love and
          joy and that your birthday wishes come true! 🎂
        </p>
        <p className="name">With all my love, Parker💖</p>
      </div>
      <div className="hover">Hover inside card for surprise</div>
      </div>
    </div>
      </div>
    )}
    {showDogCard ? (
      <button className="show-other-card" onClick={hideComponent}>Go to Parker's card</button>
    ) : (
      <button className="show-other-card"  onClick={displayComponent}>Click here for another surprise</button>
    )
  }
    </div>
)};

export default Card;
  