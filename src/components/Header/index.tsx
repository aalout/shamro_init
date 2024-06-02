'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import { useState } from 'react';

export default function Header() {
    const [showSocialMenu, setShowSocialMenu] = useState(false);

    const handleSocialMenuToggle = () => {
        setShowSocialMenu(!showSocialMenu);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header_div}>
                <Link href="/"><h2 className={styles.logotext}>АНДРЕЙ ШАМРО</h2></Link>
                <div className={styles.header_nav}>
                    <Link href="#grade"><p className={styles.navtext}>Образование</p></Link>
                    <Link href="#cards"><p className={styles.navtext1}>Услуги</p></Link>
                    <div className={styles.header_social} onClick={handleSocialMenuToggle}>
                        <p className={styles.navtext}>Контакты</p>
                        <Image alt='arrow' src="/assets/images/arrow.svg" width={8} height={16}></Image>
                    </div>
                    {showSocialMenu && (
                        <div className={styles.socialMenu}>
                            <Link href="https://t.me/andrey_shamro" target='_blank' className={styles.socialLink}>
                                <Image alt='telegram' src="/assets/images/tg.svg" width={39} height={33}></Image>
                            </Link>
                            <Link href="https://vk.com/andreyshamro" target='_blank' className={styles.socialLink}>
                                <Image alt='vk' src="/assets/images/vk.svg" width={39} height={33}></Image>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}