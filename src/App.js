import React, { useState } from "react";
import { Switch, Route, Redirect, Link, BrowserRouter as Router } from "react-router-dom";

import rapperPersonalities from "./rapperPersonalities";
import Questions from "./Questions";
import puzzleQuestions from "./puzzleQuestions";
import Result from "./Result";
import Loading from "./Loading";

import "./styles.css";
import _ from "lodash";

const App = () => {
  const [count, setCount] = useState(1);
  const [qualitiesStorage, setQualitiesStorage] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(puzzleQuestions[0])
  const [matchingPersonality, setMatchingPersonality] = useState("");

  const matchPersonalityToAnswer = personalities => {
    const qualities = personalities.reduce((acc, currentValue) => {
      const quality = qualitiesStorage[currentValue];
      if (!quality) {
        acc[currentValue] = 1;
      } else {
        acc[currentValue] = quality + 1;
      }
      return acc;
    }, {});

    setQualitiesStorage({ ...qualitiesStorage, ...qualities });
  };

  const sortPersonalities = personalities => {
    const sortedPersonalitiesList = Object.keys(personalities).sort((a, b) => {
      return personalities[b] - personalities[a];
    });

    return sortedPersonalitiesList;
  };

  const getDominantPersonalities = personalities => {
    let dominantPersonalities = [];
    let sortedPersonalitiesList = sortPersonalities(personalities);
    dominantPersonalities.push(
      sortedPersonalitiesList[0],
      sortedPersonalitiesList[1]
    );

    return dominantPersonalities.sort();
  };

  const getRapperWithMatchingPersonality = (
    rapperPersonalities,
    userPersona
  ) => {
    for (const personality in rapperPersonalities) {
      var convertedValue = personality.split(" and ").sort();
      if (_.isEqual(convertedValue, userPersona)) {
        return rapperPersonalities[personality];
      }
    }
  };

  const nextQuestion = answer => {
    matchPersonalityToAnswer(answer);

    count === puzzleQuestions.length
      ? getDominantPersonalities(qualitiesStorage)
      : setNext();

    const dominantQualities = getDominantPersonalities(qualitiesStorage);

    if (count === puzzleQuestions.length) {
      let userPersona = dominantQualities;
      const rapperName = getRapperWithMatchingPersonality(
        rapperPersonalities,
        userPersona
      );

      setMatchingPersonality(rapperName);
    }
  };

  const setNext = () => {
    setCount(count + 1);
    setCurrentQuestion(puzzleQuestions[count]);
  }

  const initQuestion = () => {
    setCurrentQuestion(puzzleQuestions[0])
    setCount(1)
    setMatchingPersonality("")
  }

  const handlePopup = () => {
    let text = "This will take you back to the beginning of the quiz.\nAre you sure you want to continue with this action?"
    if (window.confirm(text)) {
      initQuestion()
    }
  }

  return (
    <div id='page'>
      <Router>
        <div className="title-link">
          <Link to="/">
            <h1 className='app-title' onClick={handlePopup}>Curiosum</h1>
          </Link>
        </div>
        <div>
          <Switch>
            {matchingPersonality && <Redirect exact from='/' to='/loading' />}
            <Route exact path='/'>
              <Questions
                currentQuestion={currentQuestion}
                nextQuestion={nextQuestion}
                count={count}
              />
            </Route>
            <Route exact path="/loading">
              <Loading />
            </Route>
            <Route exact path='/result'>
              <Result rapperName={matchingPersonality} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
