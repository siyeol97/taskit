import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/global.scss';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './layout.module.scss';
import Header from './components/Header/Header';

export const metadata: Metadata = {
  title: 'Taskit',
  description:
    '"Taskit" is a user-friendly task management app that helps organize and manage daily tasks efficiently.',
};

const pretendard = localFont({
  src: '../../static/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='kr'
      className={`${pretendard.variable}`}
    >
      <body className={pretendard.className}>
        <main className={styles.wrapper}>
          <Sidebar />
          <section className={styles.content}>
            <Header />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
