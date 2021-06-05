import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEY } from "./localStoreKey";

export const setCard = async (card) => {
  const cardkey = Object.keys(card)[0];
  const cardId = card[cardkey].id;
  const deckId = card[cardkey].deck;

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

  currentDeck[deckId].card.push(cardId);

  let saveObj;

  if (currentCard !== null) {
    saveObj = { ...currentCard, ...card };
  } else {
    saveObj = card;
  }

  const save = async () => {
    return await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ["decks"]: currentDeck, ["cards"]: saveObj })
    );
  };

  try {
    save();
  } catch (error) {
    console.log("Something went wrong saving card to local store");
  }
};
