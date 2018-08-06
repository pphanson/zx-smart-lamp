import { VIDEO_CONTROL } from './types';

export function controlAction(data) {
  return {
    type: VIDEO_CONTROL,
    payload: data,
  };
}
