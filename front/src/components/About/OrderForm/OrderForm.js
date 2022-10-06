import s from "./OrderForm.module.css";
import {Link} from "react-router-dom";
import {Privacy} from "../../Pivacy/Privacy";
import {useForm} from "react-hook-form";
import MaskedInput from "react-text-mask";
import React, {useState} from "react";
import axios from "axios";
export const OrderForm=()=>{
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

    const onSubmit = data => console.log(data);





    return(
        <div className={s.container}>
            <div className={s.wrapp}>
            <h2> Закажите благоустройство </h2>
            <form className={s.form_order} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.order_input_high}>
                    <div className={s.input_wrapp}>
                        <label className="label">Имя и фамилия</label>
                        <input className={s.input_field} {...register('username',  {required: "Поле обязательно к заполнению", minLength:{value:3, message:" Минимум 3 символа"}})}/>
                        <div className="error">{errors?.username?.message}</div>
                    </div>
                    <div className={s.input_wrapp}>
                        <label className="label">Электронная почта</label>
                        <input className={s.input_field}   {...register('email',  {required: "Поле обязательно к заполнению",pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/, message: "Введите корректный email "},minLength:{value:3, message:" Минимум 3 символа"}})}/>
                        <div className="error">{errors?.email?.message}</div>
                    </div>
                </div>
                <div className={s.order_input_low}>
                    <div>
                        <label className="label">Телефон</label>
                        {/*<MaskedInput className={s.input_field}  mask={['+',/\d/, '(' , /[1-9]/, /\d/,/\d/, ')',' ', /\d/,/\d/, /\d/, '-', /\d/,/\d/,/\d/,/\d/ ] }/>*/}
                        <input   className="input_field"   {...register('telephone',{required: true })} />
                        <div className="error">{errors?.telephone?.message}</div>
                    </div>
                    <div>
                        <label className="label" >Комментарии</label>
                        <textarea className={s.input_field}  {...register('comment',  {required: "Поле обязательно к заполнению"})}/>
                        <div className="error">{errors?.comment?.message}</div>
                    </div>
                    <div className={s.order_checkbox}>
                        <input type="checkbox" className={s.order_check}/>
                        <label className={s.label_check}>Я согласен  <Link to="/privacy" component={<Privacy/>}><span>с условиями</span></Link></label>
                    </div>

                    <input type="submit" name="commit" value="связаться" className={s.btn_order} placeholder="связаться" onClick={()=>handleData}/>
                </div>
            </form>
            </div>
        </div>
    )
}