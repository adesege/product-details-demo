import clsx from 'clsx';
import {
  ButtonHTMLAttributes, memo, PropsWithChildren, ReactNode,
} from 'react';
import styles from './AppButton.module.css';

type AppButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: ReactNode;
  variant?: 'primary' | 'secondary';
  isBlock?: boolean;
}>;

export const AppButton = memo(({ type = 'button', className, ...props }: AppButtonProps) => (
  <button
    type={type}
    className={clsx(className, styles['app-button'], {
      [styles.primary]: props.variant === 'primary',
      [styles.block]: props.isBlock,
    })}
    {...props}
  >
    {props.label || props.children}
  </button>
));
