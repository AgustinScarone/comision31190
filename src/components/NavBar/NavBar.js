import CartWidget from "../CartWidget/CartWidget"
import LogoNavBar from "./LogoNavBar"

const NavBar = () => {
    return (
        <nav>
            <LogoNavBar />
            <div>
                <button>MENU</button>
                <button>LOCALES</button>
                <button>CONTACTO</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar