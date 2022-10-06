import styles from "./ContactsComponent.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import s from "../HomeComponent/New/New.module.css";
import {Modal} from "../Modal/Modal";


export const Contacts = () => {
    const [data, setData]=useState([]);
    const [modalActive, setModalActive]=useState(false);

    const src= "http://127.0.0.1:8000/info/contact/";
    useEffect(()=>{
        axios
            .get(src)
            .then(data=>{

                setData(data.data)
                // console.log(data.data)
            })
    }, [])
    console.log(data)


    return (

      <div className="container">

       <div className={styles.container}>

           {/*{Object.keys(data).map(item=>(<div>{data[item]}</div>))}*/}


           <div className={styles.title}>
                           <h1>ооо "ларикс"</h1>
                           <p>инн 7727794655 огрн 1127747254172</p>
                       </div>
                       <div className={styles.contacts_container}>
                           <div className={styles.left_side}>
                               <div className={styles.contacts_title}> Москва, Россия</div>
                               <div className={styles.number_block}>
                                   <a href="tel:+7 (495) 7870039">+7 (495) 7870039</a>
                               </div>
                               <div> <a className={styles.order_call}  onClick={()=>setModalActive(true)}>Заказать звонок</a></div>
                               <Modal active={modalActive} setActive={setModalActive} />
                           </div>

                           <div className={styles.right_side}>
                               <p>
                                   <span>121433 &nbsp;</span>
                                   <span>Большая филевская 33</span>
                               </p>
                               <p>
                                   <span className={styles.work_text}>Мы работаем: &nbsp;</span>
                                   <span>Пн-Пт, 09:00-18:00</span>
                               </p>
                           </div>
                       </div>


       </div>

      </div>





  );
};
