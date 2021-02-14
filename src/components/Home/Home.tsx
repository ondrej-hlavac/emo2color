import React from "react";
import { routes } from "routes";
import { Link } from "components/styled/atoms/StyledLink";
import { LinkText } from "components/styled/atoms/StyledLinkText";
import { Headline } from "components/styled/atoms/Headline";
import { StyledHomePage } from "components/styled/pages/StyledHomePage";
import { Container } from "components/styled/wrappers/Container";
import { Paragraph } from "components/styled/atoms/Paragraph";

const Home = () => {
  return (
    <StyledHomePage>
      {/* <h1>Welcome to<br/> Emo2color</h1> */}
      <Container>
        <Headline>Emo2color</Headline>
        <Paragraph>
          "Emotions to color" is a therapy utility app -&nbsp;recently in beta.
          You can save the results of therapy exercise to your image folder to
          consult with your therapist. If you are therapist, propably do not
          have to look at <LinkText to={routes.HOWTO}>how to use</LinkText>, but
          you are welcome to use this app to save some paper and crayons with
          your clients. :)
        </Paragraph>
        <Link to={routes.EXERCISE}>
          <span>Start therapy</span>
        </Link>
      </Container>
    </StyledHomePage>
  );
};

export default Home;
