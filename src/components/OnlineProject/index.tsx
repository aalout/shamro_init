'use client'

import styles from "./OnlineProject.module.scss";
import Link from "next/link";
import Arrow from './images/arrow.svg'
import Image from "next/image";


export const OnlineProject: React.FC = () => {

    return (
        <section className={styles.root}>
            <h2 className={styles.title}>Проекты</h2>
            <Link href='/connect' className={styles.container}>
                <div className={styles.hover}>
                    <p className={styles.text}>Онлайн проект «Мудрец на кушетке» для психологов и всех, кто любит
                    мудрость.</p>
                    <Image className={styles.arrow} src={Arrow} alt="arrow" width={30} height={30} />
                </div>
            </Link>
        </section>
    );
}