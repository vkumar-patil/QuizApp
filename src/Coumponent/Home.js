import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  const [someStateValue, setSomeStateValue] = useState();

  return (
    <div div className="Home">
      <div className="homecontainer">
        <h4 className="Homepageheding">"Enter Your Name"</h4>
        <input
          type="text"
          value={someStateValue}
          onChange={(e) => setSomeStateValue(e.target.value)}
          className="Homepageinput"
        />
        <br />

        <Link to="/Quizpage">
          <button className="btn btn-warning Homepagebtn">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
