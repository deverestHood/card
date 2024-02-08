import "./styles.css";
import React, { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import birthdaySong from './birthday-song.mp3'

const DogCard = () => {
  const { width, height } = useWindowSize();
  const [playbackRate, ] = useState(1.75);
  const [playSound, { stop }] = useSound(birthdaySong, { playbackRate });
    return (
    <div>
    <Confetti width={width} height={height} numberOfPieces={100} />
    <div className="card">
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">Happy Birthday Daddy! 🎉</h3>
        <div className="dog-balloons">
          <div className="dog-balloonOne" />
          <div className="dog-balloonTwo" />
          <div className="dog-balloonThree" />
          <div className="dog-balloonFour" />
        </div>
      </div>
      <div onMouseEnter={() => playSound()} onMouseLeave={() => stop()}>
      <div className="cardInside">
        <h3 className="back">Happy Birthday Daddy! 🎉</h3>
        <p>
          Dear Daddy,
          <br></br><br></br>Happy happy birthday!! Thanks for always taking us on a walk and giving us treatos! Hope you have a doggone amazing day! 🎂
        </p>
        <p className="dog-name">Love, Winter & Charlie 🐶</p>
      </div>
      </div>
    </div>
    </div>
    <div className="hover">Hover inside card for surprise</div>
    </div>
)};

export default DogCard;