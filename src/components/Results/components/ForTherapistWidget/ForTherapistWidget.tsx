import { StyledColorsList } from "../../../../components/styled/lib/StyledColorsList";
import React from "react";
import { StyledWidgetWrapper } from "../../../styled/lib/StyledWidgetWrapper";

const ListItem = () => {
  return (
    <li className="list-item">
      <div
        style={{
          flexGrow: 1,
          minHeight: "40px",
          minWidth: "50px",
          backgroundColor: "black",
        }}
      />
      <p className="time-column">14:45 11-12-2020</p>
    </li>
  );
};

const ForTherapistWidget = () => {
  return (
    <StyledWidgetWrapper>
      <h2 className="headline">List of colors with time</h2>
      <StyledColorsList>
        <ol className="list-body">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ol>
      </StyledColorsList>
    </StyledWidgetWrapper>
  );
};

export default ForTherapistWidget;
