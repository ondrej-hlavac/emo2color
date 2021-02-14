import React, { useContext } from "react";
import { StyledColorsList } from "../../../../components/styled/lib/StyledColorsList";
import { StyledWidgetWrapper } from "../../../styled/lib/StyledWidgetWrapper";
import { Context as ColorsContext } from "../../../../context/ColorsContext";
import { IColorObj } from "../../../../interfaces/IColorObj";
import { format } from "date-fns";

const ListItem = (exerciseColor: any) => {
  // TODO: remove nesting
  const { color, time } = exerciseColor.exerciseColor;
  return (
    <li className="list-item">
      <div
        style={{
          flexGrow: 1,
          minHeight: "40px",
          minWidth: "50px",
          backgroundColor: color,
        }}
      />
      <p className="time-column">{format(time, "HH:mm _ MMMM do yyyy")}</p>
    </li>
  );
};

const ForTherapistWidget = () => {
  const { exerciseColors } = useContext(ColorsContext);

  return (
    <StyledWidgetWrapper>
      <h2 className="headline">List of colors with time</h2>
      <StyledColorsList>
        <ol className="list-body">
          {exerciseColors.map((exerciseColor: IColorObj, index: number) => {
            return <ListItem exerciseColor={exerciseColor} key={index} />;
          })}
        </ol>
      </StyledColorsList>
    </StyledWidgetWrapper>
  );
};

export default ForTherapistWidget;
