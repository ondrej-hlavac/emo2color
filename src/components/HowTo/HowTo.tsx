import { Headline } from 'components/styled/atoms/Headline';
import React from 'react';
import { routes } from '../../routes';
import { Link } from 'components/styled/atoms/StyledLink';
import { StyledHowToPage } from 'components/styled/pages/StyledHowToPage';

const HowTo = () => {
  return (
    <StyledHowToPage>
      <Headline>how to use Emo2color?</Headline>
      <section>
        <h3>1) Close your eyes.</h3>
      </section>
      <section>
        <h3>2) Feel the emotion you&nbsp;have right&nbsp;now.</h3>
      </section>
      <section>
        <h3>3) Try to pick a color by "taste" of&nbsp;your&nbsp;emotion.</h3>
      </section>
      <section>
        <h3>4) Clean the color board and&nbsp;let your emotion go away.</h3>
      </section>
      <Link to={routes.EXERCISE}>Start therapy</Link>
    </StyledHowToPage>
  );
};

export default HowTo;
