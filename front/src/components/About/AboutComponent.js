import {Manifucture} from "../HomeComponent/Manifucture/Manifucture";
import {AboutComponent} from "./AboutCompany/AboutComponent";
import {Sertificate} from "./Sertificate/Sertificate";
import {Discount} from "../HomeComponent/Discount/Discount";
import {Article} from "../HomeComponent/Artical/Article";
import {Questions} from "../HomeComponent/Questions/Questions";
import {Reasons} from "../HomeComponent/Reasons/Reasons";
import {Works} from "./Works/Works";
import {Partners} from "./Partners/Partners";
import {OrderForm} from "./OrderForm/OrderForm";
import {Delivery} from "./Delivery/Delivery";
import {Garanty} from "../Garanty/Garanty";

export const About=()=>{
    return(
        <div>

            <div className="container">
            <AboutComponent />
                <Sertificate />
                <Discount />
                <Article />
                <Reasons />
            </div>
            <Questions />
            <div className="container">
                <Works />
                <Partners/>
            </div>
<OrderForm />
            <div className="container">
                <Delivery />
                <Garanty/>
            </div>
        </div>
    )
}