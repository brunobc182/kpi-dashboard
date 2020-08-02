import { COLORS } from "../../../theme";

export const CARD_CONFIG = {
  active_source: { bgColor: COLORS.POMEGRANATE, title: "Active sourcing" },
  weekly_active: { bgColor: COLORS.BLUE_RIBBON, title: "Weekly active" },
  nps: { bgColor: COLORS.JADE, title: "NPS" },
};

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
