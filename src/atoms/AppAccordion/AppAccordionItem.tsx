import clsx from 'clsx';
import { PropsWithChildren, ReactNode, useState } from 'react';
import styles from './AppAccordion.module.css';

type AppAccordionItemProps = PropsWithChildren<{
  header: ReactNode;
}>;

export const AppAccordionItem = (props: AppAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        aria-hidden
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(styles.header, { [styles.openAccordion]: isOpen })}
      >
        {props.header}
      </div>
      <div className={clsx(styles.item, { [styles.open]: isOpen })}>{props.children}</div>
    </>
  );
};
