import React from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import TabBarIcon from "../components/TabBarIcon";

const test = () => {
  let animatedValue = new Animated.Value(0);
  let value = 0;

  animatedValue.addListener(({ value }) => {
    this.value = value;
  });

  let frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });
  let backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });
  let frontOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [1, 0],
  });

  let backOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [0, 1],
  });

  let elevationFront = animatedValue.interpolate({
    inputRange: [0, 25],
    outputRange: [10, 0],
  });

  let elevationBack = animatedValue.interpolate({
    inputRange: [155, 180],
    outputRange: [0, 10],
  });

  const flipCard = () => {
    if (value >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
      }).start();
    }
  };

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <TouchableWithoutFeedback onPress={() => flipCard()}>
      <View>
        <Animated.View
          style={[
            frontAnimatedStyle,
            styles.paperFront,
            { elevation: elevationFront },
            { opacity: frontOpacity },
          ]}
        >
          <Text
            style={{
              fontSize: 20,
              paddingTop: 8,
              paddingLeft: 8,
              color: "black",
              lineHeight: 20,
            }}
          >
            Title Front {value} - <Text style={{ fontSize: 8 }}>KPI</Text>
          </Text>
          <View style={{ position: "absolute", paddingTop: 3, right: 8 }}>
            <TabBarIcon style={{ color: "black" }} name={"md-more"} />
          </View>
        </Animated.View>

        <Animated.View
          style={[
            backAnimatedStyle,
            styles.paperBack,
            { elevation: elevationBack },
            { opacity: backOpacity },
          ]}
        >
          <Text>Back title {value}</Text>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  paperFront: {
    marginHorizontal: 15,
    backgroundColor: "white",
    minHeight: 200,
    borderRadius: 5,
    marginBottom: 15,
  },
  paperBack: {
    top: -215,
    marginHorizontal: 15,
    backgroundColor: "white",
    minHeight: 200,
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default test;
