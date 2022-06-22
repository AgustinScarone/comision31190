import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Assets/Logo"
import { LinkMenu, LinkLocations, LinkContact, LinkCall } from '../Assets/Variables';

const NavBar = () => {
    return (
        <nav>
            <Logo />
            <div>
                {LinkMenu}
                {LinkLocations}
                {LinkContact}
                {LinkCall}
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar