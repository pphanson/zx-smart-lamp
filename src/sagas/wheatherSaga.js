import { take, put, call, fork, all } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import fetch from 'isomorphic-fetch';
import SockJS from 'sockjs-client';
import { Stomp } from 'stompjs/lib/stomp';
import { wheatherActions } from '../actions';

const Nodes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function merge(target = [], source = [], indexes = []) {
  return target.map((item, i) => {
    const addToData = indexes.map(index => source[i][index]);
    Array.prototype.splice.apply(item, [-1, 0, ...addToData]);
    return item;
  });
}

function processData(data) {
  return data.reduce((result, value, index) => {
    if (index === 0) {
      return result.concat(value);
    } else if (
      index === 1 ||
      index === 2 ||
      index === 3 ||
      index === 5 ||
      index === 6 ||
      index === 7 ||
      index === 8
    ) {
      return merge(result, value, [0]);
    } else if (index === 4) {
      return merge(result, value, [0, 1]);
    }
  }, []);
}

function fetchApi(nodeID) {
  return fetch(`/api/currentHistory?deviceID=40003684&id=${nodeID}`).then(response =>
    response.json(),
  );
}

function connect() {
  const sockClient = SockJS('/api/websocketServer');
  const stompClient = Stomp.over(sockClient);

  return new Promise((resolve, reject) => {
    stompClient.connect(
      {},
      (frame) => {
        resolve(stompClient);
      },
    );
  });
}

function* read(client) {
  const channel = yield call(subscribe, client);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function* subscribe(client) {
  return eventChannel((emitter) => {
    const update = (response) => {
      emitter(wheatherActions.updateWheather(JSON.parse(response.body)));
    };
    client.subscribe('/id/40003684', update);
    return () => {};
  });
}

export default function* wheatherSaga() {
  const client = yield call(connect);
  const data = yield all(Nodes.map(node => call(fetchApi, node)));
  if (data) {
    yield put(wheatherActions.fetchWheather(processData(data)));
  }
  yield fork(read, client);
}
