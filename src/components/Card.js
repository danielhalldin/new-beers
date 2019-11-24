import React from "react";
import Beer from "./Beer";
import { FlipContainer, Flipper } from "./Card.styles";

const Card = ({ rotate, data, admin }) => {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <FlipContainer rotate={rotate}>
      <Flipper flipped={flipped} onClick={() => setFlipped(!flipped)}>
        <Beer data={data} admin={admin} />
      </Flipper>
    </FlipContainer>
  );
};

export default Card;
