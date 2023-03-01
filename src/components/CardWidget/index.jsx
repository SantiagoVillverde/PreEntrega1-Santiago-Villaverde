import { BsFillCartFill } from "react-icons/bs";
import "./CardWidget.css";


function CardWidget(){
    return(
        <div className="background card-widget">
            <button> <i><BsFillCartFill/></i><span>4</span></button>
        </div>
    );
}

export default CardWidget;