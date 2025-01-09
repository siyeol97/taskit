import InviteContainer from '@/components/Invite/InviteContainer/InviteContainer';
import styles from './page.module.scss';
import { Metadata } from 'next';
import SearchInput from '@/components/Input/SearchInput/SearchInput';

export const metadata: Metadata = {
  title: '내 대시보드',
};

export default function Home() {
  return (
    <section className={styles.wrapper}>
      <InviteContainer>
        <SearchInput />
      </InviteContainer>
    </section>
  );
}
