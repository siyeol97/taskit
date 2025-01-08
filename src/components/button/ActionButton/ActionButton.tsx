import { ButtonHTMLAttributes } from 'react';
import styles from './ActionButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  small?: boolean;
  white?: boolean;
}

export default function ActionButton({ text, small, white, ...rest }: Props) {
  return (
    <button
      className={`${styles.button} ${small ? styles.small : ''} ${
        white ? styles.white : ''
      }`}
      {...rest}
    >
      {text}
    </button>
  );
}
