import React from "react";
import s from "./Planting.module.css";
import {MAFbutton} from "../ModuleComponent/MAFbutton/MAFbutton";

export const Planting = () => {
    return(
        <div>
            <article className={s.article}>
                <div className={s.img_setting}>
                    <h5>УСТРОЕНО РАЗУМНО — УСТРОНЕНО КРАСИВО</h5>
                    <h2>Озеленим<br/> территорию</h2>
                    <h4>Разобъём сад, который будет радовать много лет</h4>
                    <button>Связаться</button>
                    <img className={s.img_one} src={'https://www.larixgroup.ru/uploads/ckeditor/pictures/676/content_bush-left.png'}/>
                    <img className={s.img_two} src={"https://www.larixgroup.ru/uploads/ckeditor/pictures/677/content_bush-right.png"}/>
                </div>
            </article>
            <div className={s.skidka}>
                <div className={s.ind_maf}>
                    <h2>50% скидка<br/>
                        на проектирование<br/>
                        при заказе благоустройства!!!</h2>
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
            </div>
                <section className={s.text}>
                    <div className="b-plantLife__content b-containerWidthMiddle_2">
                        <span className="b-littleText b-whiteText">Жизнь растений — целая наука</span>
                        <h2 className="b-title b-plantLife__title b-null">Профессиональное озеленение — это гораздо больше, чем просто украшение ландшафта</h2>
                        <p className="b-plantLife__text b-text b-null">Необходим грамотный план, чтобы светолюбивые растения не оказались в тени, а теплолюбивые не зябли. Важно правильно сочетать растения между собой, чтобы на следующий год не появились прогалины. Нужно внимательно отбирать растенияв питомнике и закупать только те, которые без проблем приживутся</p>
                        <div className={s.brefno}>
                            <div className={s.border}>
                                <div className={s.border_setting}>
                                        <img alt="" className="b-plantLife__productImage" src="https://www.larixgroup.ru/uploads/ckeditor/pictures/654/content_bark.png"/>
                                </div>
                            </div>
                            <div className={s.brefno_text}>
                                <span className={s.brefno_text_one}>Агротекстиль, мульча, удобрения должны быть качественными</span>
                                <span className={s.brefno_text_two}>Наконец, заниматься посадками должны проверенные специалисты, которые умеют беречь растения. В этих вопросах нет мелочей</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={s.earth}>
                        <img  className={s.img1} src="https://www.larixgroup.ru/uploads/ckeditor/pictures/657/content_leaves.png"/>
                        <img className={s.img2} src="https://www.larixgroup.ru/uploads/ckeditor/pictures/658/content_leaves2.png"/>
                    </div>
                    <div className={s.test}>
                        <h2 className="b-null b-soil__title b-title b-blackText">Перед началом посадок нужно позаботиться о почве</h2>
                        <p className="b-soil__text b-soil__text_mt b-blackText b-null b-text">Нужно внести удобрения, вспахать землю, вырыть ямы может потребоваться подсыпка плодородного слоя</p>
                        <p className="b-soil__text b-blackText b-text">Цветы сажают весной, но многие другие работы по озеленению проходят осенью или даже зимой. В это время деревья «спят» и настаёт лучшее время для их пересадки. Землю под клумбы тоже нужно готовить осенью. Подготовку к озеленению лучше начинать с осени</p>
                        <img  className={s.img4} src="https://www.larixgroup.ru/uploads/ckeditor/pictures/678/content_soil.png"/>
                    </div>
                </section>
            <section className={s.rabota}>
                <div>
                    <h2>Как мы работаем</h2>
                    <ul>
                        <li>
                            <span className={s.span_main}>01 -<span> 06 </span> </span>
                            <span className={s.plus_span}>Выезжаем на место</span>
                            <span className={s.span_inf}> Собираем все данные и составляем техническое задание, заключаем договор </span>
                        </li>
                        <li >
                            <span className={s.span_main}>02 - <span> 06 </span></span>
                            <span className={s.plus_span}>Концепция</span>
                            <span className={s.span_inf}> Подбираем и утверждаем концепцию </span>
                        </li>
                        <li >
                            <span className={s.span_main}>03 - <span> 06 </span> </span>
                            <span className={s.plus_span}>Создаем подробные планы работ</span>
                            <span className={s.span_inf}> Дизайн всех элементов, генплан и вертикальную планировку, план озеленения, карту тропинок и дорожек, системы полива и дренажа, схему освещения — индивидуально для вашего объекта с учётом его особенностей. Подбираем растения и малые архитектурные формы </span>
                        </li>
                        <li >
                            <span className={s.span_main}>04 - <span > 06 </span> </span>
                            <span className={s.plus_span}>Утверждение</span>
                            <span className={s.span_inf}> Утверждаем объем работ и смету </span></li>
                        <li >
                            <span className={s.span_main}>05 - <span > 06 </span> </span>
                            <span className={s.plus_span}>Приступаем к работам согласно плана</span>
                            <span className={s.span_inf}> Ежедневно контролируем выполнение работ. Регулярно представляем исполнительную документацию и акты выполненных работ </span>
                        </li>
                        <li>
                            <span className={s.span_main}><img alt="" src="https://www.larixgroup.ru/uploads/ckeditor/pictures/646/content_tick.png"/> </span>
                            <span className={s.plus_span_rabota}>Вы принимаете готовую работу</span>
                        </li>
                    </ul>
                </div>
            </section>
            <div className={s.doverie}>
            <div className="Partners_slider_wrapp__cojop">
                <div className="Partners_slider_header__cA01Y"><h2>Нам доверяют</h2>
                    <div className="Partners_slider_btn__wr2zQ">
                        <button className="Partners_btn1__yG22T"></button>
                        <button className="Partners_btn2__ITapN"></button>
                    </div>
                </div>
                <div className="Partners_slider_partners__vW+Rm">
                    <div className="Partners_slider__K3JEV">
                        <div className="Partners_slider_block__zFJ99"><img src="./Data/image.png"/></div>
                        <div className="Partners_slider_block__zFJ99"><img src="./Data/image (1).png"/></div>
                        <div className="Partners_slider_block__zFJ99"><img src="./Data/image (2).png"/></div>
                        <div className="Partners_slider_block__zFJ99"><img src="./Data/image (3).png"/></div>
                        <div className="Partners_slider_block__zFJ99"><img src="./Data/image (4).png"/></div>
                        <div className="Partners_slider_block__zFJ99"><img src="./Data/image (5).png"/></div>
                        <div className="Partners_slider_block__zFJ99"><img src=".Data/image (6).png"/></div>
                    </div>
                </div>
            </div>
            <div className="Partners_partners_block__N+iMC">
                <div>
                    <div className="Partners_content__uRjbe"><img src="./Data/woman1.jpeg"/></div>
                    <div className="Partners_title__sgdaJ">Ковтун Мария</div>
                    <div className="Partners_text_wrapp__QNo4M">
                        <p>Руководитель<br/> компании с 2009г.</p>
                        <p>Ландшафтный <br/>дизайнер с 2007г.</p>
                    </div>
                </div>
                <div>
                    <div className="Partners_content__uRjbe">
                        <img src="./Data/woman2.jpeg"/>
                    </div>
                    <div className="Partners_title__sgdaJ">Добжевич Евгения</div>
                    <div className="Partners_text__Vi+em"><p>Ландшафтный архитектор с 2009г.</p></div>
                </div>
                <div>
                    <div className="Partners_content__uRjbe">
                        <img src="./Data/man.jpeg"/>
                    </div>
                    <div className="Partners_title__sgdaJ">Стрелков Сергей</div>
                    <div className="Partners_text__Vi+em"><p>Ландшафтный архитектор с 2009г.</p></div>
                </div>
            </div>
            </div>
        </div>

)}