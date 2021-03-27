import { apiGetBlocks } from './../api/index';
import {
  getBlocksFail,
  getBlocksFetching,
  getBlocksSuccess,
} from './blocksSlice';

export const fetchBlocks = () => async (dispatch: any) => {
  dispatch(getBlocksFetching());
  try {
    const response: any = await apiGetBlocks();
    const data = response;
    dispatch(getBlocksSuccess(data));
  } catch (error) {
    dispatch(getBlocksFail(error));
  }
};
