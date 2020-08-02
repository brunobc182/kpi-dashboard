export const COLORS = {
  SCARLET: "#FF2400",
  WHITE: "#FFFFFF",
  POMEGRANATE: "#F34723",
  BLUE_RIBBON: "#0066FF",
  JADE: "#00A86B",
};

const SIZE = {
  MOBILE_SMALL: 320,
  MOBILE_MEDIUM: 375,
  MOBILE_LARGE: 425,
  TABLET: 768,
  LAPTOP: 1024,
  DESKTOP: 1440,
  DESKTOP_LARGE: 2560,
};

export const DEVICE = {
  MOBILE_SMALL: `(min-width: ${SIZE.MOBILE_SMALL}px)`,
  MOBILE_MEDIUM: `(min-width: ${SIZE.MOBILE_MEDIUM}px)`,
  MOBILE_LARGE: `(min-width: ${SIZE.MOBILE_LARGE}px)`,
  TABLET: `(min-width: ${SIZE.TABLET}px)`,
  LAPTOP: `(min-width: ${SIZE.LAPTOP}px)`,
  DESKTOP: `(min-width: ${SIZE.DESKTOP}px)`,
  DESKTOP_LARGE: `(min-width: ${SIZE.DESKTOP_LARGE}px)`,
};