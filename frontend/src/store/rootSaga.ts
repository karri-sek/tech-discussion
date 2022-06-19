import { all, spawn, call } from 'redux-saga/effects';
import { watchIncrementCounterSaga } from './modules/counter/saga';
import { watchShoppingSiteSaga } from './modules/product/saga';


export default function* allSagas() {
  const sagas = [
      watchIncrementCounterSaga,
      watchShoppingSiteSaga
  ];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(`Error ${e}`);
          }
        }
      })
    )
  );
}
