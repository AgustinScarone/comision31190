import { Link } from 'react-router-dom';

const NoStock = () => {
    return (
        <Link to="/menu/">
            <div className='noStock'>
                <div>
                    <img src="./img/nostock.jpg" alt="MOMO" className="noStock"/>
                </div>
                <article>
                    ¡UPS! PARECE QUE ALGUIEN SE LLEVÓ EL ÚLTIMO ANTES QUE VOS.<br/><br/>
                    HACÉ <span>CLICK ACÁ</span> PARA VOLVER AL MENÚ. <br/><br/>
                    YA SACAMOS EL PRODUCTO SIN STOCK DE TU CARRITO.
                </article>
            </div>
        </Link>
    )
}

export default NoStock