import styles from './InviteContainer.module.scss';

interface Props {
  children?: React.ReactNode;
}

export default function InviteContainer({ children }: Props) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>초대받은 대시보드</p>
      {children}
    </div>
  );
}
