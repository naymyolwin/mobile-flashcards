import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Animated, StyleSheet, Text, View, Platform } from "react-native";

import Card from "../components/Card";
import MyButton from "../components/MyButton";
import Colors from "../constants/Colors";

const QuizScreen = ({ route, navigation }) => {
  const { deckId } = route.params;
  const decks = useSelector((state) => state.decks.decks);
  const cards = useSelector((state) => state.cards.cards);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [inCorrect, setIncorrect] = useState(0);
  const [clickedCorrect, setClickedCorrect] = useState(false);
  const [clickedIncorrect, setClickedIncorrect] = useState(false);

  const cardList = decks[deckId].card;

  const cardsArray = cardList.map((c) => {
    return cards[c];
  });

  const correctHandler = () => {
    setCorrect(correct + 1);
    setClickedCorrect(true);
  };

  const inCorrectHandler = () => {
    setIncorrect(inCorrect + 1);
    setClickedIncorrect(true);
  };
  const nextHandler = () => {
    if (Platform.OS === "android") {
      animatedValue.setValue(0);
    }
    if (index === cardsArray.length - 1) {
      return navigation.navigate("Score", {
        score: ((correct / (correct + inCorrect)) * 100).toFixed(2),
      });
    }

    let i = index < cardsArray.length ? index + 1 : index;
    setIndex(i);
    setClickedCorrect(false);
    setClickedIncorrect(false);
  };

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
      <Text style={styles.title}>
        Card {index + 1} of {cardsArray.length}
      </Text>

      {Platform.OS === "ios" ? (
        useMemo(() => {
          return (
            <View>
              <Animated.View style={[styles.paperFront, frontAnimatedStyle]}>
                <Card onPress={flipCard} text={cardsArray[index].question} />
              </Animated.View>
              <Animated.View style={[styles.paperBack, backAnimatedStyle]}>
                <Card onPress={flipCard} text={cardsArray[index].answer} />
              </Animated.View>
            </View>
          );
        }, [index])
      ) : (
        <View>
          <Animated.View style={[styles.paperFront, frontAnimatedStyle]}>
            <Card onPress={flipCard} text={cardsArray[index].question} />
          </Animated.View>
          <Animated.View style={[styles.paperBack, backAnimatedStyle]}>
            <Card onPress={flipCard} text={cardsArray[index].answer} />
          </Animated.View>
        </View>
      )}

      <View>
        <MyButton
          title="Corect"
          style={{ backgroundColor: clickedCorrect ? "green" : "#ccc" }}
          disabled={clickedCorrect || clickedIncorrect}
          onPress={correctHandler}
        />
        <MyButton
          title="Incorrect"
          style={{ backgroundColor: clickedIncorrect ? "red" : "#ccc" }}
          disabled={clickedCorrect || clickedIncorrect}
          onPress={inCorrectHandler}
        />
        <MyButton
          title="NEXT"
          onPress={nextHandler}
          disabled={!clickedCorrect && !clickedIncorrect}
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
    backfaceVisibility: "hidden",
  },
  paperBack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  },
});

export default QuizScreen;
