import Logo from "../Assets/Logo"
import { LinkMenu, LinkLocations, LinkContact, LinkCall } from '../Assets/Variables';
import { getSocial } from "../../services/firebase/firestore";
import { useFirestore } from '../../hooks/useFirestore'

const Footer = () => {

    const { social } = useFirestore(() => getSocial())

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
                { social.map(prod =>
                    <a key={prod.id} href={prod.link} target="_BLANK" dangerouslySetInnerHTML={{__html:prod.img}}></a>                  
                )}
            </div>
        </footer>
    )
}

export default Footer