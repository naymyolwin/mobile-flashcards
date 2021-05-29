import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";

const AddCardScreen = () => {
  return (
    <View>
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

const styles = StyleSheet.create({});
