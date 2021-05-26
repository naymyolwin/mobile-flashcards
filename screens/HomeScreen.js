import React from "react";
import { Button, StyleSheet, StatusBar, Text, View } from "react-native";
import Colors from "../constants/Colors";

const HomeScreen = (props) => {
  const name = "hello";
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={Colors.dark} />
      <Text>Home Screen !!!</Text>
      <Button
        title="Second Screen"
        onPress={() => {
          props.navigation.navigate("SecondScreen", { name });
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
