const ItemProduct = (props) =>{
    return(
        <div className="containerMenu">
            <img src="./img/angle-down-solid.svg" alt="+ Info" />
            <h2>{props.menuName}</h2>
            <article>{props.menuInfo}</article>
            <div className="precio">{props.menuPrice}</div>
        </div>
    )
}

export default ItemProduct