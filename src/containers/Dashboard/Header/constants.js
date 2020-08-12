import { COLORS } from "../../../theme";

/**
 * Represents the card title and bgColor props
 *
 * @constant
 * @type {object}.
 */
export const CARD_CONFIG = {
  active_source: {
    bgColor: `linear-gradient(120deg, ${COLORS.BRINK_PINK} 0%, ${COLORS.POMEGRANATE} 40%)`,

    title: "Active sourcing",
  },
  weekly_active: {
    bgColor: `linear-gradient(120deg, ${COLORS.CORNFLOWER_BLUE} 0%, ${COLORS.BLUE_RIBBON} 40%)`,
    title: "Weekly active",
  },
  nps: {
    bgColor: `linear-gradient(120deg, ${COLORS.PASTEL_GREEN} 0%, ${COLORS.JADE} 40%)`,
    title: "NPS",
  },
};

/**
 * Represents the filter optins
 *
 * @constant
 * @type {object}.
 */

export const FILTER_OPTIONS = [
  {
    time_unit: "WEEK",
    time_unit_count: 1,
  },
  {
    time_unit: "MONTH",
    time_unit_count: 1,
  },
  {
    time_unit: "QUARTER",
    time_unit_count: 1,
  },
  {
    time_unit: "YEAR",
    time_unit_count: 1,
  },
];
