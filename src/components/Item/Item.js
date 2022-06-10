import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';

const Item = ({id, menuImg, menuName, menuPrice}) => {
        return(
        <div className="itemCard">
            <div className="img">
                <img src={`../img/products/${menuImg}`} alt={menuName}/>
            </div>
            <div className="itemInfo">
                <CurrencyFormat value={menuPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} className='precio moneyFont'/>
                <h2>{menuName}</h2>
                <Link to={`/detalle/${id}`} className="verDetalle">VER DETALLE</Link>
            </div>
        </div>
    )
}

export default Item