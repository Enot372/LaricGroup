import s from "./Partners.module.css";
export const Partners=()=>{
    return(
   <>
            <div className={s.slider_wrapp}>
<div className={s.slider_header}>
<h2>Нам доверяют</h2>
    <div className={s.slider_btn}>
        <button className={s.btn1}></button>
        <button className={s.btn2}></button>
    </div>
</div>
                <div className={s.slider_partners}>
<div className={s.slider}>
    <div className={s.slider_block}>
        <img src={"./Data/image.png"}/>
    </div>
    <div className={s.slider_block}>
        <img src={"./Data/image (1).png"}/>
    </div>
    <div className={s.slider_block}>
        <img src={"./Data/image (2).png"}/>
    </div>
    <div className={s.slider_block}>
        <img src={"./Data/image (3).png"}/>
    </div>
    <div className={s.slider_block}>
        <img src={"./Data/image (4).png"}/>
    </div>
    <div className={s.slider_block}>
        <img src={"./Data/image (5).png"}/>
    </div>
    <div className={s.slider_block}>
        <img src={".Data/image (6).png"}/>
    </div>

</div>
                </div>

            </div>
            <div className={s.partners_block}>
                <div className={s.partners_face}>
                    <div className={s.content}>
                        <img src={"./Data/woman1.jpeg"}/>
                    </div>
                    <div className={s.title}>
                        Ковтун Мария
                    </div>
                    <div className={s.text_wrapp}>
                        <p>Руководитель<br/> компании с 2009г.</p>
                        <p>Ландшафтный <br/>дизайнер с 2007г.</p>
                    </div>
                </div>
                <div className={s.partners_face}>
                    <div className={s.content}>
                        <img src={"./Data/woman2.jpeg"}/>
                    </div>
                    <div className={s.title}>
                        Добжевич Евгения
                    </div>
                    <div className={s.text}>
                        <p>Ландшафтный архитектор с 2009г.</p>
                    </div>
                </div>
                <div className={s.partners_face}>
                    <div className={s.content}>
                        <img src={"./Data/man.jpeg"}/>
                    </div>
                    <div className={s.title}>
                        Стрелков Сергей
                    </div>
                    <div className={s.text}>
                        <p>Ландшафтный архитектор с 2009г.</p>
                    </div>
                </div>
            </div>
   </>

    )
}