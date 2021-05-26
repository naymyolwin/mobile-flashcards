import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import SecondScreen from "../screens/SecondScreen";
import Colors from "../constants/Colors";

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
          headerRight: () => (
            <Button title="+" color={Colors.primary} onPress={() => {}} />
          ),
        }}
      />
      <MainScreenStack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{ title: "Flash Card Detail", headerBackTitle: "Back" }}
      />
    </MainScreenStack.Navigator>
  );
};

export default MainStack;
