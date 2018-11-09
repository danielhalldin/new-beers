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
      <FlipContainer rotate={this.props.rotate}>
        <Flipper flipped={this.state.flipped} onClick={this.flip}>
          <Beer data={this.props.data} admin={this.props.admin} />
        </Flipper>
      </FlipContainer>
    );
  }
}

export default Card;
