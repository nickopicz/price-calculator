import react from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function SpecialButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 7.5,
        borderRadius: 100,
        ...props.style,
      }}
    >
      <Text style={props.textStyle}>
        {props.enabled && props.enabled.state
          ? props.enabled.text
          : props.children
          ? props.children
          : ""}
      </Text>
    </TouchableOpacity>
  );
}
