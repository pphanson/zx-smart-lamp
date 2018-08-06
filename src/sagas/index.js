import { take, put, call, fork, select } from 'redux-saga/effects';
import wheather from './wheatherSaga';
import video from './videoSaga';

export default function* root() {
  yield fork(wheather);
  yield fork(video);
}
