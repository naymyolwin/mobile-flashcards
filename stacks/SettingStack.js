import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import AddDeckScreen from "../screens/AddDeckScreen";
import AddHeaderButton from "../components/AddHeaderButton";
import Colors from "../constants/Colors";
import AddDeckFormScreen from "../screens/AddDeckFormScreen";
import EditDeckScreen from "../screens/EditDeckScreen";
import EditCardScreen from "../screens/EditCardScreen";
import AddCardScreen from "../screens/AddCardScreen";

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
        component={AddDeckScreen}
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
      <SettingScreenStack.Screen
        name="AddDeckForm"
        component={AddDeckFormScreen}
        options={{
          title: "Add Deck",
        }}
      />
      <SettingScreenStack.Screen
        name="EditDeck"
        component={EditDeckScreen}
        options={({ navigation }) => ({
          title: "Flash Card",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AddHeaderButton}>
              <Item
                title="Add Card"
                onPress={() => {
                  navigation.navigate("AddCard");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <SettingScreenStack.Screen
        name="EditCard"
        component={EditCardScreen}
        options={{
          title: "Edit Card",
        }}
      />
      <SettingScreenStack.Screen
        name="AddCard"
        component={AddCardScreen}
        options={{
          title: "Add Card",
        }}
      />
    </SettingScreenStack.Navigator>
  );
};

export default SettingStack;
