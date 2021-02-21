import { ICurrency } from '../store/product';

export const httpClient = () => (new Promise((resolve) => setTimeout(resolve, 3000)));

export const formatCurrency = (pricing: ICurrency) => new Intl.NumberFormat('en-US', {
  maximumSignificantDigits: 3,
  style: 'currency',
  currency: pricing.currencyCode,
}).format(pricing.amount);
