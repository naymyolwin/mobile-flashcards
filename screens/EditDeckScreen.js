import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

const EditDeckScreen = (props) => {
  return (
    <View>
      <Card
        text="Card 1"
        onPress={() => {
          props.navigation.navigate("EditCard");
        }}
      />
    </View>
  );
};

export default EditDeckScreen;

const styles = StyleSheet.create({});
