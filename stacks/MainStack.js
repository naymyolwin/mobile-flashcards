import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import QuizScreen from "../screens/QuizScreen";
import Colors from "../constants/Colors";
import Score from "../screens/Score";
import SingleDeckScreen from "../screens/SingleDeckScreen";
import AddCardScreen from "../screens/AddCardScreen";

const MainScreenStack = createStackNavigator();

const MainStack = () => {
  const headerOptions = {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  return (
    <MainScreenStack.Navigator screenOptions={headerOptions}>
      <MainScreenStack.Screen
        name="HomeScreen"
        mode="modal"
        component={HomeScreen}
        options={{
          title: "Flash Card",
        }}
      />
      <MainScreenStack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{
          title: "Flash Card Detail",
          headerBackTitle: "Back",
        }}
      />
      <MainScreenStack.Screen
        name="Score"
        component={Score}
        options={{
          title: "Your Score",
          headerLeft: () => null,
        }}
      />
      <MainScreenStack.Screen
        name="SingelDeck"
        component={SingleDeckScreen}
        options={{
          title: "Deck Title",
        }}
      />
      <MainScreenStack.Screen
        name="AddCard"
        component={AddCardScreen}
        options={{
          title: "Add Card",
        }}
      />
    </MainScreenStack.Navigator>
  );
};

export default MainStack;
