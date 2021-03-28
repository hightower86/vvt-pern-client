import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from './store';

// Define a type for the slice state

export interface IBlock {
  id: number | string;
  text: string;
  fontSize: string;
  color: string;
  bgColor: string;
}

export interface ICurrentBlock {
  block: IBlock;
  index: number;
}
export interface IBlocksState {
  blocks: IBlock[];
  error: null | string;
  isLoading: boolean;
  currentBlock: ICurrentBlock;
}

// Define the initial state using that type
const initialState: IBlocksState = {
  blocks: [],
  error: '',
  isLoading: false,
  currentBlock: {
    block: {
      id: '',
      text: '',
      fontSize: '',
      color: '',
      bgColor: '',
    },
    index: 0,
  },
};

export const blocksSlice = createSlice({
  name: 'blocks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getBlocksFetching: (state) => {
      state.isLoading = true;
    },
    getBlocksSuccess: (state, action: PayloadAction<[]>) => {
      state.blocks = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getBlocksFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    addBlock: (state, action: PayloadAction<IBlock>) => {
      state.blocks.push(action.payload);
    },
    setCurrentBlock: (state, action: PayloadAction<ICurrentBlock>) => {
      state.currentBlock = action.payload;
    },
    updateBlock: (state, action: PayloadAction<ICurrentBlock>) => {
      //debugger;

      state.blocks[action.payload.index] = action.payload.block;
    },
  },
});

export const {
  getBlocksSuccess,
  getBlocksFetching,
  getBlocksFail,
  addBlock,
  setCurrentBlock,
  updateBlock,
} = blocksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBlocks = (state: IRootState) => state.blocks;

export default blocksSlice.reducer;
