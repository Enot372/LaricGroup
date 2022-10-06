import s from "./Awards.module.css";
export const Awards=()=>{
    return(

<div className={s.urban}>
    <div className={s.urban_left}>
        <div className={s.urban_image}></div>
        <p className={s.urban_small_text}>Премия</p>
        <p className={s.urban_large_text}>URBAN<br /> AWARDS</p>
    </div>
    <div className={s.urban_center}>
        <p className={s.large_text}> Мы готовы<br /> включиться в<br /> работу на любом <br/> этапе</p>
        <p className={s.small_text}>
            Нужен красивый и современный, технически грамотно<br/> реализованный ландшафный дизайн, который долгие годы<br/>  будет радовать глаз? Для вас работает LarixGroup. От<br/>  создания дизайн поекта до реализации проекта с полным<br/>  озеленением, благоустройством территории, изготовлением и<br/>  поставкой МАФ
        </p>
    </div>
    <div className={s.urban_right}>
        <div>
            <p className={s.right_large}>2005</p>
            <p className={s.right_small}>Работаем с 2005 года</p>
        </div>
        <div>
            <p className={s.right_large}>250</p>
            <p  className={s.right_small}>Более 250 проектов</p>
        </div>
    </div>
</div>

    )
}