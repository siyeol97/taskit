import Image from 'next/image';
import LoginForm from './components/LoginForm';
import styles from './page.module.scss';
import Link from 'next/link';

export default function Login() {
  return (
    <main className={styles.wrapper}>
      <Image
        src={'/Taskit.svg'}
        alt='logo'
        width={144}
        height={36}
        className={styles.logo}
      />
      <LoginForm />
      <p className={styles.go_register}>
        회원이 아니신가요?
        <Link href={'/signup'}>회원가입</Link>
      </p>
    </main>
  );
}
