import { useLocation } from "react-router-dom";

const Loading = () => {
    
    const location = useLocation();

    return (
        <div className='loading'>
            { location.pathname === "/cart" 
                ? <h2>GENERANDO ORDEN...</h2>
                : <h2>CARGANDO...</h2>
            }
            <img src="../img/loading.gif" alt="Loading..."/>
        </div>
    )
}

export default Loading