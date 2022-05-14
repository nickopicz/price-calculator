import react, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { User, Container } from "../components/classes";
import SpecialButton from "../components/buttons/button";
import { setPrice, setUserCount, setDuration } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../components/CommonInput";

export default function InputScreen({ props }) {
  const dispatch = useDispatch();
  const [tempPrice, setTempPrice] = useState("");
  const [tempCount, setTempCount] = useState("");
  const [tempDuration, setTempDuration] = useState("");
  var totalPrice = useSelector((state) => state.priceRed.price);
  var userCount = useSelector((state) => state.userCountRed.userCount);
  var duration = useSelector((state) => state.durationRed.duration);

  var inputs = () => {
    if (totalPrice == "" || duration == "" || userCount == "") {
      return false;
    } else {
      return true;
    }
  };

  function onPress() {
    dispatch(setPrice(tempPrice));
    dispatch(setDuration(tempDuration));
    dispatch(setUserCount(userCount));
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CustomInput
          value={tempPrice}
          onChangeText={(tempPrice) => {
            setTempPrice(tempPrice);
          }}
          placeholder={"total cost of trip"}
          style={styles.input}
          // keyboardType="numeric"
        />
        <CustomInput
          value={tempDuration}
          onChangeText={(tempDuration) => {
            setTempDuration(tempDuration);
          }}
          placeholder={"Total duration of trip"}
          style={styles.input}
          // keyboardType="numeric"
        />
        <CustomInput
          //not causing errors, icon name at least
          iconName={"user"}
          value={tempCount}
          onChangeText={(tempCount) => {
            setTempCount(tempCount);
          }}
          placeholder={"Total # of Travelers"}
          style={styles.input}
          // keyboardType="numeric"
        />
        <SpecialButton
          style={styles.button}
          disabled={!inputs}
          onPress={() => {
            onPress();
            // props.navigation.navigate();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 10,
    justifyContent: "center",
  },
  button: {
    width: 200,
    height: 40,
    padding: 5,
  },
});
