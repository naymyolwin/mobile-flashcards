import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEY } from "./localStoreKey";

export const updateCard = async (deck, cardId, question, answer) => {
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

  console.log("before");
  console.log(currentCard);
  currentCard[cardId] = {
    "deck": deck,
    "id": cardId,
    "question": question,
    "answer": answer,
  };
  console.log("after");
  console.log(currentCard);

  const save = async () => {
    return await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ["cards"]: currentCard, ["decks"]: currentDeck })
    );
  };

  try {
    save();
    console.log("saving card and updating deck");
  } catch (error) {
    console.log("Something went wrong saving card to local store");
  }
};
