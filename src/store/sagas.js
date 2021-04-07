import { put, select, delay, takeEvery } from "redux-saga/effects"; //acessa a store, nesse caso para obter as cartas
import {
  SELECT_CARD,
  LOCK,
  OPEN_CARD,
  SET_MATCH,
  CLOSE_CARDS,
} from "./actions";

function* selectCard(action) {
  const { key } = action; //extrair key de action
  const cards = yield select((state) => state.cards); //somente seleciona, o reducer(gameReducer) que faz alteração
  const isLocked = yield select((state) => state.isLocked);
  const index = cards.findIndex((c) => c.key === key);
  const otherCardIndex = cards.findIndex((c) => c.isActive && !c.hasMatch);

  if (!isLocked && index > -1 && !cards[index].isActive) {
    //2ºparam é o index da carta que queremos abrir
    yield put({ type: OPEN_CARD, index });

    //verifica se a carta foi aberta antes
    if (otherCardIndex > -1) {
      //verifica se são pares
      if (cards[index].id === cards[otherCardIndex].id) {
        //define o math
        yield put({ type: SET_MATCH, index1: index, index2: otherCardIndex });
      } else {
        //define a logica para caso as duas cartas não sejam pares
        yield put({ type: LOCK });
        yield delay(1500);
        yield put({
          type: CLOSE_CARDS,
          index1: index,
          index2: otherCardIndex,
        });
      }
    }
  }
}

function* gameSaga() {
  //yield para função assinc dentro da SAGA
  //1º action, 2º function para lidar com a logica
  yield takeEvery(SELECT_CARD, selectCard);
}

export default gameSaga;
