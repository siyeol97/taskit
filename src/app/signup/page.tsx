import styles from './page.module.scss';
import SignupForm from './components/SignupForm';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원 가입',
};

export default function Signup() {
  return (
    <main className={styles.wrapper}>
      <Image
        src={'/Taskit.svg'}
        alt='logo'
        width={144}
        height={36}
        className={styles.logo}
      />
      <SignupForm />
      <p className={styles.go_register}>
        이미 가입하셨나요?
        <Link href={'/login'}>로그인</Link>
      </p>
    </main>
  );
}
