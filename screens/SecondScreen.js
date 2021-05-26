import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SecondScreen = (props) => {
  return (
    <View>
      <Text>2nd Screen {props.route.params.name}</Text>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({});
