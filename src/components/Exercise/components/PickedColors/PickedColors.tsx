import React, { useContext } from 'react';
import { StyledPickedColors } from '../../../styled/lib/StyledPickedColors';
import { Context as ColorsContext } from '../../../../context/ColorsContext';
import { IColorObj } from 'interfaces/IColorObj';
import { ConfirmColorButton } from 'components/styled/atoms/ColorConfirmButton';

interface IProps {
  confirmColor: () => void;
}

const PickedColors = ({ confirmColor }: IProps) => {
  const { currentColor, addExerciseColor } = useContext(ColorsContext);

  const addColor = (color: string) => {
    const ColorInTime: IColorObj = {
      color: color,
      time: Date.now(),
    };
    addExerciseColor(ColorInTime);
    confirmColor();
  };

  return (
    <StyledPickedColors>
      <div
        style={{
          backgroundColor: currentColor,
          width: '100%',
          height: '100%',
          margin: 'auto',
        }}
      />
      {currentColor !== '#ffffff' && (
        <ConfirmColorButton
          style={{ position: 'absolute', top: '30%', left: 'calc' }}
          onClick={() => addColor(currentColor)}
        >
          confirm color
        </ConfirmColorButton>
      )}
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
