import React from "react";
import ResultsWidgets from "./components/ResultsWidgets";
import { StyledResultsPage } from "../styled/lib/StyledResultsPage";

const Results = () => {
  return (
    <StyledResultsPage>
      <h1>Results</h1>
      <ResultsWidgets />
    </StyledResultsPage>
  );
};

export default Results;
