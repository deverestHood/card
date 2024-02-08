import "./styles.css";
import React from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import birthdaySong from './birthday-song.mp3'

const Card = () => {
  const { width, height } = useWindowSize();
  const [playSound, { stop }] = useSound(birthdaySong);
    return (
    <div>
    <Confetti width={width} height={height} numberOfPieces={100} />
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
        <p className="name">Love, Parker💖</p>
      </div>
      </div>
    </div>
    </div>
    <div className="hover">Hover inside card for surprise</div>
    </div>
)};

export default Card;
  