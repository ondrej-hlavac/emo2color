import React from "react";
import { Link } from "react-router-dom";
import { routes } from "routes";

const ResultsButton = () => {
  return (
    <Link className="results-button" to={routes.RESULTS}>
      End practice
    </Link>
  );
};

export default ResultsButton;
