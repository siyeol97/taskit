import styles from './TagChip.module.scss';

interface Props {
  tag: string;
  color: { background: string; text: string };
}

export default function TagChip({ tag, color }: Props) {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: color.background, color: color.text }}
    >
      {tag}
    </div>
  );
}
