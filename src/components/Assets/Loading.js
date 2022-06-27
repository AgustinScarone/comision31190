import { useLocation } from "react-router-dom";

const Loading = () => {
    
    const location = useLocation();

    return (
        <div className='loading'>
            { location.pathname === "/checkout"
                    ? <h2>GENERANDO ORDEN...</h2>
                    : <div className="containerItemButtons">{location.pathname === "/contacto" 
                    ? <h2>ENVIANDO...</h2>
                    : <h2>CARGANDO...</h2>
                }</div>
                }
            <img src="../img/loading.gif" alt="Loading..."/>
        </div>
    )
}

export default Loading