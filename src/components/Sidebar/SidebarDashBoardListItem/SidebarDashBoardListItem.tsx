import styles from './SidebarDashBoardListItem.module.scss';

export default function SidebarDashBoardListItem() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dot}></div>
      <span>블로그 프로젝트</span>
    </div>
  );
}
