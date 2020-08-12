import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { COLORS, DEVICE } from "../../theme";

/**
 * This styled components is responsible for our main
 * card style. The property background allow us to
 * make the two circles working according of our
 * design specs.
 */

const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
  background: radial-gradient(
      circle at 100% 50px,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.3) 20%,
      transparent 10%
    ),
    radial-gradient(
      circle at 250px 150px,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.3) 30%,
      transparent 10%
    ),
    ${({ bgColor }) => bgColor};
  padding: 40px;
  border-radius: 4px;
  margin: 16px;

  @media ${DEVICE.TABLET} {
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Title = styled.h4`
  color: ${COLORS.WHITE};
  margin: 0;
  font-weight: 500;
`;

const CurrentPeriod = styled.p`
  color: ${COLORS.WHITE};
  margin: 16px 0;
  font-size: 32px;
  font-weight: 700;
`;

const LastPeriod = styled.span`
  color: ${COLORS.WHITE};
  margin: 0;
`;

/**
 * Represents the component Card.
 *
 * @param {string} title - The title of the card.
 * @param {number} currentPeriod - The current period of the card.
 * @param {number} lastPeriod - The lastPeriod of the card.
 * @param {string} bgColor - Thhe main color of card background.
 */
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
  bgColor: `${COLORS.COD_GRAY}`,
};

export default Card;
