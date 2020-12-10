import React, { useCallback } from "react";
import { IColorObj } from "../../../../interfaces/IColorObj";
import { StyledPickedColors } from "../../../styled/lib/StyledPickedColors";

interface IProps {
  colors: IColorObj[];
}

const PickedColors = ({ colors }: IProps) => {
  const newColor = useCallback(() => {
    const lastColObj = colors[colors.length - 1];
    const colorHex = lastColObj && lastColObj.color;
    if (colorHex) {
      return colorHex;
    }

    return "#ffffff";
  }, [colors]);

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
