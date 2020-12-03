import React, { useState } from "react";
import { questions } from "./questions.json";
import "./styles.css";

interface AppProps {
  name: string;
}

export const App = ({ name }: AppProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array.from(
      {
        length: questions.length,
      },
      () => -1
    )
  );
  return (
    <div>
      Hello, {name}
      {questions.map((question, questionIndex) => {
        return (
          <div>
            <h2>{question.name}</h2>
            <form>
              {question.answers.map((answer, answerIndex) => {
                return (
                  <div>
                    <input
                      id={questionIndex + answerIndex.toString()}
                      name={question.name}
                      type="radio"
                      checked={selectedAnswers[questionIndex] === answerIndex}
                      value={answer.answer}
                      onChange={() =>
                        setSelectedAnswers((selectedAnswers) => {
                          return selectedAnswers.map(
                            (selectedAnswer, selectedAnswerIndex) => {
                              if (selectedAnswerIndex === questionIndex) {
                                return answerIndex;
                              }
                              return selectedAnswer;
                            }
                          );
                        })
                      }
                    />
                    <label htmlFor={questionIndex + answerIndex.toString()}>
                      {answer.answer}
                    </label>
                  </div>
                );
              })}
            </form>
          </div>
        );
      })}
    </div>
  );
};
