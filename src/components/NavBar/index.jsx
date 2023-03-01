import "./navbar.css";
import CardWidget from "../CardWidget";

function NavBar(){
    return(
        <div className="background nav-bar">
            <button>Velas</button>
            <button>Jabones</button>
            <button>Aromatizantes</button>
            <button>Sales de baño</button>
            <CardWidget/>
        </div>
    );
}

export default NavBar;