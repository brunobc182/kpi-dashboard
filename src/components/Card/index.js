import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: ${({ bgColor }) => bgColor};
  padding: 40px;
`;

const Title = styled.h4`
  color: #ffffff;
  margin: 0;
  font-weight: 500;
`;
const CurrentPeriod = styled.p`
  color: #ffffff;
  margin: 16px 0;
  font-size: 28px;
  font-weight: 700;
`;
const LastPeriod = styled.span`
  color: #ffffff;
  margin: 0;
`;

function Card({ title, currentPeriod, lastPeriod, bgColor, ...props }) {
  return (
    <Wrapper bgColor={bgColor}>
      <Title>{title}</Title>
      <CurrentPeriod>{currentPeriod}</CurrentPeriod>
      <LastPeriod>{`${lastPeriod} Last period`}</LastPeriod>
    </Wrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  currentPeriod: PropTypes.number,
  lastPeriod: PropTypes.number,
  bgColor: PropTypes.string,
};

Card.defaultProps = {
  title: "Card title",
  currentPeriod: 20,
  lastPeriod: 30,
  bgColor: "#0a0a0a",
};

export default Card;
