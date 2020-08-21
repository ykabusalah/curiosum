import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Line } from "rc-progress";
import "react-toastify/dist/ReactToastify.css";

import NextButton from "./NextButton";
import "./Questions.css";
import puzzleQuestions from "./puzzleQuestions";

const Questions = ({ nextQuestion, currentQuestion, count }) => {
    const [answer, setAnswer] = useState([]);
    const [selectedButtonKey, setSelectedButtonKey] = useState("");
    const answers = currentQuestion.answers;

    const handleSetAnswer = (answer) => setAnswer(answer);
    const handleButtonSelect = (key) => setSelectedButtonKey(key);

    return (
        <div id="container">
            <Line
                percent={(count / puzzleQuestions.length) * 100}
                strokeColor="#f60057"
                trailColor="#fb9dbf"
            />
            <ToastContainer />
            <div id="header">
                <span>Question {`${count}/${puzzleQuestions.length}`}</span>
                <span id="question">{currentQuestion.question}</span>
            </div>

            {answers.map((answer) => (
                <button
                    key={answer.id}
                    onClick={() => {
                        handleButtonSelect(answer.id);
                        handleSetAnswer(answer.personality);
                    }}
                    className={answer.id === selectedButtonKey ? "selected" : ""}
                >
                    {answer.answer}
                </button>
            ))}
            <NextButton
                count={count}
                nextQuestion={() => {
                    if (selectedButtonKey) {
                        nextQuestion(answer);
                        setSelectedButtonKey("");
                    } else {
                        toast(<div>Please choose an answer!</div>, {
                            type: "dark",
                            position: "bottom-center",
                            autoClose: 2000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            limit: 1,
                            preventDuplcated: true
                        });
                    }
                }}
                puzzleQuestions={puzzleQuestions}
            />
        </div>
    );
}

export default Questions;
