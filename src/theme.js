// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brandLight: {
      primary: "#FFFFFF",
      secondary: "#E5E5E5",
      primaryText: "#000000",
      secondaryText: "#5C1BE5",
    },
    brandDark: {
      primary: "#242323",
      secondary: "#635F5F",
      primaryText: "#FFFFFF",
      secondaryText: "#B49BEB",
    },
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});
