import Logo from "../Assets/Logo"
import { LinkMenu, LinkLocations, LinkContact, LinkCall, LinkInstagram, LinkFacebook } from '../Assets/Links';

const Footer = () => {
    return (
        <footer>
            <section>
                <div>
                    <button>< Logo /></button>
                </div>
                <div>
                    <h2>MOMO</h2>
                    {LinkCall}
                    {LinkMenu}
                    {LinkLocations}
                    {LinkContact}
                </div>
                <div className="redes">
                    <h2>REDES</h2>
                    {LinkFacebook}
                    {LinkInstagram}                    
                </div>
            </section>
        </footer>
    )
}

export default Footer