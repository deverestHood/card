import styles from "./miami-styles.module.css";
import React, { useEffect, useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import miamiFightSong from './hurricanes-fight-song.mp3'
import logo from './Miami_Hurricanes_logo.svg.png';
import './global.css';

const MiamiCard = () => {
  useEffect(() => {
    document.body.classList.add(styles.miamiBody);
    return () => {
      document.body.classList.remove(styles.miamiBody); // Cleanup on unmount
    };
  }, []);
  const { width, height } = useWindowSize();
  const colors = ['#F47321', '#005030', '#FFFFFF'];
  const [playbackRate, ] = useState(1.0);
  const [playSound, { stop }] = useSound(miamiFightSong, { playbackRate });
    return (
    <div>
    <Confetti width={width} height={height} numberOfPieces={100} colors={colors}/>
    <div className={styles.MiamiCard}>
    <div className={styles.birthdayCard}>
      <div className={styles.cardFront}>
        <h3 className={styles.happy}>GO HURRICANES! 🧡🙌🏼💚</h3>
        <div className={styles.logoContainer}>
          <img
            src={logo}
            alt="Miami Hurricanes Logo"
            className={styles.logo}
          />
        </div>
      </div>
      <div onMouseEnter={() => playSound()} onMouseLeave={() => stop()}>
      <div className={styles.cardInside}>
        <h3 className={styles.back}>Hurricanes Rock! 🧡🙌🏼💚</h3>
        <p>
          Dear #1 Hurricanes Fan,
          <br></br><br></br>Thank you for being the #1 Miami Hurricanes fan! Keep cheering for the 'Canes and spreading the U love!
        </p>
        <p className={styles.dogname}>Love, Everest & Sebastian</p>
      </div>
      </div>
    <div className={styles.hover}>(Hover inside card for sound)</div>
    </div>
    </div>
    </div>
)};

export default MiamiCard;