import React, { useCallback } from 'react';
import { IColorObj } from '../../../../interfaces/IColorObj';

interface IProps {
  colors: IColorObj[];
}

const PickedColors = ({ colors }: IProps) => {
  
  const newColor = useCallback(
    () => {
      const lastColObj = colors.pop();
      const colorHex = lastColObj?.color
      if (colorHex) {
        return colorHex;
      }
      return '#ffffff';
    },
    [colors],
  );

  return (
    <div>
      <div style={{ backgroundColor: newColor, width: 70, height: 70 }} />
      {/* {
        colors.map((color) => {
          return <span key={`key_vypis_${color.time}`}>{JSON.stringify(color)}</span>;
        })
      } */}
    </div>
  );
};

export default PickedColors;