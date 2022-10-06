import {News} from "./New/New";
import {Order} from "./Order/Order";
import {Awards} from "./Awards/Awards";
import {Reasons} from "./Reasons/Reasons";
import {Discount} from "./Discount/Discount";
import {Promo} from "./Promo/Promo";
import {Analog} from "./Analog/Analog";
import {Article} from "./Artical/Article";
import {Questions} from "./Questions/Questions";


export const Home=()=>{
    return(
     <>
         <div className="container">
             <News />
             <Order />
             <Awards />
             <Reasons/>
             <Discount />
             <Promo />
             <Analog />
             <Article />
         </div>
                     <Questions />

     </>
    )
}
