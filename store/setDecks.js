import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEY } from "./localStoreKey";

export const setDecks = async (deck) => {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const Data = await getData();
  const currentDeck = Data !== null ? Data["decks"] : null;
  const currentCard = Data !== null ? Data["cards"] : null;

  let saveObj;

  if (currentDeck !== null) {
    saveObj = { ...currentDeck, ...deck };
  } else {
    saveObj = deck;
  }

  const save = async () => {
    return await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ["decks"]: saveObj, ["cards"]: currentCard })
    );
  };

  try {
    save();
  } catch (error) {
    console.log("Something went wrong saving deck to local store");
  }
};
