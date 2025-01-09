import Image from 'next/image';
import styles from './Sidebar.module.scss';
import SidebarDashBoardListItem from './SidebarDashBoardListItem/SidebarDashBoardListItem';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <Link href='/'>
            <Image
              src={'/Taskit.svg'}
              alt='logo'
              fill
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.dashboard_list_head}>
          <span>Dash Boards</span>
          <div className={styles.add_image_box}>
            <Image
              src={'/add_box.svg'}
              alt='add'
              fill
              style={{ objectFit: 'cover' }}
              className={styles.add_image}
            />
          </div>
        </div>
      </div>
      <SidebarDashBoardListItem />
      <SidebarDashBoardListItem />
      <SidebarDashBoardListItem />
    </nav>
  );
}
