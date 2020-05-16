import React, { FunctionComponent } from "react";
import Beer from "./Beer";

import { Beer as BeerType } from "types/Beer";

import { FlipContainer, Flipper } from "./styles";

const Card: FunctionComponent<{
  rotate: number;
  data: BeerType;
  admin: boolean;
}> = ({ rotate, data, admin }) => {
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
