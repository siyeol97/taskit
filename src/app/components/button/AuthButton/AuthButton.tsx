import { ButtonHTMLAttributes } from 'react';
import styles from './AuthButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  inactive?: boolean;
}

export default function AuthButton({ text, inactive, ...rest }: Props) {
  return (
    <button
      className={`${styles.button} ${inactive ? styles.inactive : ''}`}
      disabled={inactive}
      {...rest}
    >
      {text}
    </button>
  );
}
