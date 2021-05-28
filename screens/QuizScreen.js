import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

const QuizScreen = (props) => {
  return (
    <View>
      <Text>Quiz Screen {props.route.params.name}</Text>
      <Card />
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({});
