import { UPDATE_WEATHER, FETCH_WEATHER } from './types';

/**
 *
 * @param {*} data
 */
export function updateWheather(data) {
  return {
    type: UPDATE_WEATHER,
    payload: data,
  };
}

/**
 *
 * @param {*} data
 */
export function fetchWheather(data) {
  return {
    type: FETCH_WEATHER,
    payload: data,
  };
}
