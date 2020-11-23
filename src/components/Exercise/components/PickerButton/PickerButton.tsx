import React from 'react';
import { StyledPickerButton } from '../../../styled/lib/StyledPickerButton';

interface IProps {
  color: string;
  addColor: (color: string) => void;
}

const PickerButton = ({color, addColor}: IProps) => {
  return (
    <StyledPickerButton type="button" onClick={() => addColor(color)}>
      <div style={{backgroundColor: color, width: 70, height: 70}} />
    </StyledPickerButton>
  )
};

export default PickerButton;