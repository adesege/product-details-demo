import { useSelector } from 'react-redux';
import { formatCurrency } from '~/utils';
import { RootState } from '..';
import { IProduct } from './interfaces';

type UseProductType = Omit<IProduct, 'pricing'> & {
  pricing: string;
};

export const useProduct = (id: number) => useSelector<RootState, UseProductType>((state) => {
  const product = state.product.products.find((item) => item.id === id);
  return {
    ...product,
    pricing: formatCurrency(product.pricing),
  };
});
