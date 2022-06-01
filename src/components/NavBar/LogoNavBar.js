import { Link } from 'react-router-dom';

const LogoNavBar = () => {
    return (
        <Link to="/">
            <div>
                <img src="../img/logo.png" alt="MOMO" className="logo"/>
            </div>
        </Link>
    )
}

export default LogoNavBar