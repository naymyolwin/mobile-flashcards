import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEY } from "./localStoreKey";

export const deleteCard = async (deck, cardId) => {
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

  delete currentCard[cardId];
  const index = currentDeck[deck].card.indexOf(cardId);
  currentDeck[deck].card.splice(index, 1);

  //   console.log("Card");
  //   console.log(currentCard);
  //   console.log("Deck");
  //   console.log(currentDeck);

  const save = async () => {
    return await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ["cards"]: currentCard, ["decks"]: currentDeck })
    );
  };

  try {
    save();
    //   console.log("saving card and updating deck");
  } catch (error) {
    console.log("Something went wrong saving card to local store");
  }
};
