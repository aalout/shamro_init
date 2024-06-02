'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_con}>
            <Link href="/"><h2 className={styles.logotext}>АНДРЕЙ ШАМРО</h2></Link>

          <div className={styles.footer_n}>
            <Link href="https://vk.com/andreyshamro" target='_blank'><p className={styles.footer_nav}>ВКонтакте</p></Link>
            <Link href="https://t.me/andrey_shamro" target='_blank'><p className={styles.footer_nav}>Telegram</p></Link>
            <Link href="https://www.youtube.com/@andreyshamro" target='_blank'><p className={styles.footer_nav}>Youtube</p></Link>
            <Link href="https://среда.space/" target='_blank'><p className={styles.footer_nav}>Платформа</p></Link>
          </div>
        </div>
    </footer>
  );
}