import styled from "styled-components/macro";

const FlipContainer = styled.div<{ rotate: number }>`
  margin: 30px;
  width: 210px;
  height: 330px;
  transform: ${(props) => "rotate(" + props.rotate + "deg)"};
`;

const Flipper = styled.div<{ flipped: boolean }>`
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  transform: ${(props) =>
    "rotateY(" + (props.flipped ? 180 : 0) + "deg) translateX(-15px)"};
`;

export { FlipContainer, Flipper };
