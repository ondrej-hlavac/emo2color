import React from 'react';
import PickerButton from '../PickerButton';

const vodovky: string[] = [
  '#E6EBEE',
  '#DFAD72',
  '#EEDF3C',
  '#FF6724',
  '#F4523B',
  '#D94E64',
  '#6C5658',
  '#2DBC7E',
  '#008C8D',
  '#4A8EE3',
  '#758BE7',
  '#3D3F4B',
];

const ColorPicker = () => {
  return (
    <div className="color-picker-palette">
      {vodovky.map((color: string) => {
        return <PickerButton color={color} key={`key${color}`} />;
      })}
    </div>
  );
};

export default ColorPicker;
