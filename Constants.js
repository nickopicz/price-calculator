import { Dimensions } from "react-native";
export const Colors = {
  black: "#000000",
  white: "#FFFFFF",
  red: "#FF2D43",
  green: "#75FB4C",
  gray: "#A0A1A3",
  lightGray: "#F5F6FA",
};

export const Dim = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export const Font = {
  h1: {
    size: 36,
    family: "LilitaOne_400Regular",
  },
  h2: {
    size: 32,
    family: "LilitaOne_400Regular",
  },
  h3: {
    size: 28,
    family: "LilitaOne_400Regular",
  },
  h4: {
    size: 24,
    family: "LilitaOne_400Regular",
  },
  p1: {
    size: 20,
    family: "LilitaOne_400Regular",
  },
  p2: {
    size: 18,
    family: "LilitaOne_400Regular",
  },
  p3: {
    size: 14,
    family: "LilitaOne_400Regular",
  },
  p4: {
    size: 12,
    family: "LilitaOne_400Regular",
  },
};
