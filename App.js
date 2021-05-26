import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MainStack from "./stacks/MainStack";
//import SettingStack from "./stacks/SettingStack";
import Colors from "./constants/Colors";
import SettingStack from "./stacks/SettingStack";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Edit") {
              iconName = focused ? "ios-settings" : "ios-settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={MainStack} />
        <Tab.Screen name="Edit" component={SettingStack} />
        {/* <Tab.Screen name="Edit" component={SettingStack} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
