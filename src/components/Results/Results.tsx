import React from "react";
import { StyledResultsPage } from "../styled/lib/StyledResultsPage";
import ResultsWidgets from "./components/ResultsWidgets";

const Results = () => {
  return (
    <StyledResultsPage>
      <h1>Results</h1>
      <ResultsWidgets />
    </StyledResultsPage>
  );
};

export default Results;
