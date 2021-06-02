import { generateUID } from "./idGenerator";

export const createNewCard = (question, answer, deckId) => {
  const id = generateUID();
  const newCard = {
    [id]: { "id": id, "deck": deckId, "question": question, "answer": answer },
  };

  return newCard;
};
