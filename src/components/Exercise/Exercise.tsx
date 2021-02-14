import React from "react";
import ColorPicker from "./components/ColorPicker";
import PickedColors from "./components/PickedColors";
import { StyledExercisePage } from "../styled/pages/StyledExercisePage";
import { Headline } from "components/styled/atoms/Headline";

const Exercise = () => {
  return (
    <StyledExercisePage>
      <Headline>Exercise</Headline>
      <PickedColors />
      <ColorPicker />
    </StyledExercisePage>
  );
};

export default Exercise;
