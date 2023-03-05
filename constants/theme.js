import { Dimensions } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../Metrics";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  transparentBlack1: "rgba(2, 2, 2, 0.1)",
  transparentBlack3: "rgba(2, 2, 2, 0.3)",
  transparentBlack5: "rgba(2, 2, 2, 0.5)",
  transparentBlack7: "rgba(2, 2, 2, 0.7)",
  transparentBlack9: "rgba(2, 2, 2, 0.9)",

  transparentGray: "rgba(77,77,77, 0.8)",
  transparentDarkGray: "rgba(20,20,20, 0.9)",

  transparent: "transparent",
};

export const TEXTS = {
  titleText: {
    fontSize: moderateScale(35),
    fontWeight: "bold",
    color: "#172b4d",
    marginBottom: verticalScale(30),
    marginTop: verticalScale(10),
  },
};

export const BODY = {
  middleSection: {
    marginLeft: horizontalScale(30),
  },
};

const appTheme = { COLORS, TEXTS, BODY };

export default appTheme;
