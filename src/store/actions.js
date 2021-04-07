//definições do redux

export const SELECT_CARD = "SELECT_CARD";
export const LOCK = "LOCK";
export const OPEN_CARD = "OPEN_CARD";
export const SET_MATCH = "SET_MATCH";
export const CLOSE_CARDS = "CLOSE_CARDS";
export const CLOSE_VICTORY_DIALOG = "CLOSE_VICTORY_DIALOG";
export const START_GAME = "START_GAME";

//ACTION CREATOR Responsavel por retornar um objeto que representa a action,
//dividir as regras de negocio entre ACTION CREATORS e REDUCERS

export const selectCard = (key) => ({
  type: SELECT_CARD,
  key,
});

export const closeVictoryDialog = () => ({
  type: CLOSE_VICTORY_DIALOG,
});

export const startGame = () => ({
  type: START_GAME,
});
