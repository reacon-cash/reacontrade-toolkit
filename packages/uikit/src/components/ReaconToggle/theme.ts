import { darkColors, lightColors } from "../../theme/colors";
import { ReaconToggleTheme } from "./types";

export const light: ReaconToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: ReaconToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
