import { Headline } from "components/styled/atoms/Headline";
import React from "react";
import { routes } from "../../routes";
import { Link } from "components/styled/atoms/StyledLink";
import { StyledHowToPage } from "components/styled/pages/StyledHowToPage";

const HowTo = () => {
  return (
    <StyledHowToPage>
      <Headline>how to use Emo2color?</Headline>
      <section>
        <h3>1) Close your eyes</h3>
      </section>
      <section>
        <h3>2) Feel the emotion you have right now.</h3>
      </section>
      <section>
        <h3>3) Try to pick a color by "taste" of your emotion.</h3>
      </section>
      <section>
        <h3>4) Let your emotion go away and repeat step 1.</h3>
      </section>
      <Link to={routes.EXERCISE}>Start therapy</Link>
    </StyledHowToPage>
  );
};

export default HowTo;
