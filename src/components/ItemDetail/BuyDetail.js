import { Link } from "react-router-dom"

const BuyDetail = () => {
    return(
        <div className="containerButtons">
            <Link to='/cart' className="linkButtons alert">FINALIZAR COMPRA</Link>
            <Link to='/menu' className="linkButtons">SEGUIR COMPRANDO</Link>
        </div>
    )
}

export default BuyDetail