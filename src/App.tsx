import React, { useState } from "react";
import { questions } from "./data.json";
import { Question } from "./Question";
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
    </div>
  );
};
