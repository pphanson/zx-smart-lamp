import * as actions from '../actions/types';

const defaultState = {
  realtime: [],
  range: [],
  nodes: ['1'],
};

function merge(target = [], source = [], indexes = []) {
  for (const index of indexes) {
    Array.prototype.splice.apply(target, [-1, 0, source[index]]);
  }
  return target;
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

function updateRangeData(realData, rangeData) {
  const result = [...rangeData];
  if (result.length !== 0) {
    const latestData = processData(realData);

    if (result.length >= 360) {
      result.shift();
    }
    result.push(latestData);
  }

  return result;
}

/**
 *
 * @param {*} state
 * @param {*} action
 */
export default function wheather(state = defaultState, action) {
  switch (action.type) {
    case actions.UPDATE_WEATHER:
      state.realtime = action.payload;
      state.range = updateRangeData(action.payload, state.range);
      return Object.assign({}, state);
    case actions.FETCH_WEATHER:
      state.range = action.payload;
      return Object.assign({}, state);
    default:
      return state;
  }
}
