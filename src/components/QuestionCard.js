import React from "react";

const QuestionCard = ({ image, title, description, githubLink, date }) => {
  const imgPath = require("../assets/" + image);
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="question" src={imgPath} />
      <ul>
        <li className="font-bold py-1">{title}</li>
        <li className="flex-wrap">{description}</li>
        <li>
          <a href={githubLink}>Github link</a>
        </li>
        <li>Date: {date}</li>
      </ul>
    </div>
  );
};

export default QuestionCard;
