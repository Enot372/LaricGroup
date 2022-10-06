import s from "./AboutComponet.module.css";
export const AboutComponent=()=>{
    return(
        <>

        <div className={s.container}>
<h2 className={s.title}>О компании</h2>
            <div className={s.wrapper}>
                <div className={s.wrapper_left}>
                    <p>Готовы включиться в работу на <br/>любом этапе, от создания <br/> дизайн-поекта до реализации <br/> проекта с полным озеленением, <br/> благоустройством территории, <br/> изготовлением и поставкой <br/> МАФ.</p>
                </div>

                <div className={s.wrapper_center}>
                    <p className={s.paragraph}>Строительно-ландшафтная группа компаний<br/> ООО «АРТекнолоджи» и ООО «Ларикс» работает на рынке с 2005 года</p>
                    <div className={s.flex_container}>
                        <div className={s.left_side_text}>
                            <p className={s.year}>2005</p>
                            <p>работаем с 2005 года</p>
                        </div>
                        <div className={s.right_side_text}>
                            <p className={s.year}>205</p>
                            <p>более 250 проектов</p>
                        </div>

                    </div>
                    <p className={s.paragraph}>Компания выполняет полный цикл<br/> ландшафтных работ на прилегающих<br/>  территориях и приусадебных участках любой<br/>  площади</p>
                    <p className={s.paragraph}>В слаженной работе с профессиональными<br/>  дизайнерами, инженерами и садовниками мы <br/> успешно реализовали более 250 проектов<br/>  различного масштаба в Москве и Санкт-<br/> Петербурге</p>
                </div>

                <div className={s.wrapper_right}>
                    <img src={"./Data/medal.png"} />
<p className={s.first_text}>Премия</p>
                    <p className={s.second_text}>Urban<br/>Awards</p>
                </div>
            </div>
        </div>
        </>
    )
}