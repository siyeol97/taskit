import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './layout.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.wrapper}>
      <Sidebar />
      <section className={styles.content}>
        <Header />
        {children}
      </section>
    </main>
  );
}
