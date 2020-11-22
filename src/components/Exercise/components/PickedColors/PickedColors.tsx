import React from 'react';

interface IProps {
  colors: any[];
}

const PickedColors = ({ colors }: IProps) => {
  return (
    <div>
      {
        colors.map((color) => {
          return <span>{JSON.stringify(color)}</span>;
        })
      }
    </div>
  );
};

export default PickedColors;