import styles from "./Individual.module.scss";

function IndividualPage() {
  const items = [1, 2, 3, 4, 5, 6]
  
  return (
    <div className="container" >
      <div className={styles.about}>
        <h2 className={styles.title}>
          <span >Малые</span> архитектурные формы (маф)
        </h2>
        <div className={styles.about_description}>
          <div className={styles.about_block}>

            <p className={styles.about_text}>
              Компания "ЛАРИКС" – ваш надежный партнер в сфере производства индивидуальных малых архитектурных форм, парковой и городской мебели, изделий для благоустройства парков и жилых дворов, детского игрового и спортивного оборудования, осуществляющий свою деятельность по всей территории всей России.
              <span>
                Ознакомьтесь с нашей продукцией:
              </span>
            </p>
            <div className={styles.about_icons}>
              <a className={styles.about_icon}>
                <img src={"./img/content_signSlide.png"} alt="" />
                <p href="#" >
                  игровое оборудование
                </p>
              </a>
              <a className={styles.about_icon}>
                <img src={"./img/content_signBasc.png"} alt="" />
                <p href="#" >
                  игровое оборудование
                </p>
              </a>
              <a className={styles.about_icon}>
                <img src={"./img/content_signPark.png"} alt="" />
                <p href="#" >
                  игровое оборудование
                </p>
              </a>
            </div>
          </div>
          <div className={styles.about_block}>
            <div className={styles.about_img}>
              <img src={"./img/content_maf-1.jpg"} alt="" className={styles.about_big_img} />
              <div className={styles.about_small_images}>
                <img src={"./img/maf2-e66d06a5e7588a0fab54b9736637f14389b644cdbfc3317008925cceb02ad3d9.jpg"} alt="" className={styles.about_small_img} />
                <img src={"./img/maf3-9800b2ad891ef5d5f47914ceb7a81200dda33473fe5b8d14ee70a849fb84482d.jpg"} alt="" className={styles.about_small_img} />
                <img src={"./img/maf4-87a1cad4d2fe6d42b20a464b7e0268d2432c99b0887e4566acc96999abee9370.jpg"} alt="" className={styles.about_small_img} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about_buttons}>
          <button className={styles.about_button}>
            презентация
          </button>
          <button className={styles.about_button}>
            скачать каталог
          </button>
        </div>
        <div className={styles.about_classification}>
          <div className={styles.title}>
            <h2 className={styles.title}>
              <span >КЛАССИФИКАЦИЯ </span>
              МАФ
            </h2>
          </div>
          <div className={styles.about_classes}>
            <div className={styles.about_class}>
              <img src={"./img/content_content_bench.png"} alt="" className={styles.about_class_img} />
              <p className={styles.about_class_title} >
                УНИВЕРСАЛЬНЫЕ
              </p>
              <p className={styles.about_class_description}>
                (для повсеместного ежедневного <br />
                использования) — вазоны для <br />
                цветов, фонари, скамейки, <br />
                мусорные урны и пр.;
              </p>
            </div>
            <div className={styles.about_class}>
              <img src={"./img/content_content_bust.png"} alt="" className={styles.about_class_img} />
              <p className={styles.about_class_title} >
                ДЕКОРАТИВНЫЕ
              </p>
              <p className={styles.about_class_description}>
                (для украшения среды) — статуи и скульптуры <br /> разных форм, фонтаны, беседки, мозаичные <br /> основания бассейна, мостики и  искусственные ручьи;
              </p>
            </div>
            <div className={styles.about_class}>
              <img src={"./img/content_content_sandbox.png"} alt="" className={styles.about_class_img} />
              <p className={styles.about_class_title} >
                ДОСУГОВЫЕ
              </p>
              <p className={styles.about_class_description}>
                (для детских и спортивных игр) —<br /> песочницы, качели, горки,<br /> шведская стенка.
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className={styles.items}>
        <h2 className={styles.title}>
          <span >Виды</span> маф
        </h2>
        {
          items.map((value, index) => {
            return <div className={`${index % 2 === 0 ? `${styles.item}` : `${styles.item_right}`}`}>
              <div className={styles.item_description}>
                <h3 className={styles.item_title}>
                  вазоны
                </h3>
                <p className={styles.item_text}>
                  Цветочные вазоны или цветочные клумбы - прекрасный способ подчеркнуть красоту и уникальность вашего сада в течение всего сезона. Декоративные вазоны из бетона отлично подходят для небольших садов, где особенно важно оптимально использовать каждый кусочек территории. Вазоны для цветов из бетона с красивым рельефным орнаментом используют и в качестве украшений входных групп, и как навершия на столбах и тумбах, и как цветники на участке. Вазоны бывают простой и сложной формы, стационарные и переносные. Изготавливаются из различных материалов. Правильно подобранные вазоны для цветов станут интересным элементом ландшафтного дизайна подчеркнут красоту и особенности большинства садовых растений.
                </p>
              </div>
              <div className={styles.item_img}>
                <img src={"./img/1.jpeg"} alt="" />

              </div>
            </div>
          })
        }

      </div>
    </div>
  )
}

export default IndividualPage