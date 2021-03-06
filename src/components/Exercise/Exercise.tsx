import React, { useContext, useEffect, useState } from 'react';
import { Context as ColorsContext } from '../../context/ColorsContext';
import ColorPicker from './components/ColorPicker';
import PickedColors from './components/PickedColors';
import { StyledExercisePage } from '../styled/pages/StyledExercisePage';
import { Headline } from 'components/styled/atoms/Headline';

// 1 close eyes and feel the emotion

// 2 choose color
// Screen big picker
// a/ color picker
// b/ confirmation
// Screen big color
// c/ scratch card ux
//? d/ you are doing well, keep going

// 3 let the color fade away

export enum StepsEnum {
  closeEyes = 'closeEyesAndFeelTheEmotion',
  pickColor = 'pickColor',
  letEmotionFadeAway = 'letEmotionFadeAway',
}

type TimerType = ReturnType<typeof setTimeout> | any;

const Exercise = () => {
  let timer: TimerType;
  const { setCurrentColor } = useContext(ColorsContext);
  const [step, setStep] = useState(StepsEnum.closeEyes);

  const setNoColor = () => {
    setCurrentColor('#ffffff');
  };

  const colorConfirmed = () => {
    setStep(StepsEnum.letEmotionFadeAway);
  };

  useEffect(() => {
    console.log('timeout', step);
    timer = setTimeout(() => {
      switch (step) {
        case StepsEnum.closeEyes:
          return setStep(StepsEnum.pickColor);
        case StepsEnum.letEmotionFadeAway:
          setNoColor();
          return setStep(StepsEnum.closeEyes);
        default:
          setNoColor();
          return null;
      }
    }, 5500);
    return () => {
      // setStep(StepsEnum.closeEyes);
      setNoColor();
      return clearTimeout(timer);
    };
  }, [step]);

  return (
    <StyledExercisePage>
      <Headline>Exercise</Headline>
      <PickedColors confirmColor={colorConfirmed} step={step} />
      <ColorPicker />
    </StyledExercisePage>
  );
};

export default Exercise;
