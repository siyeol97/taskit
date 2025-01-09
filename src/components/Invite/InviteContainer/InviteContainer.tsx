import SearchInput from '@/components/Input/SearchInput/SearchInput';
import styles from './InviteContainer.module.scss';

export default function InviteContainer() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>초대받은 대시보드</p>
      <SearchInput />
    </div>
  );
}
