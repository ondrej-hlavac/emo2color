import React from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import { routes } from "routes";
import { StyledBottomNavigation } from "components/styled/lib/StyledBottomNavigation";

const BottomNavigation = () => {
  const { pathname } = useLocation();

  switch (pathname) {
    case routes.EXERCISE:
      return (
        <StyledBottomNavigation>
          <Link className="bottom-nav-button" to={routes.RESULTS}>
            End practice
          </Link>
        </StyledBottomNavigation>
      );
    case routes.RESULTS:
      return (
        <StyledBottomNavigation>
          <Link className="bottom-nav-button" to={routes.EXERCISE}>
            Back to exercise
          </Link>
        </StyledBottomNavigation>
      );
    default:
      return null;
  }
};

export default withRouter(BottomNavigation);
