import { generateUID } from "./idGenerator";

export const createNewDeck = (deckName) => {
  const id = generateUID();
  const newDeck = {
    [id]: { "id": id, "name": deckName, "card": [] },
  };

  return newDeck;
};
