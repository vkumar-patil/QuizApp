import React from "react";
import { Link } from "react-router-dom";

function Result(score) {
  return (
    <>
      <div>
        <h4>{score}</h4>
        <Link to="/Home">
          <button></button>
        </Link>
      </div>
    </>
  );
}

export default Result;
