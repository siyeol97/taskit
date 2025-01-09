import AuthButton from '@/components/button/AuthButton/AuthButton';
import styles from './LoginForm.module.scss';

export default function LoginForm() {
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <div className={styles.input_box}>
          <label htmlFor='email'>이메일</label>
          <input
            id='email'
            type='email'
            autoFocus
            placeholder='Email *'
            autoComplete='user-name'
            className={styles.input}
          />
          <p className={styles.error_message}>이메일을 확인해주세요.</p>
        </div>
        <div className={styles.input_box}>
          <label htmlFor='password'>비밀번호</label>
          <input
            id='password'
            type='password'
            placeholder='Password *'
            autoComplete='current-password'
            className={styles.input}
          />
          <p className={styles.error_message}>비밀번호를 확인해주세요.</p>
          {/* <p className={styles.error_message}>{errors.password?.message}</p> */}
        </div>
        <AuthButton text='로그인' />
      </form>
    </section>
  );
}
