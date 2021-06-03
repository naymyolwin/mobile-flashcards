import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MyButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={props.disabled}
        activeOpacity={0.55}
        onPress={props.onPress}
        style={{ ...styles.appButtonContainer, ...props.style }}
      >
        <Text style={styles.appButtonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "50%",
  },
  appButtonText: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
