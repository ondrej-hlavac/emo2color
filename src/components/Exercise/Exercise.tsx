import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import PickedColors from './components/PickedColors';
import { IColorObj } from '../../interfaces/IColorObj';

const Exercise = () => {
  const [pickedColors, setPickedColors] = useState<IColorObj[]>([]);

  const addColor = (color: string) => {
    const ColorInTime: IColorObj = {
      color: color,
      time: Date.now(),
    }
    setPickedColors([...pickedColors, ColorInTime]);
  }

  return (
    <>
      <h1>Exercise</h1>
      <PickedColors colors={pickedColors} />
      <ColorPicker addColor={addColor} />
    </>
  );
};

export default Exercise;