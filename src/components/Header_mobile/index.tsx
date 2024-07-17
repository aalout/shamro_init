'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header_mobile.module.scss';
import { useState } from 'react';

export default function Header_mobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <header className={styles.mobileHeader}>
        <div className={styles.cartdiv}>
        <Link href="/"><h2 className={styles.logotext}>АНДРЕЙ ШАМРО</h2></Link>
        </div>
        <button className={styles.burgerButton} onClick={() => setIsOpen(!isOpen)}>
          <Image src="/assets/images/bur.svg" alt="burger" width={22} height={15} />
        </button>
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          
        <a href="#grade"><p className={styles.navtext}>Образование</p></a>
        <a href="#cards"><p className={styles.navtext1}>Услуги</p></a>
        <div className={styles.social}><Link href="https://t.me/andrey_shamro" target='_blank' className={styles.socialLink}>
            <Image alt='telegram' src="/assets/images/tg.svg" width={39} height={33}></Image>
        </Link>
        <Link href="https://vk.com/andreyshamro" target='_blank' className={styles.socialLink}>
            <Image alt='vk' src="/assets/images/vk.svg" width={39} height={33}></Image>
        </Link></div>
          
        </nav>
      </header>
    );
  }