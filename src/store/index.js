import { createStore, applyMiddleware } from "redux"; //applyMiddleware para o redux
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import gameReducer from "./reducers";
import gameSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  gameReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
//applyMiddleware(createSagaMiddleware) para o SAGA
sagaMiddleware.run(gameSaga); // para iniciar as sagas que serão passadas por gameSaga

export default store;

// EXEMPLO APENAS UMA CARTA
// const gameReducer = (state = { isActive: false }, action) => {
//     switch (action.type) {
//       case "SELECT CARD":
//         return {
//           ...state,
//           isActive: !state.isActive,
//         };

//       default:
//         return state;
//     }
//   };
//   const store = createStore(gameReducer, composeWithDevTools());

//   export default store;

// case "SELECT_CARD": {
//   const cards = state.cards.slice();
//   const index = cards.findIndex((c) => c.key === action.key);
//   const otherCardIndex = cards.findIndex((c) => c.isActive && !c.hasMatch);
//   //valida se a carta selecionada existe
//   if (index > -1) {
//     //carta ja ativa
//     if (cards[index].isActive) {
//       return state;
//     }
//     //verificar se existe outra carta aberta esperando match
//     if (otherCardIndex > -1) {
//       //verifica se a 2 carta é iguala  primeira selecionada
//       if (cards[index].id === cards[otherCardIndex].id) {
//         //exibe a carta e marca o match das cartas
//         cards[index].isActive = true;
//         cards[index].hasMatch = true;
//         cards[otherCardIndex].hasMatch = true;
//       } else {
//         //esconde a carta, ja que não corresponderam
//         cards[otherCardIndex].isActive = false;
//       }
//     }
//     cards[index].isActive = true;
//   }

//   return {
//     ...state,
//     cards,
//   };
// }
