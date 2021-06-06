import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import QuizScreen from "../screens/QuizScreen";
import Colors from "../constants/Colors";
import Score from "../screens/Score";
import SingleDeckScreen from "../screens/SingleDeckScreen";
import AddCardScreen from "../screens/AddCardScreen";

import AddHeaderButton from "../components/AddHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import AddDeckFormScreen from "../screens/AddDeckFormScreen";

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
        options={({ navigation }) => ({
          title: "Flash Card",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AddHeaderButton}>
              <Item
                title="Add Deck"
                onPress={() => {
                  navigation.navigate("AddDeckForm");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <MainScreenStack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{
          title: "Flash Card",
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
          title: "Flash Card",
        }}
      />
      <MainScreenStack.Screen
        name="AddCard"
        component={AddCardScreen}
        options={{
          title: "Flash Card",
        }}
      />
      <MainScreenStack.Screen
        name="AddDeckForm"
        component={AddDeckFormScreen}
        options={{
          title: "Add Deck",
        }}
      />
    </MainScreenStack.Navigator>
  );
};

export default MainStack;
