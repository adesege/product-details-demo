import { ChangeEvent, useState } from 'react';
import {
  AppAccordion,
  AppAccordionItem, AppButton, AppImg, AppRadio,
} from '~/atoms';
import { useProduct } from '~/store/product/useProduct';
import styles from './Main.module.css';

const Main = () => {
  const product = useProduct(1);
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex space-x-10 container mt-10">
      <div className="w-3/5 flex-1">
        {product.images.map((image) => <AppImg key={image} src={image} alt={product.name} className={styles['app-img']} />)}
      </div>
      <div className="flex-1">
        <div className="text-center">
          <span className="text-4xl inline-block">
            {product.type}
            &#39;s
          </span>
          <h1 className="font-bold uppercase text-5xl my-2">{product.name}</h1>
          <span className="inline-block">{product.pricing}</span>
        </div>
        <div className="space-x-2 flex items-center my-6">
          <span className="text-xs uppercase">Sizes:</span>
          {product.sizes.map((size) => (
            <AppRadio
              key={size}
              name="sizes"
              label={size.toString()}
              value={size.toString()}
              defaultValue={value}
              onChange={onChange}
              className={styles.sizes}
            />
          ))}
        </div>
        <AppButton isBlock variant="primary" label="Add to cart" className="mt-5" />
        <AppAccordion className="mt-5">
          <AppAccordionItem header="Product Description">
            {product.description}
          </AppAccordionItem>
        </AppAccordion>
      </div>
    </div>
  );
};

export default Main;
