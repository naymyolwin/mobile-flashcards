import { NOTIFICATION_KEY } from "../store/localStoreKey";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
};

export const setLocalNotification = async () => {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(NOTIFICATION_KEY);
      return jsonValue;
    } catch (e) {
      console.log("ERROR in getting Notification key from asyncstore");
    }
  };

  const getPermission = async () => {
    try {
      const settings = await Notifications.getPermissionsAsync();
      return (
        settings.granted ||
        settings.ios?.status ===
          Notifications.IosAuthorizationStatus.PROVISIONAL
      );
    } catch (e) {
      console.log("ERROR getting permission from app");
    }
  };

  const Data = await getData();
  const Permission = await getPermission();

  if (Data === null && Permission) {
    Notifications.cancelAllScheduledNotificationsAsync();

    let tomorrow = new Date();
    // tomorrow.setDate(tomorrow.getDate());
    // tomorrow.setHours(tomorrow.getHours());
    // tomorrow.setMinutes(tomorrow.getMinutes() + 1);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(20);
    tomorrow.setMinutes(0);

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Time for Quiz",
        body: "You havent't done any Quiz today, START NOW",
      },
      trigger: tomorrow,
    });
    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
  }
};
