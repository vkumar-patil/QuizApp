import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div>
        <h4>"Enter Your Name"</h4>
        <input
          type="text"
          placeholder="enter your name"
          value={''}
          onClick={(e) => e.target.value}
        />
        <Link to="/Quizpage">
          <button>Start Quiz</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
