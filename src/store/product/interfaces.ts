export type ICurrency = { amount: number; currencyCode: string; };

export type IProduct = {
  id: number;
  name: string;
  sizes: number[];
  type: string;
  description?: string;
  pricing: ICurrency;
  images: string[];
};

export type IProducts = IProduct[];
