import React from "react";
import { base64 } from "./utils";

interface QuestionProps {
  title: string;
  answers: string[];
  selectedIndex: number;
  onAnswerSelected: (index: number) => void;
}

export const Question = React.memo(
  ({ title, answers, selectedIndex, onAnswerSelected }: QuestionProps) => {
    return (
      <div>
        <h2>{title}</h2>
        {answers.map((answer, answerIndex) => {
          return (
            <div key={answerIndex}>
              <input
                id={base64(title + answer)}
                name={base64(title)}
                type="radio"
                checked={answerIndex === selectedIndex}
                value={answer}
                onChange={() => {
                  onAnswerSelected(answerIndex);
                }}
              />
              <label htmlFor={base64(title + answer)}>{answer}</label>
            </div>
          );
        })}
      </div>
    );
  }
);
