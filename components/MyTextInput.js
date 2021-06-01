import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Colors from "../constants/Colors";

const MyTextInput = (props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="grey"
        autoCapitalize="sentences"
        value={props.deckInput}
        onChangeText={(text) => {
          props.setDeckInput(text);
        }}
      />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    margin: 15,
    height: 40,
    borderColor: Colors.light,
    borderWidth: 1,
    borderRadius: 10,
  },
});
