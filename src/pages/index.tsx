import React, { useState } from "react";
import { questions } from "../components/data.json";
import { Question } from "../components/Question";
import { Result } from "../components/Result";

const App = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array.from(
      {
        length: questions.length,
      },
      () => -1
    )
  );
  const [showQuestions, setShowQuestions] = useState(true);

  return (
    <div>
      <img src="/vdady.png" style={{ float: "right" }} />
      {showQuestions ? (
        <div>
          {questions.map((question, questionIndex) => {
            return (
              <Question
                key={questionIndex}
                title={question.name}
                answers={question.answers.map(({ label }) => label)}
                selectedIndex={selectedAnswers[questionIndex]}
                onAnswerSelected={(newAnswerIndex) => {
                  setSelectedAnswers((selectedAnswers) => {
                    return selectedAnswers.map((selectedAnswer, index) => {
                      if (index === questionIndex) {
                        return newAnswerIndex;
                      }

                      return selectedAnswer;
                    });
                  });
                }}
              />
            );
          })}
          <button
            disabled={selectedAnswers.filter((a) => a === -1).length !== 0}
            onClick={() => {
              setShowQuestions(false);
            }}
          >
            submit
          </button>
        </div>
      ) : (
        <Result selectedAnswers={selectedAnswers} />
      )}
    </div>
  );
};
export default App;
