import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import PickedColors from './components/PickedColors';

interface IPickedColor {
  color: string;
  time: number;
}

const Exercise = () => {
  const [pickedColors, setPickedColors] = useState<IPickedColor[]>([]);

  const addColor = (color: string) => {
    const ColorInTime: IPickedColor = {
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