import React, { Suspense, lazy, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Timer from "../questions/Timer";
import { machineCodingQuestionsData } from "../utils/constant";
import { createURL } from "../utils/helper";

const QuestionPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("q"));
  // useEffect(()=> {

  // }, [])

  const QuestionComponent = () => {
    const componentName = machineCodingQuestionsData.find(
      (q) => createURL(q.name) === searchParams.get("q")
    ).componentName;
    const DynamicQuestionComponent = lazy(() => import(`../questions/${componentName}`));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicQuestionComponent></DynamicQuestionComponent>
      </Suspense>
    );
  };

  return <div className="flex flex-wrap col-span-11 p-5 shadow-lg">{QuestionComponent()}</div>;
};

export default QuestionPage;
