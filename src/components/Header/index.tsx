'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import Banner from '../Banner';

export default function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.header_div}>
                <Link href="/"><h2 className={styles.logotext}>АНДРЕЙ ШАМРО</h2></Link>
                <div className={styles.header_nav}>
                    <Link href="/"><p className={styles.navtext}>Образование</p></Link>
                    <Link href="/"><p className={styles.navtext1}>Услуги</p></Link>
                    <Link href="/"><div className={styles.header_social}>
                        <p className={styles.navtext}>Контакты</p>
                        <Image alt='arrow' src="/assets/images/arrow.png" width={16} height={14}></Image>
                    </div></Link>
                </div>
            </div>
        </header>
    );
}