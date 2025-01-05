import Image from 'next/image';
import styles from './AddItemButton.module.scss';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  type: 'column' | 'board' | 'todo';
}

export default function AddItemButton({ type, ...rest }: Props) {
  if (type === 'column') {
    return (
      <button
        className={`${styles.add_column} ${styles.button}`}
        {...rest}
      >
        <div className={styles.add_column_container}>
          <span>새로운 컬럼 추가하기</span>
          <Image
            src={'/add_chip.svg'}
            alt='add_chip'
            width={22}
            height={22}
            className={styles.add_chip}
          />
        </div>
      </button>
    );
  }
  if (type === 'board') {
    return (
      <button
        className={`${styles.add_board} ${styles.button}`}
        {...rest}
      >
        <div className={styles.add_board_container}>
          <span>새로운 대시보드</span>
          <Image
            src={'/add_chip.svg'}
            alt='add_chip'
            width={22}
            height={22}
            className={styles.add_chip}
          />
        </div>
      </button>
    );
  }
  if (type === 'todo') {
    return (
      <button
        className={`${styles.add_todo} ${styles.button}`}
        {...rest}
      >
        <Image
          src={'/add_chip.svg'}
          alt='add_chip'
          width={22}
          height={22}
          className={styles.add_chip}
        />
      </button>
    );
  }
}
