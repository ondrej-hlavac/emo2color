import React from "react";
import ResultsWidgets from "./components/ResultsWidgets";
import { StyledResultsPage } from "../styled/pages/StyledResultsPage";
import { Headline } from "components/styled/atoms/Headline";

const Results = () => {
  return (
    <StyledResultsPage>
      <Headline>Results</Headline>
      <ResultsWidgets />
    </StyledResultsPage>
  );
};

export default Results;
