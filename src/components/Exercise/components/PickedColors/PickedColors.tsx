import React from 'react';
import { IColorObj } from '../../../../interfaces/IColorObj';

interface IProps {
  colors: IColorObj[];
}

const PickedColors = ({ colors }: IProps) => {
  return (
    <div>
      {
        colors.map((color) => {
          return <span key={`key_vypis_${color.time}`}>{JSON.stringify(color)}</span>;
        })
      }
    </div>
  );
};

export default PickedColors;