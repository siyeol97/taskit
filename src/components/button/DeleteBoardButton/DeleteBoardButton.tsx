import { ButtonHTMLAttributes } from 'react';
import styles from './DeleteBoardButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  deleteBoard: () => void;
}

export default function DeleteBoardButton({ deleteBoard, ...rest }: Props) {
  return (
    <button
      className={styles.button}
      onClick={deleteBoard}
      {...rest}
    >
      대시보드 삭제하기
    </button>
  );
}
