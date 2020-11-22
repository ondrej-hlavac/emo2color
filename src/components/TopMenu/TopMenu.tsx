import React from 'react';
import { Link } from "react-router-dom";
import { StyledTopMenu } from '../styled/lib/StyledTopMenu';

const TopMenu = () => {
  return (
    <StyledTopMenu>
        <Link to="/">
          <svg height="100" width="100">
            <circle cx="22" cy="22" r="20" stroke="white" strokeWidth="3" fill="tomato" />
          </svg> 
        </Link>
        <Link to="/how-to-use">how to use?</Link>
    </StyledTopMenu>
  );
};

export default TopMenu;