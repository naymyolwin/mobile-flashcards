import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import Colors from "../constants/Colors";

const EditCardScreen = () => {
  return (
    <View>
      <View>
        <MyTextInput placeholder="Question" />
        <MyTextInput placeholder="Answer" />
      </View>
      <View style={styles.container}>
        <MyButton
          title="Delete"
          style={{ backgroundColor: Colors.light, width: "60%" }}
        />
        <MyButton
          title="Save"
          style={{ backgroundColor: "green", width: "60%" }}
        />
      </View>
    </View>
  );
};

export default EditCardScreen;

const styles = StyleSheet.create({
  container: {},
});
