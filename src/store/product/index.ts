import { createSlice } from '@reduxjs/toolkit';
import productsData from '~/data/products';
import { IProducts } from './interfaces';

export * from './interfaces';

export interface IProductState {
  products: IProducts
}

const productSlice = createSlice({
  name: 'product',
  initialState: { products: productsData } as IProductState,
  reducers: {
  },
});

export default productSlice.reducer;
