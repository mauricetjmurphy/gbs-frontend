import React from "react";
import styled, { keyframes } from "styled-components";

const bounceDelay = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 40px;
  margin: 0 auto;
  text-align: center;
  font-size: 10px;
`;

const Bounce = styled.div`
  width: 30px;
  height: 30px;
  background-color: #333;
  border-radius: 100%;
  display: inline-block;
  animation: ${bounceDelay} 1.4s infinite ease-in-out both;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;

export const Spinner: React.FC = () => (
  <SpinnerWrapper>
    <Bounce />
    <Bounce />
    <Bounce />
  </SpinnerWrapper>
);
