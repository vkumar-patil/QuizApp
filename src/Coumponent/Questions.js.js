import React from "react";
import "./Questions.css";
function Questions({ question, onselectClick = () => {} }) {
  return (
    <div className="Questionmainpage">
      <div className="questions">
        <h4 className="question">{question.question}</h4>
        <ul className="answerOptions">
          {" "}
          {question.answerOptions.map((Option) => {
            return (
              <li key={Option.text}>
                <button onClick={() => onselectClick(Option.isCorrect)} className="Questionsbtn">
                  {Option.text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Questions;
