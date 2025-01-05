import styles from './AuthButton.module.scss';

interface Props {
  text: string;
  inactive?: boolean;
}

export default function AuthButton({ text, inactive }: Props) {
  return (
    <button
      className={`${styles.button} ${inactive ? styles.inactive : ''}`}
      disabled={inactive}
    >
      {text}
    </button>
  );
}
