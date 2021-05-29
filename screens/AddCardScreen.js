import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import Colors from "../constants/Colors";

const AddCardScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Add Card</Text>
      <View>
        <MyTextInput placeholder="Question" />
        <MyTextInput placeholder="Answer" />
      </View>
      <View style={styles.container}>
        <MyButton
          title="Save"
          style={{ backgroundColor: "green", width: "60%" }}
        />
      </View>
    </View>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
});
