import { Link } from 'react-router-dom';

const Item = ({id, menuImg, menuName, menuPrice}) => {
        <div className="itemList">
            <div className="img">
                <img src={`../img/products/${menuImg}`} alt={menuName}/>
            </div>
            <div className="itemInfo">
                <div className="precio">$ {menuPrice}</div>
                <h2>{menuName}</h2>
                <Link to={`/detail/${id}`} className="verDetalle">VER DETALLE</Link>
            </div>
        </div>
}

export default Item