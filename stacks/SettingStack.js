import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import AddDeckScreen from "../screens/AddDeckScreen";
import AddHeaderButton from "../components/AddHeaderButton";
import Colors from "../constants/Colors";
import AddDeckFormScreen from "../screens/AddDeckFormScreen";
import EditDeckScreen from "../screens/EditDeckScreen";

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
                iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
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
          title: "Add New Deck",
        }}
      />
      <SettingScreenStack.Screen
        name="EditDeck"
        component={EditDeckScreen}
        options={{
          title: "Edit Deck",
        }}
      />
    </SettingScreenStack.Navigator>
  );
};

export default SettingStack;
