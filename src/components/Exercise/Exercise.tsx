import React from "react";
import ColorPicker from "./components/ColorPicker";
import PickedColors from "./components/PickedColors";
import ResultsButton from "./components/ResultsButton";
import { StyledExercisePage } from "../styled/lib/StyledExercisePage";

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
