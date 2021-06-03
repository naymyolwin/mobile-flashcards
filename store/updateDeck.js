import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEY } from "./localStoreKey";

export const updateDeck = async (id, name) => {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const Data = await getData();
  const currentCard = Data["cards"];
  const currentDeck = Data["decks"];

  currentDeck[id].name = name;

  const save = async () => {
    return await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ["cards"]: currentCard, ["decks"]: currentDeck })
    );
  };

  try {
    save();
  } catch (error) {
    console.log("Something went wrong saving card to local store");
  }
};
