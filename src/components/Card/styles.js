import styled from "styled-components";

const FlipContainer = styled.div`
  margin: 30px;
  width: 210px;
  height: 330px;
  transform: ${props => "rotate(" + props.rotate + "deg)"};
  perspective: 1000px;
`;

const Flipper = styled.div`
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  transform: ${props =>
    "rotateY(" + (props.flipped ? 180 : 0) + "deg) translateX(-15px)"};
`;

export { FlipContainer, Flipper };
