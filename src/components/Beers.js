import React, { Component } from "react";
import Card from "./Card";
import { BeersContainer } from "./Beers.styles";

class Beers extends Component {
  render() {
    const beers = this.props.beers.map(beer => {
      beer.rotate =
        Math.random() < 0.5 ? -3 * Math.random() : 3 * Math.random();
      return (
        <div key={beer.id}>
          <Card data={beer} />
        </div>
      );
    });

    return <BeersContainer>{beers}</BeersContainer>;
  }
}

export default Beers;
