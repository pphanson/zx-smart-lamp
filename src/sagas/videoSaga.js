import { take, put, call, fork, all, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { videoActions } from '../actions';
import { VIDEO_CONTROL } from '../actions/types';

function fetchApi(action) {
  return fetch(`/video/control?command=${action.payload.command}&stop=${action.payload.stop}`).then(
    response => response.json(),
  );
}

function* control(action) {
  yield call(fetchApi, action);
}

export default function* videoSaga() {
  yield takeEvery(VIDEO_CONTROL, control);
}
