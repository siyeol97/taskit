import Image from 'next/image';
import TagChip from '../Chip/TagChip/TagChip';
import styles from './Card.module.scss';

interface Props {
  image?: string;
}

export default function Card({ image }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {image && (
          <div className={styles.image_container}>
            <Image
              src={image}
              alt='card-image'
              width={74}
              height={18}
              style={{ objectFit: 'contain' }}
            />
          </div>
        )}
        <div className={styles.info_container}>
          <div className={styles.head_container}>
            <p className={styles.title}>편리한 일정관리 Taskit</p>
            <div className={styles.tag_box}>
              {/* TODO: TagChip은 Tag를 prop으로 받아서 map으로 렌더링 */}
              <TagChip
                tag='프로젝트'
                color={{ background: '#F9EEE3', text: '#D58D49' }}
              />
              <TagChip
                tag='React'
                color={{ background: '#F7DBF0', text: '#D549B6' }}
              />
              <TagChip
                tag='TypeScript'
                color={{ background: '#E7F7DB', text: '#86D549' }}
              />
            </div>
          </div>
          <div className={styles.write_info_container}>
            <div className={styles.date_box}>
              <Image
                src='/calendar.svg'
                alt='calendar'
                width={18}
                height={18}
                className={styles.calendar_icon}
              />
              <p className={styles.date}>2025.01.07</p>
            </div>
            {/* TODO: 작성자 아바타 컴포넌트 */}
            <div className={styles.avatar}>
              <span className={styles.user_name}>시열</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
