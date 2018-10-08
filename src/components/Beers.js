import React, { Component } from "react";
import Card from "./Card";
import { BeersContainer, Header } from "./Beers.styles";

class Beers extends Component {
  render() {
    const name = this.props.decoratedLatest.name;
    const beers = this.props.decoratedLatest.beers.map(beer => {
      beer.rotate =
        Math.random() < 0.5 ? -3 * Math.random() : 3 * Math.random();
      return (
        <div key={beer.id}>
          <Card data={beer} />
        </div>
      );
    });

    return (
      <React.Fragment>
        <Header changeStock={this.props.changeStock}>{name}</Header>
        <BeersContainer>{beers}</BeersContainer>
      </React.Fragment>
    );
  }
}

export default Beers;
