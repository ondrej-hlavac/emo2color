import React, { useContext } from 'react';
import { Context as ColorsContext } from '../../../../context/ColorsContext';
import { StyledPickerButton } from '../../../styled/lib/StyledPickerButton';

interface IProps {
  color: string;
}

const PickerButton = ({ color }: IProps) => {
  const { setCurrentColor } = useContext(ColorsContext);

  const setSelectedColor = (color: string) => {
    setCurrentColor(color);
  };

  return (
    <StyledPickerButton type="button" onClick={() => setSelectedColor(color)}>
      <div style={{ backgroundColor: color, width: 70, height: 70 }} />
    </StyledPickerButton>
  );
};

export default PickerButton;
