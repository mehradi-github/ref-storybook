import { ComponentProps } from 'react';
import clsx from 'clsx';
import styles from './button.module.css';
import { variants, type ButtonVariants } from './button-variants';

export type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  return <button className={variants({ variant, size })} {...props} />;
};
