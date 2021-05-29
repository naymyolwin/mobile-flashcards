import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Card from "../components/Card";
import MyButton from "../components/MyButton";
import Colors from "../constants/Colors";

const QuizScreen = (props) => {
  let animatedValue = new Animated.Value(0);
  let value = 0;

  let frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });
  let backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const flipCard = () => {
    if (value >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        useNativeDriver: true,
      }).start(() => {
        value = 0;
      });
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        useNativeDriver: true,
      }).start(() => {
        value = 90;
      });
    }
  };

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <View>
      <Text style={styles.title}>Quiz 1/10</Text>
      <View>
        <Animated.View style={[styles.paperFront, frontAnimatedStyle]}>
          <Card onPress={flipCard} text="Hello" />
        </Animated.View>

        <Animated.View style={[styles.paperBack, backAnimatedStyle]}>
          <Card onPress={flipCard} text="World" />
        </Animated.View>
      </View>
      <View>
        <MyButton title="Corect" style={{ backgroundColor: "green" }} />
        <MyButton title="Incorrect" style={{ backgroundColor: "grey" }} />
        <MyButton
          title="NEXT"
          style={{ backgroundColor: Colors.light, width: "80%" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
  container: {
    flex: 1,
  },
  paperFront: {
    // marginHorizontal: 15,
    // minHeight: 200,
    // borderRadius: 5,
    // marginBottom: 15,
    backfaceVisibility: "hidden",
  },
  paperBack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    //top: -245,
    // marginHorizontal: 15,
    // minHeight: 200,
    // borderRadius: 5,
    // marginBottom: 15,
    backfaceVisibility: "hidden",
  },
});

export default QuizScreen;
