import React, {useState} from "react";
import s from "./basket.module.css"
import {MAFbutton} from "../ModuleComponent/MAFbutton/MAFbutton";
import {CatalogLine} from "../ModuleComponent/CatalogLine/CatalogLine";
import {clear} from "@testing-library/user-event/dist/clear";

export const Basket = () =>{
    const [Button, setButton] = useState("");
    return(
        <div className={s.catalog}>
            <MAFbutton/>
            <div className={s.setting}>
                <div className={s.div_li}>
                    <ul className={s.list_setting}>
                        <li><a href="/">Главная</a></li>
                        <li>→</li>
                        <li><a href="/Catalog">Категории</a></li>
                        <li>→</li>
                        <li><a href="/Categories">Каталог</a></li>
                        <li>→</li>
                        <li>Каталог малых архитектурных форм</li>
                    </ul>
                </div>
                <CatalogLine/>
            </div>
            <div>
                <table className={s.table}>
                    <thead className="Component-thead-0-2-105">
                    <tr className={s.thead}>
                        <th>Наименование</th>
                        <th>Артикул</th>
                        <th>Стоимость</th>
                        <th>Количество</th>
                        <th>Сумма</th>
                        <th>Удалить</th>
                    </tr>
                    </thead>
                    <tbody className={` ${s.tbody} ${Button==="Clear" ? s.tbody_none : "" }`}>
                    <tr>
                        <td><a href="/products/LGO2-Avtobusnaya ostanovka &quot;Siti&quot;"><img className={s.table_img} src="//shop.larixgroup.ru/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2dHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eb335964a8aa2ddf822d1e97741cc7205b0b62e7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--914a305a2d4ed396b4bee23cf7663f2851b2fc2e/data" />Автобусная остановка Сити</a></td>
                        <td>ЛГО2</td>
                        <td>0,00 ₽</td>
                        <td><input /></td>
                        <td>0</td>
                        <td>
                            <button>удалить</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className={s.action}><a href="/Categories">Продолжить покупки</a>
                    <div>
                        <button onClick={() => {setButton("Clear")}}>Очистить корзину</button>
                    </div>
                </div>
                <div className={s.person}>
                    <a>Имя</a>
                    <div>
                        <input></input>
                    </div>
                    <a>Телефон</a>
                    <div>
                        <input></input>
                    </div>
                    <a>Электронная почта</a>
                    <div>
                        <input></input>
                    </div>
                    <div>
                        <button className={s.basket_confirm} onClick={() => {alert("Заказ принят!")}}>Оформить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}