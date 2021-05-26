import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

import AddDeckScreen from "../screens/AddDeckScreen";
import Colors from "../constants/Colors";

const SettingScreenStack = createStackNavigator();

const SettingStack = () => {
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
    <SettingScreenStack.Navigator screenOptions={headerOptions}>
      <SettingScreenStack.Screen
        name="AddDeck"
        mode="modal"
        component={AddDeckScreen}
        options={{
          title: "Flash Card",
          headerRight: () => (
            <Button title="+" color={Colors.primary} onPress={() => {}} />
          ),
        }}
      />
    </SettingScreenStack.Navigator>
  );
};

export default SettingStack;
