// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brandLight: {
      500: "#5C1BE5",
      600: "#5C1BE5",
      700: "#635F5F",
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
  initialColorMode: "dark",
  useSystemColorMode: false,
});
