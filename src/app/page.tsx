import AddItemButton from './components/button/AddItemButton/AddItemButton';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.div}>
      <AddItemButton type='column' />
      <AddItemButton type='board' />
      <AddItemButton type='todo' />
    </div>
  );
}
