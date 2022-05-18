import ItemProducts from "../ItemProducts/ItemProducts";

const ItemListContainer = () => {
    return (
        <section className="sectionProducts">
            <ItemProducts menuImg={"burga01"} menuName={"HAMBURGUESA CLÁSICA"} menuData={"Fantástica hamburguesa con un medallón de carne 100% vacuna de 210g, queso cheddar, tomate, cebolla caramelizada con techo de crocante y fresca lechuga entre panes de la casa."}  menuPrice={"$799"} menuStock={3}/>
            <ItemProducts menuImg={"burga02"} menuName={"HAMBURGUESA CON HUEVO"} menuData={"Hamburguesa con un medallón de carne 100% vacuna de 180g, tomate, lechuga, salsa especial, coronado con un regio huevo frito entre panes de la casa."}  menuPrice={"$799"} menuStock={6}/>
            <ItemProducts menuImg={"burga03"} menuName={"CORONABURGER"} menuData={"360g de carne en dos medallones de carne 100% vacuna bañados en tormenta de queso emmental entre panes de la casa. Se recomienda realizar ejercicios de cardio una vez consumida para evitar problemas coronarios."}  menuPrice={"$999"} menuStock={5}/>
            <ItemProducts menuImg={"burga04"} menuName={"JIMMY KOMBO"} menuData={"Hamburguesa clásica acompañada de crocantes papas fritas rústicas."}  menuPrice={"$899"} menuStock={2}/>
        </section>
    )
}

export default ItemListContainer