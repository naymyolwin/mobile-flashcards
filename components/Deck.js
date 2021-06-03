import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const Deck = (props) => {
  if (Platform.OS === "ios") {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.55} onPress={props.onPress}>
          <View style={styles.container}>
            <View style={styles.deck}>
              <View>
                <Text>
                  {props.title} - {props.numberOfCard} Cards
                </Text>
              </View>
              {props.edit ? (
                <View style={styles.edit}>
                  <TouchableOpacity onPress={props.onEdit}>
                    <View style={styles.touch}>
                      <FontAwesome name="edit" size={24} color="black" />
                    </View>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  if (Platform.OS === "android") {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            //"rgba(183,28,28,.05)",
            "rgba(0,0,0,.05)",
            false
          )}
          useForeground={true}
          activeOpacity={0.55}
          onPress={props.onPress}
        >
          <View style={styles.deck}>
            <View>
              <Text>
                {props.title} - {props.numberOfCard} Cards
              </Text>
            </View>
            {props.edit ? (
              <View style={styles.edit}>
                <TouchableNativeFeedback onPress={props.onEdit}>
                  <View style={styles.touch}>
                    <FontAwesome name="edit" size={24} color="black" />
                  </View>
                </TouchableNativeFeedback>
              </View>
            ) : null}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
};

export default Deck;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,

    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.58,
    shadowRadius: 11.95,
  },

  deck: {
    flexDirection: "row",
    width: "80%",
    height: 75,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 15,
    overflow: "hidden",
  },
  edit: {
    height: 75,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderLeftColor: "#ccc",
    borderLeftWidth: 1,
    position: "absolute",
    right: 0,
  },
  touch: {
    height: 75,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
