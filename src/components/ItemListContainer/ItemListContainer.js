import ItemProducts from "../ItemProducts/ItemProducts";

const ItemListContainer = () => {
    return (
        <section className="sectionProducts">
            <ItemProducts id={"burga01"} name={"CLASSIC BURGER"} stock={6}/>
            <ItemProducts id={"burga02"} name={"EGG N BURGER"} stock={2}/>
            <ItemProducts id={"burga03"} name={"CORONABURGER"} stock={6}/>
            <ItemProducts id={"burga04"} name={"JIMMY KOMBO"} stock={3}/>
        </section>
    )
}

export default ItemListContainer