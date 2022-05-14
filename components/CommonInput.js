import React, { Component } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Colors, Font } from "../Constants";
import { Feather as Icon } from "@expo/vector-icons";

export default CustomInput = (props) => {
  const styles = StyleSheet.create({
    container: {
      width: 330,
      flexDirection: "row",
      backgroundColor: Colors.lightGray,
      borderRadius: 15,
      margin: 12,
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    input: {
      // backgroundColor: "#00FF0030",
      fontSize: Font.p2.size,
      flex: 1,
      // paddingVertical: 10,
      // fontFamily: "LilitaOne_400Regular"
    },
  });

  return (
    <View style={styles.container}>
      {props.iconName ? (
        <Icon
          name={props.iconName}
          size={Font.p1.size}
          color={Colors.gray}
          style={{
            marginRight: 10,
            //   backgroundColor: "#FF000030",
          }}
        />
      ) : null}
      <TextInput
        placeholderTextColor={Colors.gray}
        style={{ ...styles.input, ...props.style }}
        {...props}
      >
        {props.children}
      </TextInput>
    </View>
  );
};
