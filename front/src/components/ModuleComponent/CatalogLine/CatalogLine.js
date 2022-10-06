import React from "react";
import s from "./СatalogLine.module.css";

export const CatalogLine = () =>{
    return(
        <div className={s.div_menu}>
            <div >
                <h2>Каталог</h2>
            </div>
            <div>
                <menu className={s.menu}>
                    <input />
                    <li className={s.li_all}>Все</li>
                    <li className={s.li}>Парковые</li>
                    <li className={s.li}>Игровые</li>
                    <li className={s.li}>Спортивные</li>
                </menu>
            </div>
        </div>
    )
}