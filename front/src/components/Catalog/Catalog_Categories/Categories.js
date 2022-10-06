import React, {useState} from "react";
import s from "./categories.module.css"
import {MAFbutton} from "../../ModuleComponent/MAFbutton/MAFbutton";
import {CatalogLine} from "../../ModuleComponent/CatalogLine/CatalogLine";

export const Categories = () =>{
    const [active, setActive] = useState("Grid")
    const [animation, setAnimation] = useState(false)


    return(
        <div className={s.catalog}>
            <div className={`${animation===true ? "categories_active" : ""}`}></div>
            <MAFbutton/>
            <div className={s.setting}>
            <div className={s.div_li}>
                <ul className={s.list_setting}>
                    <li><a href="/">Главная</a></li>
                    <li className="Component-arrow-0-2-11">→</li>
                    <li><a href="/Catalog">Категории</a></li>
                    <li className="Component-arrow-0-2-11">→</li>
                    <li className={s.li_color}>Каталог малых архитектурных форм</li>
                </ul>
            </div>
                <CatalogLine/>
            <aside>
                <div className={s.aside_setting}>
                <div className={s.list}>
                    <p>Категории</p>
                    <div>
                        <label><input type={"checkbox"}/>Подпорные стенки</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Вазоны, цветочницы</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Скамейки уличные</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Приствольные решетки</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Урны уличные</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Столбики ограничительные</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Велопарковки</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Остановки</label>
                    </div>
                </div>
                <div className={s.list}>
                    <p>Материал</p>
                    <div>
                        <label><input type={"checkbox"}/>Бетон</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Дерево, металл</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Дерево</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Металл</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Сталь</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Алюминий</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Композит</label>
                    </div>
                    <div>
                        <label><input type={"checkbox"}/>Стекло</label>
                    </div>
                </div>
                </div>
            </aside>
                <section className={s.section_setting}>
                    <div className={s.panel}>
                    <div className={s.grid}>
                        <button onClick={() => setActive("Grid")} className={` active_button_grid ${active==="Grid" ? "active_button_grid" : "no_active_rows"}`}>Grid</button>
                        <button onClick={() => setActive("Row")} className={`${active==="Row" ? "active_button_rows" : "no_active_grid"}`}>Rows</button>
                    </div>
                    <div className={s.categories}>
                        <div>Сортировать по</div>
                        <select>
                            <option>Наименованию (по возр.)</option>
                            <option>Наименованию (по убыв.)</option>
                            <option>Цене (по возр.)</option>
                            <option>Цене (по убыв.)</option>
                        </select>
                    </div>
                    </div>

                    <div className={s.product}>

                        <div className={s.buy}>
                            <a className={s.a_setting}><img src="http://shop.larixgroup.ru/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2dHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eb335964a8aa2ddf822d1e97741cc7205b0b62e7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--4f2e047ccea1ca50a081d6ff0195fe0e647a9aa3/data" alt="http://shop.larixgroup.ru/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2dHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eb335964a8aa2ddf822d1e97741cc7205b0b62e7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--4f2e047ccea1ca50a081d6ff0195fe0e647a9aa3/data"/></a>
                            <div className={s.product_setting}>
                                <a>
                                <div className={s.text}>Автобусная остановка "Сити"</div>
                            </a>
                                <div className={s.margin}>&nbsp;</div>
                            <div className={s.button_setting}>
                                <button onClick={() => setAnimation(!animation)}><a >Заказать</a></button>
                            </div>
                            </div>
                        </div>
                        <div className={s.buy}>
                            <a className={s.a_setting}><img src="http://shop.larixgroup.ru/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2dHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eb335964a8aa2ddf822d1e97741cc7205b0b62e7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--4f2e047ccea1ca50a081d6ff0195fe0e647a9aa3/data" alt="http://shop.larixgroup.ru/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2dHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eb335964a8aa2ddf822d1e97741cc7205b0b62e7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--4f2e047ccea1ca50a081d6ff0195fe0e647a9aa3/data"/></a>
                            <div className={s.product_setting}>
                                <a>
                                    <div className={s.text}>Автобусная остановка "Сити"</div>
                                </a>
                                <div className={s.margin}>&nbsp;</div>
                                <div className={s.button_setting}>
                                    <button onClick={() => setAnimation(!animation)}><a >Заказать</a></button>
                                </div>
                            </div>
                        </div>
                        <div className={s.buy}>
                            <a className={s.a_setting}><img src="http://shop.larixgroup.ru/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2dHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eb335964a8aa2ddf822d1e97741cc7205b0b62e7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--4f2e047ccea1ca50a081d6ff0195fe0e647a9aa3/data" alt="http://shop.larixgroup.ru/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2dHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eb335964a8aa2ddf822d1e97741cc7205b0b62e7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--4f2e047ccea1ca50a081d6ff0195fe0e647a9aa3/data"/></a>
                            <div className={s.product_setting}>
                                <a>
                                    <div className={s.text}>Автобусная остановка "Сити"</div>
                                </a>
                                <div className={s.margin}>&nbsp;</div>
                                <div className={s.button_setting}>
                                    <button onClick={() => setAnimation(!animation)}><a >Заказать</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <aside className={`${animation ? s.basket_animation : s.basket}`}>
                <img  onClick={() => setAnimation(!animation)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAGFJREFUeNqslMsNwCAMQ9/W8Wis0mnaCyDUqiqJ62OwrXwBOICghuh6AjgBJQ3UdXEPKGmg7Ycs74uwnfEbMVvyQ6Bi86ewVQ0G2mJUgp2J3RN7Ovae2Btr384vV2z/J9cASuA9YMnlCxwAAAAASUVORK5CYII=" alt="close" className={s.basket_close}/>
                <h2 className={s.basket_h2}>Корзина</h2>
                <div className={s.preview}>
                    <a href="/products/LGO2-Avtobusnaya ostanovka &quot;Siti&quot;">
                    <div>
                        <img  src="//shop.larixgroup.ru/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2dHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--eb335964a8aa2ddf822d1e97741cc7205b0b62e7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--914a305a2d4ed396b4bee23cf7663f2851b2fc2e/data" alt="bench" className={s.preview_img}/><p className="Component-itemInfo-0-2-40">Автобусная остановка "Сити"</p></div>
                    </a>
                </div>
                <a href="/Basket"><button className={s.basket_button}>Посмотреть корзину</button></a>
                <div className={s.basket_form}>
                    <label>
                        <p>Имя</p>
                        <input type="text" name="firstname" required=""/>
                    </label>
                    <label>
                        <p>Телефон</p>
                        <input type="text" name="phone" required=""/>
                    </label>
                    <label>
                        <p>Электронная почта</p>
                        <input type="email" name="email" required=""/>
                    </label>
                    <a href="/Basket"><button className={s.basket_confirm}>Оформить</button></a>
                </div>
            </aside>
        </div>
    )
}