import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>내 대시보드</span>
      <div className={styles.user_info_container}>
        <div className={styles.avatar}>
          <span className={styles.avatar_user_name}>시열</span>
        </div>
        <span className={styles.user_name}>이시열</span>
      </div>
    </div>
  );
}
