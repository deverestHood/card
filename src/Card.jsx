import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import mothersDaySong from './mothers-day.mp3'
import MiamiCard from './MiamiCard';
import logo from './Happy-Mothers-Day-PNG-Transparent-Image-1354971568.png';

const Card = () => {
  const [showMiamiCard, setShowMiamiCard] = useState(false);
  useEffect(() => {
    // Dynamically add the correct body class
    if (showMiamiCard) {
      document.body.classList.add(styles.miamiBody);
      document.body.classList.remove(styles.mainBody);
    } else {
      document.body.classList.add(styles.mainBody);
      document.body.classList.remove(styles.miamiBody);
    }

    // Cleanup function to remove classes when the component unmounts
    return () => {
      document.body.classList.remove(styles.miamiBody);
      document.body.classList.remove(styles.mainBody);
    };
  }, [showMiamiCard]);
  const displayComponent = () => {
    setShowMiamiCard(true);
  }
  const hideComponent = () => {
    setShowMiamiCard(false);
  }
  const { width, height } = useWindowSize();
  const colors = ['#f0bce0', '#c357ea', '#FFFFFF'];
  const [playSound, { stop }] = useSound(mothersDaySong);
    return (
    <div>
    {showMiamiCard ? (
      <button className={styles.showothercard} onClick={hideComponent}>Go to Mother's Day card</button>
    ) : (
      <button className={styles.showothercard}  onClick={displayComponent}>Click here for another surprise!</button>
    )
  }
    {showMiamiCard ? (
      <div id="component">
        <MiamiCard />
      </div>
    ) : (
      <div>
    <Confetti width={width} height={height} numberOfPieces={100} colors={colors}/>
      <div className={styles.card}>
        
        <div className={styles.birthdayCard}>
      <div className={styles.cardFront}>
        <h3 className={styles.happy}>Happy Mother's Day! 🌺</h3>
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
        <h3 className={styles.back}>Happy Mother's Day! 🌷</h3>
        <p>
          Dear Mom,
          <br></br><br></br>Happy Mother's Day! Thank you for being my mom, and I hope your day is filled with lots of love and
          joy!
        </p>
        <p className={styles.name}>With all my love, Everest 💌</p>
      </div>
      <div className={styles.hover}>(Hover inside card for sound)</div>
      </div>
    </div>
      </div>
      </div>
    )}
    </div>
)};

export default Card;
  