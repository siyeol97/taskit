import styles from './NumberChip.module.scss';

interface Props {
  count: number;
}

export default function NumberChip({ count }: Props) {
  return <div className={styles.wrapper}>{count}</div>;
}
