import CartWidget from "../CartWidget/CartWidget";
import LogoNavBar from "./LogoNavBar";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <LogoNavBar />
            <div>
                <Link to="/menu" className="button">MENU</Link>
                <Link to="/locales" className="button">LOCALES</Link>
                <Link to="/contacto" className="button">CONTACTO</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar