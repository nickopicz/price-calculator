import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InputScreen from "../screens/InputScreen";

const Stack = createStackNavigator();

const StackScreens = (props) => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={InputScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackScreens;
