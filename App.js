import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { Store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import StackScreens from "./navigation/Stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <StackScreens />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
