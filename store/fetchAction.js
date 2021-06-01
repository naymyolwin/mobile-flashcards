export const fetchData = () => {
  return async (dispatch) => {
    const getDecks = async () => {
      return;
    };
    const getCards = async () => {
      return;
    };

    try {
      const Decks = await getDecks();
      const Cards = await getCards();

      dispatch(deckActions.initilizeDecks(Decks));
      dispatch(cardActions.initilizeCards(Cards));
    } catch (error) {
      console.log("Something went wrong");
    }
  };
};
