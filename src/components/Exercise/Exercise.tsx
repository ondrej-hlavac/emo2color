import React from "react";
import ColorPicker from "./components/ColorPicker";
import PickedColors from "./components/PickedColors";
import { StyledExercisePage } from "../styled/lib/StyledExercisePage";
import ResultsButton from "./components/ResultsButton";

const Exercise = () => {
  return (
    <StyledExercisePage>
      <h1>Exercise</h1>
      <PickedColors />
      <ColorPicker />
      <ResultsButton />
    </StyledExercisePage>
  );
};

export default Exercise;
