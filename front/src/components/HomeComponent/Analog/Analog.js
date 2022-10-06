import s from "./Analog.module.css";
import {Link} from "react-router-dom";
import {Privacy} from "../../Pivacy/Privacy";
import {useForm} from "react-hook-form";
// import MaskedInput from "react-text-mask";
import React, {useState} from "react";
import axios from "axios";




export const Analog=()=>{

    const [state, setState] = useState(
        {
            username: '',
            telephone: null,
            email:'',
            comment:'',
            // file:null
        }
    )
    const handleData=(params)=>{
        const newRate = state.username + params;
        const newRatePhone = state.telephone + params;
        const newRateEmail = state.email + params;
        const newRateComment = state.comment + params;
        // const newRateFile = state.file + params;

        setState({ ...state, username: newRate, telephone: newRatePhone, email: newRateEmail, comment: newRateComment });

        axios
            .post("http://127.0.0.1:8000/appeals/create/individual", {
                username: state.username,
                telephone: state.telephone,
                email: state.email,
                comment:state.comment
            })
            .then((response) => {
                console.log(response);
            });
    }

    const {
        register,
        formState:{
            errors,
            isValid
        },
        handleSubmit,
        reset,
    }=useForm({mode:"onBlur"});


    const onSubmit=(data)=>{
console.log(JSON.stringify(data))
        reset();
    }




    return(
        <div className={s.wrapper}>
<div className={s.order_promo}>
     <div className={s.order_promo_left}>
         <p>Доставка МАФ по<br/>всем городам России и<br/> ближнего зарубежья</p>
         <p>Сборка, монтаж и шеф-<br/>монтаж в Москве и других<br/> регионах РФ</p>
     </div>


    <div className={s.order_promo_right}>
        <h2>Подобрать аналог</h2>
        <p>Мы можем подобрать более недорогой аналог из нашего ассортимента<br/>
            в т.ч. импортозамещающий. Отправьте нам чертеж и ТЗ и получите расчет стоимости

        </p>
    </div>
</div>
            <form className={s.form_wrapper} onSubmit={handleSubmit(onSubmit)}>

                    <div className={s.order_inputs}>

                        <div className={s.order_inputs_wrapp}>
                            <label className="label">Имя и фамилия</label>
                            <input className="input_field" {...register('username',  {required: "Поле обязательно к заполнению", minLength:{value:3, message:" Минимум 3 символа"}})}/>
                            {errors.username&& errors.username.type==="required" && (
                                <div className="error">Поле обязательное</div>
                            )}
                            {errors.username&& errors.username.type==="minLength" && (
                                <div className="error">Минимум 3 символа</div>
                            )}
                        </div>

                        <div className={s.order_inputs_wrapp}>
                            <label className="label">Электронная почта</label>
                            <input className="input_field"  {...register('email',{required: true, pattern: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u })}/>
                            {errors.email&& errors.email.type==="required" && (
                                <div className="error">Введите email</div>
                            )}
                            {errors.email&& errors.email.type==="pattern" && (
                                <div className="error">Введен некорректный email</div>
                            )}
                        </div>
                    </div>

                    <div className={s.order_inputs2}>

                        <div className={s.order_inputs_wrapp}>
                            <label className="label">Телефон</label>
                            {/*<MaskedInput className="input_field"   {...register('phone',{required: true})}  mask={['+',/\d/, '(' , /[1-9]/, /\d/,/\d/, ')',' ', /\d/,/\d/, /\d/, '-', /\d/,/\d/,/\d/,/\d/ ] }/>*/}
                            <input   className="input_field"   {...register('telephone',{required: true })} />
                            {errors.telephone&& errors.telephone.type==="required" && (
                                <div className="error">Поле обязательное</div>
                            )}
                        </div>


                        <div className={s.order_inputs_wrapp}>
                            <label className="label" >Комментарии</label>
                            <textarea type="text" className="input_field"  {...register('comment',  {required: true})}/>
                            {errors.comment&& errors.comment.type==="required" && (
                                <div className="error">Поле обязательное</div>
                            )}
                        </div>

                    </div>

                <div className="order_attach">
                    <img src="./Data/clip.png" />
                    <label className="label_attach"><span>Приложите файлы</span> для расчета стоимости</label>
                </div>

                    <div className={s.order_checkbox}>
                        <input type="checkbox" name="feedback"/>

                        <label className={s.label_order}>Я согласен  <Link to="/privacy" component={<Privacy/>}><span>с условиями</span></Link></label>
                    </div>
                    <input type="submit" name="commit" value="рассчитать стоимость" className={s.btn_cost} placeholder="рассчитать стоимость" disabled={!isValid} onClick={()=>handleData(onSubmit)}/>

                </form>

        </div>
    )
}