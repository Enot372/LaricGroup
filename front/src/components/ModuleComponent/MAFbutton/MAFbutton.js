import React, { useState } from "react";
import s from "./MAFbutton.module.css";

export const MAFbutton = () =>{
    const [show, setShow] = useState(false)
    console.log(show)
    return(
        <div className={s.catalog}>
            <div className={s.div_button}>
                <button className={s.button_setting} onClick={() => setShow(!show)}>Заказать МАФ по индивидуальному проекту</button>
            </div>
        <form><div className={`ind_maf ${show ? "activeModal" : ""}`}>
            <h2>Заказать МАФ по индивидуальному проекту</h2>
            <div>
            <div>
                <div className={s.input_name}>
                    <label>Имя и Фамилия</label>
                    <input></input>

                </div>
                <div className={s.input_name}>
                    <label>Электронная почта</label>
                    <input></input>
                </div>

                <div className={s.order_attach}>
                    <label className={s.label_attach}><input type={"file"}/><img src={"./img/categories_form.png"}/>Приложите файлы для расчета стоимости</label>
                </div>
            </div>
            <div>
                <div className={s.input_name}>
                    <label>Телефон</label>
                    <input></input>
                </div>
                <div className={s.input_name}>
                    <label>Коментарий</label>
                    <textarea className={s.textarea}></textarea>
                </div>
                <div className={s.checkbox}>
                    <label><input type={"checkbox"} />Я согласен с <a href="/Privacy">условиями</a></label>
                </div>

                    <button className={s.button_setting}>Расчитать стоимость</button>
            </div>
            </div>
        </div>
        </form>
        </div>
    )
}