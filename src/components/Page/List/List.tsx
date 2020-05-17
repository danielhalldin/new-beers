import React, { FunctionComponent } from "react";
import { ListContainer } from "./styles";
import Card from "./Card";
import { Beer as BeerType } from "types/Beer";

const List: FunctionComponent<{ data: [BeerType]; admin: boolean }> = ({
  data,
  admin,
}) => {
  const list = data.map((beer: BeerType) => {
    const rotation = Math.round(
      Math.random() < 0.5 ? -3 * Math.random() : 3 * Math.random()
    );
    const key = `${beer.systembolagetId}-${Math.random()}`;

    return <Card rotate={rotation} key={key} data={beer} admin={admin} />;
  });

  return <ListContainer>{list}</ListContainer>;
};

export default List;
