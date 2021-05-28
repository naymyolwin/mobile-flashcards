import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";

import Colors from "../constants/Colors";

const AddDeckFormScreen = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>Please Enter the new Deck Name</Text>
        <MyTextInput placeholder="Deck Name" />
        <MyButton title="Add" />
      </View>
    </ScrollView>
  );
};

export default AddDeckFormScreen;

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    fontSize: 18,
    color: Colors.text,
  },
});
