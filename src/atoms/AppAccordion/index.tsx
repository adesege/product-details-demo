import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './AppAccordion.module.css';

export * from './AppAccordionItem';

type AppAccordionProps = PropsWithChildren<{ className: string; }>;

export const AppAccordion = (props: AppAccordionProps) => (
  <div className={clsx(props.className, styles.accordion)}>
    {props.children}
  </div>
);
