import Image from 'next/image';
import LoginForm from './components/LoginForm';
import styles from './page.module.scss';

export default function Login() {
  return (
    <main className={styles.wrapper}>
      <Image
        src={'/Taskit.svg'}
        alt='logo'
        width={144}
        height={36}
      />
      <LoginForm />
    </main>
  );
}
