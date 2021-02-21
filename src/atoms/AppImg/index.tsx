import clsx from 'clsx';
import { ImgHTMLAttributes, memo } from 'react';

export const AppImg = memo(({
  src,
  alt,
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={src} alt={alt} className={clsx('app-img', className)} {...props} />
));
