import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";

const EditDeckScreen = (props) => {
  return (
    <View>
      <Text style={styles.title}>Edit Card</Text>
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

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
});
