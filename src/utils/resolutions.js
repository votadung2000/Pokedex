import {
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

const { height, width } = Dimensions.get("window");
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 592;
const standardLength = width > height ? width : height;
const offset =
  width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight;

const deviceHeight =
  isIphoneX() || Platform.OS === "android"
    ? standardLength - offset
    : standardLength;


export function RFPercentage(percent) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}


// guideline height for standard 5" device screen is 680
export function RFValue(fontSize, standardScreenHeight = 680) {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}


// padding, margin, fontSize, ....
export const scale = size => width / guidelineBaseWidth * parseInt(size);


// width
export const hScale = size => height / guidelineBaseHeight * parseInt(size);


// height
export const wScale = (size, factor = 0.5) => parseInt(size) + (scale(parseInt(size)) - parseInt(size)) * factor;