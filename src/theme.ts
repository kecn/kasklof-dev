import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const overrides = {
  styles: {
    global: {
      "html body": {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900"),
        lineHeight: "base",
      },
    },
  },
};

export default extendTheme(overrides);
