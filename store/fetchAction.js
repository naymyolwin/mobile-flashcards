import { STORAGE_KEY } from "./localStoreKey";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deckActions } from "./deckSlice";

export const fetchData = () => {
  return async (dispatch) => {
    const getDecks = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        return jsonValue !== null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        console.log("ERROR in fetchAction");
      }
    };

    try {
      const Decks = await getDecks();
      //const Cards = await getCards();

      dispatch(deckActions.initializeDecks(Decks));
      //dispatch(cardActions.initilizeCards(Cards));
    } catch (error) {
      console.log("Error in fetchAction, dispatch");
    }
  };
};
