import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Card, Filter } from "../../../components";
import { CARD_CONFIG, FILTER_OPTIONS } from "./constants";
import { COLORS, DEVICE } from "../../../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-self: center;

  @media ${DEVICE.TABLET} {
    align-self: flex-end;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${DEVICE.TABLET} {
    flex-direction: row;
  }
`;

const Loading = styled.span`
  font-weight: bold;
`;

const ErrorMessage = styled.span`
  color: ${COLORS.SCARLET};
`;

/**
 * Represents a helping function to parse
 * filter options to the right format.
 *
 * @param {array} options - The current date to show on filter options.
 *
 * @returns {array} - Returns the corret format.
 * @example
 * [
 *  {
 *    value: "MONTH"
 *    text: "This month"
 *  },
 * {
 *    value: "YEAR"
 *    text: "This year"
 *  }
 * ]
 */
function parseFilterOptions(options) {
  let tempOptions = [];

  options.forEach((option) => {
    tempOptions.push({
      value: option.time_unit,
      text: option.time_unit,
    });
  });

  return tempOptions;
}

/**
 * Represents the Header container where Card and Filter components
 * are rendered.
 *
 * @constant {string, number} selectectFilter - The current selected filter on Filter component
 * @constant {array} cardsData - The cards API response
 * @constant {boolean} cardsListError - The control of card list error feedback
 * @constant {boolean} isLoading - The control of card list loading message when data is fetching
 * @constant {Object} requestPayload - The payload for cards API request
 */

function Header() {
  const [selectectFilter, setSelectedFilter] = React.useState("MONTH");
  const [cardsData, setCardsData] = React.useState(null);
  const [cardsListError, setCardsListError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [requestPayload, setRequestPayload] = React.useState({
    time_unit: "MONTH",
    time_unit_count: 1,
  });

  const filterOptions = parseFilterOptions(FILTER_OPTIONS);

  /**
   * Handles the filter onChange
   * @param {object} event - The value of selected options
   */
  function handleFilterChange(event) {
    const currentFilter = event.target.value;
    const currentPayload = FILTER_OPTIONS.filter(
      (option) => currentFilter === option.time_unit
    );

    setSelectedFilter(currentFilter);
    setRequestPayload(...currentPayload);
  }
  /**
   * Handles the card data fetching. When it starts to fecht data
   * isLoading is seted to true and the loading message
   * is rendered when the requests is completed, isLoading is seted
   * to false redering the component. If requests was done successfully
   * the Card list is rendered, if not, the error message will be.
   *
   * If responses have a different status of ok, it sets an error.
   * @param  {object} requestPayload - The payload for cards API request
   */
  async function fetchData(requestPayload) {
    setIsLoading(true);

    try {
      const response = await axios.get("data.json");

      setIsLoading(false);

      if (response?.data.status !== "ok") {
        setCardsListError(true);
      }

      setCardsData(response.data.data);
    } catch (error) {
      setIsLoading(false);
      setCardsListError(true);
    }
  }

  React.useEffect(() => {
    fetchData(requestPayload);
  }, [requestPayload]);

  if (isLoading) {
    return (
      <Container>
        <Loading data-testid="loading">Loading data...</Loading>
      </Container>
    );
  }

  return (
    <Container>
      <FilterWrapper>
        <Filter
          testeId="filter"
          selectectValue={selectectFilter}
          options={filterOptions}
          handleChange={handleFilterChange}
        />
      </FilterWrapper>
      {cardsListError ? (
        <ErrorMessage data-testid="error">
          An error occurred when fetch the cards list, please try again.
        </ErrorMessage>
      ) : (
        <CardsWrapper data-testid="cards">
          {cardsData &&
            Object.keys(cardsData).map((card) => (
              <Card
                bgColor={CARD_CONFIG[card].bgColor}
                key={card}
                title={CARD_CONFIG[card].title}
                currentPeriod={cardsData[card].current_period}
                lastPeriod={cardsData[card].last_period}
              />
            ))}
        </CardsWrapper>
      )}
    </Container>
  );
}

export default Header;
