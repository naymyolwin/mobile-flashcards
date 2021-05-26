import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

const SecondScreen = (props) => {
  return (
    <View>
      <Text>2nd Screen {props.route.params.name}</Text>
      <Card />
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({});
