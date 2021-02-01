import React from "react";
import { questions } from "./data.json";

function result(selectedAnswers: number[]) {
  let tallyMap = new Map<string, number>();
  for (let i = 0; i < selectedAnswers.length; i++) {
    if (selectedAnswers[i] === -1) {
      continue;
    }

    const question = questions[i];
    const a = question.answers[selectedAnswers[i]].answerers;
    for (const b of a) {
      const c = tallyMap.get(b);
      if (c === undefined) {
        tallyMap.set(b, 1 / a.length);
      } else {
        tallyMap.set(b, c + 1 / a.length);
      }
    }
  }
  let r = "";
  for (const [name, value] of tallyMap) {
    if (value! > (tallyMap.get(r) || 0)) {
      r = name;
    }
  }
  return r;
}
interface ResultProps {
  selectedAnswers: number[];
}

export const Result = ({ selectedAnswers }: ResultProps) => {
  const r = result(selectedAnswers);
  return (
    <div
      style={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "100px",
        fontFamily: "Coda Caption",
        float: "left",
        backgroundImage:
          "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
      }}
    >
      DU ÄR: {r} FRÅN DIGIT'20!!!!! <br />
      🎊🥳🎂🎊🎉🎉🎉🎉🎉🎊🎂🥳🎊
    </div>
  );
};
