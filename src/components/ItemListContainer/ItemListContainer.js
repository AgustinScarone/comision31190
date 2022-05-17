import ItemProducts from "../ItemProducts/ItemProducts";

const ItemListContainer = () => {
    return (
        <section className="sectionProducts">
            <ItemProducts id={"burga01"} name={"CLASSIC BURGER"} />
            <ItemProducts id={"burga02"} name={"EGG N BURGER"}/>
            <ItemProducts id={"burga03"} name={"CORONABURGER"}/>
            <ItemProducts id={"burga04"} name={"JIMMY KOMBO"}/>
        </section>
    )
}

export default ItemListContainer