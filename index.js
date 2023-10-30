const element = (
  <div className="bgContainer">
    <h1 className="heading">Congratulations</h1>
    <div className="cardContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="cardLogo"
      />
      <h1 className="cardHeading">Kiran V</h1>
      <p className="cardParagraph">
        Vishnu Institute of Engineering and Technology, Bhimvaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="cardLogo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
