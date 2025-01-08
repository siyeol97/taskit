import Image from 'next/image';
import styles from './ProgressChip.module.scss';

interface Props {
  text: string;
}

export default function ProgressChip({ text }: Props) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={'/ellipse.svg'}
        alt='ellipse'
        width={6}
        height={6}
      />
      <span>{text}</span>
    </div>
  );
}
