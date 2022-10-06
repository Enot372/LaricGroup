import "./Modal.css";
import { Icon } from "@iconify/react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from 'axios';



export const Modal = ({ active, setActive }) => {


    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,

    } = useForm({ mode: "onBlur" });


    const onSubmit = (data) => {
        // handleData(data)
        // console.log(JSON.stringify(data))
        // return JSON.stringify(data);
        // reset();
    }

    const handleData = (e) => {
        axios({
            method: 'post',
            url: "http://127.0.0.1:8000/appeals/create/call",
            headers: {},
            data: {
                username: e.username,
                telephone: e.telephone
            }
        }).then((response) => {
            setActive(false)
        })
    }


    return (

        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                <div className="cross_block"><Icon icon="akar-icons:cross" vFlip={true} onClick={() => setActive(false)} className="cross" /></div>
                <div className="content_window">
                    <h1 className="text_modal">Заказать <span>звонок</span></h1>
                    <form className="form" onSubmit={handleSubmit(handleData)}>
                        <div className="inp_input">
                            <input placeholder="Ваше имя" className="inp_field"  {...register('username', { required: true })} />
                            <input placeholder="Ваш телефон" className="inp_field"    {...register('telephone', { required: true })} />
                        </div>
                        <div className="conditions">
                            <input type="checkbox"  {...register('agree', { required: true })} />
                            <p>Я согласен с <span>условиями</span></p>
                        </div>
                        <button className="send" type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}






// import React from "react";
// // import "./styles.css";
// import MaskedInput from "react-input-mask";
// import { useForm } from "react-hook-form";
//
// const isNotFilledPhone = v =>
//     v && v.indexOf("_") === -1 ? undefined : "Phone number is required.";
//
// const Input = props => {
//     console.log(props);
//     const { name, inputRef, value, maskChar, ...inputProps } = props;
//     return <input name={name} ref={inputRef} {...inputProps} />;
// };
//
// const onSubmit = data => {
//     console.log(data);
// };
//
// export const Modal=()=> {
//     const { register, handleSubmit, errors, getValues, setValue } = useForm();
//     const { maskedInputTel } = getValues();
//     return (
//         <div className="App">
//             <h1>Hello CodeSandbox</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div>
//                     <MaskedInput
//                         value={maskedInputTel}
//                         name="maskedInputTel"
//                         inputRef={register({
//                             validate: {
//                                 inputTelRequired: isNotFilledPhone
//                             }
//                         })}
//                         mask="+9 (999) 999-99-99"
//                         alwaysShowMask
//                         onChange={e => setValue("maskedInputTel", e.target.value)}
//                         maskChar={null}
//                     >
//                         <Input />
//                     </MaskedInput>
//                     {errors.maskedInputTel && <p>{errors.maskedInputTel.message}</p>}
//                 </div>
//                 <input type="submit" />
//             </form>
//         </div>
//     );
// }
