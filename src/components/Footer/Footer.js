import Logo from "../Assets/Logo"
import { LinkMenu, LinkLocations, LinkContact, LinkCall, LinkInstagram, LinkFacebook, LinkWhatsApp } from '../Assets/Variables';

const Footer = () => {
    return (
        <footer>
            <div>
                < Logo />
            </div>
            <div>
                <h2>MOMO</h2>
                {LinkCall}
                {LinkMenu}
                {LinkLocations}
                {LinkContact}
            </div>
            <div className="social">
                <h2>REDES</h2>
                {LinkFacebook}
                {LinkInstagram} 
                {LinkWhatsApp}                    
            </div>
        </footer>
    )
}

export default Footer