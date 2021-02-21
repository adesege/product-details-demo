import clsx from 'clsx';
import { ChangeEventHandler, useMemo } from 'react';
import styles from './AppRadio.module.css';

type AppRadioProps = {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  className?: string;
};

let id = 0;
export const AppRadio = (props: AppRadioProps) => {
  const componentId = useMemo(() => {
    id += 1;
    return `${props.name}-${id}`;
  }, [props.name]);

  return (
    <div className={clsx(props.className, styles['app-radio'])}>
      <input
        type="radio"
        name={props.name}
        id={componentId}
        className={styles.input}
        onChange={props.onChange}
        checked={props.value === props.defaultValue}
        value={props.value}
      />
      <label htmlFor={componentId} className={styles.label}>{props.label && props.label}</label>
    </div>
  );
};
