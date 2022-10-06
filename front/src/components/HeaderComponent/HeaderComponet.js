import styles from "./HeaderComponent.module.css";
import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Manifucture } from "../HomeComponent/Manifucture/Manifucture";
import { Icon } from "@iconify/react";
import { Modal } from "../Modal/Modal";
import { Basket } from "../BasketComponents/Basket";
import { Link } from "react-router-dom";


export const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [bg, setBg] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }



  let location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        return setBg("house")
      case '/catalog':
        return setBg("")
      case '/individual':
        return setBg("park")
      case '/about':
        return setBg("house")
      case '/contacts':
        return setBg("")
      case '/portfolio':
        return setBg("")
      default:
        return setBg("");
    }
  }, [location.pathname])


  return (
    <>
      <div className={`${bg} wrapper `}>



        <div className="container">
          <div className={styles.header_info}>
            <div className={styles.info_left}>

              <div className={styles.logo_address}>

                <div className={styles.logo_block}>
                  <a href="/" className={styles.logo}>Larix Group</a>
                </div>
                <div className={styles.address}>
                  <div>
                    <a href="tel:+74957870039" className={styles.number_telephone}>
                      +7 (495) 787 00 39
                    </a>
                  </div>

                  <div>Москва</div>
                  <div>
                    <span>ПН - ВС&nbsp;&nbsp;</span>
                    <span>9:00 - 18:00</span>
                  </div>
                </div>
              </div>

              <div className={styles.logo_text}>
                <h5 className={styles.name}>Ландшафтно строительная компания</h5>
                <h5>Производство малых архитектурных форм</h5>
              </div>
            </div>

            <button className={styles.call_me} onClick={() => setModalActive(true)}>
              <p className={styles.call_me_text}>перезвоните мне</p>
            </button>
            <Modal active={modalActive} setActive={setModalActive} />


          </div>


          <div className={styles.header_control_global}>
            <div className={styles.header_control}>
              <nav className={styles.header_nav}>
                <label htmlFor="btn-menu"></label>
                <NavLink
                  to="/"
                  className={styles.nav_link}
                  activeClassName={"nav-link-selected"}
                >
                  ГЛАВНАЯ
                </NavLink>
                <NavLink
                  to="/catalog"
                  className={styles.nav_link}
                  activeClassName={"nav-link-selected"}
                >
                  КАТАЛОГ
                </NavLink>
                <NavLink
                  to="/individual"
                  className={styles.nav_link}
                  activeClassName={"nav-link-selected"}
                >
                  ИНДИВИДУАЛЬНЫЕ МАФ
                </NavLink>
                <NavLink
                  to="/about"
                  className={styles.nav_link}
                  activeClassName={"nav-link-selected"}
                >
                  О НАС
                </NavLink>
                <NavLink
                  to="/contacts"
                  className={styles.nav_link}
                  activeClassName={"nav-link-selected"}
                >
                  КОНТАКТЫ
                </NavLink>
                <NavLink
                  to="/portfolio"
                  className={styles.nav_link}
                  activeClassName={"nav-link-selected"}
                >
                  ПОРТФОЛИО
                </NavLink>
              </nav>
            </div>
            <div className={styles.header_control}>
              <img src={"./Data/cart-full-450f2499c3ee4b7d9c4a3ef1bf326b224542340f0f0b9c30368ff01f5dae871e.png"} className={styles.bucket_img} />

              <img src={"./Data/hum-menu-a33e4f3e6a9947da2544f2c1349e3ade926359e9a57a1ce31a7c065365de4c2c.png"} className={styles.menu_img} onClick={openModal} />
              {modalIsOpen && (<div className={styles.dropdown}>
                <div className={styles.list_menu}>
                  <h2>Меню</h2>
                  <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/catalog">Каталог</a></li>
                    <li><a href="/individual">Индивидуальные МАФ</a></li>
                    <li><a href="/aboutus">О нас</a></li>
                    <li><a href="/contacts">Контакты</a></li>
                    <li><a href="/portfolio">Портфолио</a></li>
                  </ul>
                  <div className={styles.menu_info}>
                    <div className={styles.text_high}>
                      <h3>+7 (495) 787 00 39</h3>
                      <p>zakaz@larixgroup.ru</p>
                      <p>Ежедневнос 9:00 до 19:00</p>
                    </div>


                    <div className={styles.text_low}>
                      <p>Ландшафтно- строительная компания</p>
                      <p>Производство малых архитектурных форм</p>
                    </div>
                  </div>
                </div>

                <div > <Icon icon="akar-icons:cross" color="black" vFlip={true} onClick={closeModal} className={styles.cross_icon} /></div>
              </div>)}

              <div className={styles.control_backet}>
                <div className={styles.control_backet_title}> <Link to="/Basket" component={<Basket />}><p>Ваша корзина</p></Link>
                </div>
                <div className={styles.control_backet_count}>пусто</div>
              </div>
            </div>

          </div>
          {
            bg && <Manifucture />
          }


        </div>


      </div>
    </>
  );
};
