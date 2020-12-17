import React, { useCallback, useContext } from "react";
import { StyledPickedColors } from "../../../styled/lib/StyledPickedColors";
import { Context as ColorsContext } from "../../../../context/ColorsContext";

const PickedColors = () => {
  const { exerciseColors } = useContext(ColorsContext);

  const newColor = useCallback(() => {
    const lastColObj = exerciseColors[exerciseColors.length - 1];
    const colorHex = lastColObj && lastColObj.color;
    if (colorHex) {
      return colorHex;
    }

    return "#ffffff";
  }, [exerciseColors]);

  return (
    <StyledPickedColors>
      <div
        style={{
          backgroundColor: newColor(),
          width: 100,
          height: 100,
          margin: "auto",
        }}
      />
    </StyledPickedColors>
  );
  {
    /* {
    colors.map((color) => {
      return <span key={`key_vypis_${color.time}`}>{JSON.stringify(color)}</span>;
    })
  } */
  }
};

export default PickedColors;
