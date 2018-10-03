import React, { Component } from "react";
import Beer from "./Beer";
import { FlipContainer, Flipper } from "./Card.styles";

class Card extends Component {
  state = {
    flipped: false
  };

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    return (
      <FlipContainer data={this.props.data}>
        <Flipper flipped={this.state.flipped} onClick={this.flip}>
          <Beer data={this.props.data} />
        </Flipper>
      </FlipContainer>
    );
  }
}

export default Card;
