import React, { useState } from "react";
import { questions } from "./Question.js";
import Quetionn from "./Questions.js";
import Result from "./Result.js";
function Quizpage() {
  const [currentqution, setcurrentQution] = useState(0);
  const [userselect, setUserselect] = useState([]);
  const handleNextquestion = (isCorrect) => {
    setcurrentQution(currentqution + 1);
    setUserselect([...userselect, isCorrect]);
  };
  return (
    <div>
      {currentqution < questions.length && (
        <Quetionn
          question={questions[currentqution]}
          onselectClick={handleNextquestion}
        />
      )}
      {currentqution === questions.length && (
        <Result questions={questions} userselect={userselect}></Result>
      )}
    </div>
  );
}

export default Quizpage;
