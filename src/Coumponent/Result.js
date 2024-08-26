import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import "./Result.css";

function Result({ questions, userselect = () => {} }) {
  const { someStateValue } = Home();
  console.log(someStateValue);
  const currentAnswer = userselect.filter((answer) => answer).length;
  console.log(userselect);
  return (
    <div className="Resultmainpage">
      <div className="Resultdiv">
        <div className="Resultheading">
          <h2>{someStateValue}!!Result!!</h2>
        </div>
        <div>
          {}

          <h4 className=" Resulanswer">
            !! {currentAnswer} !! Answer Ok OUT OFF !! 
            {questions.length} !!
          </h4>

          <Link to="/">
            <button className="btn btn-warning Resultbtn">Reset</button>
          </Link>
        </div>
        <div>
          <h3 className="Resultupdate">
            {currentAnswer.length < 7
              ? "!!Congratulate the user if they scored well.!!!"
              : "!!..Encourage them to try again if their score is low..!!"}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Result;
