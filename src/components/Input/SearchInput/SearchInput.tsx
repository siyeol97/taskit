import Image from 'next/image';
import styles from './SearchInput.module.scss';

export default function SearchInput() {
  return (
    <div className={styles.wrapper}>
      <Image
        src={'/search.svg'}
        width={24}
        height={24}
        alt='search'
        className={styles.search_icon}
      />
      <input
        className={styles.container}
        type='text'
        placeholder='검색'
      />
    </div>
  );
}
