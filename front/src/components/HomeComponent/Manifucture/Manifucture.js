import s from "./Manifacture.module.css";

export const Manifucture=()=>{
    return(
        <>
            <div className={s.container}>
           <div className={s.line}></div>

        <div className={s.wrapper}>
            <div className={s.content_left}>
                <p className={s.content_left_text}>
                    устроено <span>разумно</span> - устроено  <span>красиво</span>
                </p>
                <h1 className={s.content_left_slogan}>
                    Производство<br/>
                    малых <br />
                    архитектурных форм
                </h1>
                <p className={s.content_left_text2}>
                    Парковые, игровые, спортивные МАФ по вашему проекту за 30 дней! Гарантия - 2 года!
                </p>
                <div className={s.wrapper_btn}>
                    <div className={s.btn_left}>
                        <a>Презентация</a>
                    </div>
                    <div className={s.btn_right}>
                        <a>Скачать каталог</a>
                    </div>

                </div>
            </div>
            <div className={s.content_right}>
                <div className={s.content_high}>
                    <img src={"./Data/painting.png"} className={s.img1}/>
                    <p className={s.text_design}>Дизайн от <span className={s.text}>европейских</span> художников</p>
                </div>
                <div className={s.content_low}>
                    <img src={"./Data/painter2.png"} className={s.img2}/>
                    <p className={s.text_design}>Реализация от <span className={s.text}>опытных</span> строителей</p>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}