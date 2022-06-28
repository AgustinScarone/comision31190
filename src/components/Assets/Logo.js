import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/">
                <img src="../img/logo.png" alt="MOMO" className="logo"/>
        </Link>
    )
}

export default Logo