import React from 'react';

interface IProps {
  color: string;
  addColor: (color: string) => void;
}

const PickerButton = ({color, addColor}: IProps) => {
  return (
    <button type="button" onClick={() => addColor(color)}>
      <div style={{backgroundColor: color, width: 70, height: 70}} />
    </button>
  )
};

export default PickerButton;