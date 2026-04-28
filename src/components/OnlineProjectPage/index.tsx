"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./OnlineProjectPage.module.scss";
import RobokassaPay from "../RobokassaPay";
import ConnectImg from "../OnlineProject/images/connect.jpg";

const paymentOptions = [
  {
    id: "individual",
    title: "Индивидуальная сессия 4000 руб.",
    src: "https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=b9QdKD1_jEKXUv6mXAGn2A",
  },
  {
    id: "group",
    title: "Участие в группе 2000 руб.",
    src: "https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=COqGgKnewkqNA5nVdVCUoA",
  },
] as const;

export default function Connect() {
  const [activePayment, setActivePayment] = useState<
    (typeof paymentOptions)[number]["id"] | null
  >(null);

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
            <h2>Проект «На рубеже»
            </h2>
            <p>
            В мае 2026 года стартует мой авторский исследовательский проект «На рубеже» - о тех моментах жизни, когда старая картина мира перестаёт работать, а новая ещё не сложилась. 
<br /><br />
Это пространство для тех, кто стоит на пороге перемен и готов исследовать свой переход вместе со мной.
<br /><br />
Для кого этот проект? 
<br /><br />
Вы подходите для участия, если узнаёте себя в одном из этих описаний:<br />
🔹 Вы спрашиваете себя: «Кто я на самом деле, вне моих социальных ролей?»<br />
Кризис идентичности в 20, 30, 45 или после 60. Когда привычные роли перестали приносить удовлетворение, карьера достигла пика или «рухнула», дети выросли и т.п.<br />
🔹 Вы теряете себя в отношениях или переживаете расставание<br />
Развод, измена, ощущение «я растворяюсь в этом человеке» или «мы расходимся, но я не знаю, как быть дальше».<br />
🔹 Вы перерастаете свою профессиональную роль<br />
Психолог, который становится практиком. Руководитель, которого повысили. Человек, который решил уйти из профессии. Ощущение: «прежних навыков больше недостаточно».
<br /><br />
Что объединяет всех участников? Вы на рубеже, и у вас есть желание его пройти.
<br /><br />
Форматы участия<br />
🔹 Индивидуальный формат<br />
Индивидуальные сессии (онлайн или офлайн в г.Краснодар)<br />
Минимум: 5 сессий<br />
Оптимально: регулярные встречи раз в две недели на протяжении 6 месяцев<br />
<br />
🔹 Групповой формат (онлайн)<br />
Закрытая группа 6-8 человек<br />
Встречи раз в две недели<br />
Длительность: 6 месяцев (июнь-декабрь 2026)<br />
Камерная атмосфера, глубина, доверие
<br /><br />
Вы можете выбрать один из форматов и написать мне о своем желании.
<br /><br />
Для участия в исследовании необходимо ознакомиться с этим важным документом.
            </p>
            <div className={styles.link}><Image src="/assets/pdf/download.svg" alt='download' width={34} height={33}/><a href="/assets/pdf/rubezh.pdf" download="rubezh.pdf">Условия участия в проекте НА РУБЕЖЕ (PDF)</a></div>
            <div className={styles.paymentCards}>
              {paymentOptions.map((payment) => {
                const isActive = activePayment === payment.id;

                return (
                  <div
                    className={`${styles.paymentCard} ${
                      isActive ? styles.paymentCardActive : ""
                    }`}
                    key={payment.id}
                  >
                    <button
                      className={styles.paymentButton}
                      type="button"
                      aria-expanded={isActive}
                      onClick={() =>
                        setActivePayment(isActive ? null : payment.id)
                      }
                    >
                      {payment.title}
                    </button>
                    <div className={styles.paymentWidget}>
                      <div className={styles.paymentWidgetInner}>
                        <RobokassaPay src={payment.src} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
