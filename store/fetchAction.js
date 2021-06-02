import { STORAGE_KEY } from "./localStoreKey";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deckActions } from "./deckSlice";
import { cardActions } from "./cardSlice";

export const fetchData = () => {
  return async (dispatch) => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        return jsonValue !== null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        console.log("ERROR in fetchAction");
      }
    };

    const Data = await getData();
    const Decks = Data !== null ? Data["decks"] : null;
    const Cards = Data !== null ? Data["cards"] : null;

    try {
      dispatch(deckActions.initializeDecks(Decks));
      dispatch(cardActions.initializeCards(Cards));
    } catch (error) {
      console.log("Error in fetchAction, dispatch");
    }
  };
};
