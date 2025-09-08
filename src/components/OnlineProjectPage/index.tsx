"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./OnlineProjectPage.module.scss";
import RobokassaPay from "../RobokassaPay";
import ConnectImg from "../OnlineProject/images/connect.png";
import Arrow from "./images/arrow.svg";

export default function Connect() {
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className={styles.main_con}>
        <div className={styles.flex}>
          <div className={styles.image}>
            <Image
              className={styles.imggg}
              alt="individual"
              src={ConnectImg}
              height={482}
              width={482}
            />
          </div>
          <div className={styles.text}>
            <h2>Онлайн проект &quot;Мудрец на кушетке&quot;</h2>
            <p>
              Онлайн проект «Мудрец на кушетке» для психологов и всех, кто любит
              мудрость. <br /><br /> Что царь Соломон сказал бы о выгорании? Как Будда
              объяснил бы тревогу? Классическая мудрость для решения современных
              проблем. Разбираем идеи из первоисточников, которые помогут вам
              жить, трудиться и просто БЫТЬ.<br /> Telegram канал + группа чтения<br /><br />
              Стоимость участия в группе чтения 1000 р.
            </p>
            <div className={styles.cards}>
              <div
                className={`${styles.card} ${isActive ? styles.active : ""}`}
                onClick={handleCardClick}
              >
                <p>Участие в группе чтения 1000 р.</p>
                <Image
                  className={styles.arrow}
                  src={Arrow}
                  alt="arrow"
                  width={20}
                  height={20}
                />
                {isActive && (
                  <div
                    className={`${styles.cardDetail} ${
                      isActive ? styles.active : ""
                    }`}
                  >
                    <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=b9QdKD1_jEKXUv6mXAGn2A\" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
