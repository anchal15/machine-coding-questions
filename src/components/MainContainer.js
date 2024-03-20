import React from "react";
import QuestionCard from "./QuestionCard";
import { machineCodingQuestionsData } from "../utils/constant";
import { Link } from "react-router-dom";
import { createURL } from "../utils/helper";

const MainContainer = () => {
  return (
    <div className="flex flex-wrap col-span-11 p-5 shadow-lg">
      {machineCodingQuestionsData.map((question) => (
        <Link to={"/question?q=" + createURL(question.name)} key={question.id}>
          <QuestionCard
            title={question.name}
            description={question.description}
            date={question.date}
            image={question.image}
            githubLink={question.githubLink}
          />
        </Link>
      ))}
    </div>
  );
};

export default MainContainer;
