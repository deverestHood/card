import "./styles.css";

const Card = () => {
    return (
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
      <div className="cardInside">
        <h3 className="back">Happy Birthday Everest! 🎉</h3>
        <p>Dear Ev,</p>
        <p>
          Happy birthday!! I hope your day is filled with lots of love and
          joy! May all of your birthday wishes come true!
        </p>
        <p className="name">Love, Parker 💖</p>
      </div>
    </div>
    </div>
)};

export default Card;
  