'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from "./Grade.module.scss"

export default function Grade() {
  const educationData = [
    { year: 2002, text: "Московская Духовная Семинария" },
    { year: 2012, text: "Киевская Духовная Академия" },
    { year: 2016, text: "МГЭИ Факультет Психологии (Бакалавриат)" },
    { year: 2017, text: "Международный Эриксоновский Университет Коучинга" },
    { year: 2017, text: "Санкт-Петербургский институт Гештальта ( 1-я и 2-я ступени)" },
    { year: 2018, text: "Повышение квалификации Международный университет Global Coaching – Курс «Командный коучинг»" },
    { year: 2018, text: "Повышение квалификации «Проектный спецназ» онлайн-курс Федора Афанасьева по проектному управлению" },
    { year: 2020, text: "Повышение квалификации «Работа с семьями, детьми и подростками в гештальт-подходе по модели Вайолет Оклэндер» (144 ч.)" },
    { year: 2021, text: "Повышение квалификации ICP center программа «Уникальный код коуча»" },
    { year: 2022, text: "Повышение квалификации «Супервизия в психологическом консультировании и психотерапии». (270 ч.)" },
    { year: 2023, text: "Дополнительное образование «Когнитивно-поведенческая психотерапия в практике психолога». (1120 ч.)" },
    { year: 2023, text: "Повышение квалификации «Групповая психотерапия в практике психолога». (240 ч.)" },
  ];

  return (
    <div className={styles.grade}>
        <div id='grade' className={styles.grade_con}>
        <h2>Образование</h2>
            <ul className={styles.grade_list}>
              {educationData.map((item, index) => (
                <li key={index} className={styles.grade_item}>
                  {index % 2 === 0 ? (
                    <>
                      <div className={styles.grade_date}>
                        <p>{item.year}</p>
                      </div>
                      <p className={styles.grade_text}>{item.text}</p>
                    </>
                  ) : (
                    <>
                      <p className={styles.grade_text}>{item.text}</p>
                      <div className={styles.grade_date}>
                        <p>{item.year}</p>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
        </div>
    </div>
  );
}