import React from "react";

import "./NextButton.css";

const NextButton = ({ count, nextQuestion, puzzleQuestions }) => {
  return (
    <button id="next" onClick={nextQuestion}>
      {count === puzzleQuestions.length ? "FINISH" : "NEXT QUESTION"}
    </button>
  );
}

export default NextButton;
