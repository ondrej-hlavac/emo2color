import React from "react";
import { withRouter, useLocation } from "react-router-dom";
import { routes } from "routes";
import { StyledBottomNavigation } from "components/styled/lib/StyledBottomNavigation";
// import { Button } from "components/styled/atoms/StyledButton";
import { Link } from "components/styled/atoms/StyledLink";

const BottomNavigation = () => {
  const { pathname } = useLocation();

  switch (pathname) {
    case routes.EXERCISE:
      return (
        <StyledBottomNavigation>
          <Link to={routes.RESULTS}>End Practice</Link>
        </StyledBottomNavigation>
      );
    case routes.RESULTS:
      return (
        <StyledBottomNavigation>
          {/* <Button>start new</Button> */}
          <Link to={routes.EXERCISE}>Back to exercise</Link>
        </StyledBottomNavigation>
      );
    default:
      return null;
  }
};

export default withRouter(BottomNavigation);
