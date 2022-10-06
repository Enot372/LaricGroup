import React from "react";
import s from "./Catalog.module.css";
import {MAFbutton} from "../ModuleComponent/MAFbutton/MAFbutton";
import {CatalogLine} from "../ModuleComponent/CatalogLine/CatalogLine";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const Catalog = () => {

    // const [articles, setArticles]=useState([]);
    //
    // const src= "http://127.0.0.1:8000/products";
    // useEffect(() => {
    //     axios
    //         .get(src)
    //         .then(data=>{
    //             console.log(data)
    //             setArticles(data.data.results)
    //         })
    // },
    //     [])
    // console.log(articles)
    axios.get('http://127.0.0.1:8000/products/')
        .then((response) =>
        console.log(response.data))


    return (
        <div className={s.catalog}>
            <MAFbutton/>
            <div className={s.div_li}>
                <ul className={s.list_setting}>
                    <li><a href="/">Главная</a></li>
                    <li className="Component-arrow-0-2-11">→</li>
                    <li className={s.li_color}>Каталог малых архитектурных форм</li>
                </ul>
            </div>
            <CatalogLine/>
            <div className={s.components}>
                <a href="/Categories">
                    <div className={`${s.div_wall} ${s.ic_setting}`}></div>
                    <div className={s.div_p}>
                        <p>Подпорные стенки</p>
                    </div>
                </a>

                <a href="/Categories">
                    <div className={`${s.div_flow} ${s.ic_setting}`}></div>
                    <div className={s.div_p}>
                        <p>Вазоны, цветочницы</p>
                    </div>
                </a>

                <a href="/Categories">
                    <div className={`${s.div_bench} ${s.ic_setting}`}></div>
                    <div className={s.div_p}>
                        <p>Скамейки личные</p>
                    </div>
                </a>

                <a href="/Categories">
                    <div className={`${s.div_grid} ${s.ic_setting}`}></div>
                    <div className={s.div_p}>
                        <p>Приствольные решетки</p>
                    </div>
                </a>

                <a href="/Categories">
                    <div className={`${s.div_yrn} ${s.ic_setting}`}></div>
                    <div className={s.div_p}>
                        <p>Урны уличные</p>
                    </div>
                </a>

                <a href="/Categories">
                    <div className={`${s.div_stolb} ${s.ic_setting}`}></div>
                    <div className={s.div_p}>
                        <p>Столбики Ограничительные</p>
                    </div>
                </a>

                <a href="/Categories">
                    <div className={`${s.div_velo} ${s.ic_setting}`}></div>
                    <div className={s.div_p}>
                        <p>Велопарковки</p>
                    </div>
                </a>

                <a href="/Categories">
                    <div className={`${s.div_ost} ${s.ic_setting}`}></div>
                    <div className={s.div_p}>
                        <p>Остановки</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
