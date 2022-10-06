import React from 'react';
import s from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className="container">
        <footer className={s.footer}>
            <div className={s.div_setting} >
                <h3>LARIX GROUP</h3>
                <a className={s.phone} href="tel:+7 (495) 7870039">+7 (495) 7870039</a>
                <a className={s.email} href="mailto:zakaz@larixgroup.ru">zakaz@larixgroup.ru</a>
                <div className={s.icn_setting}>
                <a href="/"><img alt="" src={"./img/Icon/vk-i.svg"}/></a>
                <a href="/"><img alt="" src={"./img/Icon/facebook-i.svg"}/></a>
                <a href="/"><img alt="" src={"./img/Icon/youtube-i.svg"}/></a>
                </div>
            </div>

            <div className={s.div_tuning }>
                <div className={`${s.div_setting_block} ${s.divtwo_one}`}>
                    <a href={"/Ozelenenie"}>Озеленение</a>
                    <a>Благоустройство</a>
                    <a>Проектирование</a>
                </div>
                <div className={`${s.div_setting_block} ${s.divtwo_two}`}>
                    <a>Доставка и оплата</a>
                    <a>Сборка и монтаж</a>
                </div>
                <div className={`${s.div_setting_block} ${s.divtwo_three}`}>
                    <a>О компании</a>
                    <a>Вакансии</a>
                    <a>Политика конфиденциальности</a>
                </div>
            </div>
            <div>
                <div className={s.div_text}>
                    <h6>Москва, Россия</h6>
                    <p className={s.text_setting}> Большая филевская 33 Пн-Пт, 09:00-18:00 </p>
                </div>
            </div>
            <div className={s.div_setting_mobile} >
                <a className={s.phone} href="tel:+7 (495) 7870039">+7 (495) 7870039</a>
                <a className={s.email} href="mailto:zakaz@larixgroup.ru">zakaz@larixgroup.ru</a>
                <div className={s.icn_setting}>
                    <a href="/"><img alt="" src={"./img/Icon/vk-i.svg"}/></a>
                    <a href="/"><img alt="" src={"./img/Icon/facebook-i.svg"}/></a>
                    <a href="/"><img alt="" src={"./img/Icon/youtube-i.svg"}/></a>
                </div>
            </div>
        </footer>
        </div>
    )
}