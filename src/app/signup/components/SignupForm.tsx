import styles from './SignupForm.module.scss';
import AuthButton from '@/components/button/AuthButton/AuthButton';

export default function SignupForm() {
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <div className={styles.input_box}>
          <label htmlFor='email'>이메일</label>
          <input
            id='email'
            type='email'
            placeholder='Email *'
            autoComplete='user-name'
            autoFocus
            className={styles.input}
          />
          <p className={styles.error_message}>이메일을 확인해주세요.</p>
        </div>
        <div className={styles.input_box}>
          <label htmlFor='name'>닉네임</label>
          <input
            id='name'
            type='text'
            placeholder='Name *'
            autoComplete='user-name'
            className={styles.input}
          />
          <p className={styles.error_message}>이름을 확인해주세요.</p>
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
        </div>
        <div className={styles.input_box}>
          <label htmlFor='confirm_password'>비밀번호 확인</label>
          <input
            id='confirm_password'
            type='password'
            placeholder='Confirm Password *'
            autoComplete='current-password'
            className={styles.input}
          />
          <p className={styles.error_message}>비밀번호가 일치하지 않습니다.</p>
          {/* <p className={styles.error_message}>{errors.password?.message}</p> */}
        </div>
        <AuthButton text='가입하기' />
      </form>
    </section>
  );
}
