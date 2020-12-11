import React from "react";
import { Link } from "react-router-dom";

const ResultsButton = () => {
  return (
    <Link className="results-button" to="/results">
      End practice
    </Link>
  );
};

export default ResultsButton;
