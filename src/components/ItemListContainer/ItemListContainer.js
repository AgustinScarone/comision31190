import ItemList from "../ItemList/ItemList";
import Loading from "../Assets/Loading";
import NotA404 from "../Assets/NotA404"

import { NavLink, useParams } from 'react-router-dom';
import { getCategories, getProducts } from "../../services/firebase/firestore";
import { useFirestore } from '../../hooks/useFirestore'
import { useNavigate } from 'react-router-dom';


const ItemListContainer = () => {

    const navigate = useNavigate();

    const { categoryId } = useParams()
    const { isLoading, data, error } = useFirestore(() => getProducts(categoryId), [categoryId])
    const { categories } = useFirestore(() => getCategories(categoryId))

    if(isLoading) {
        return <Loading />
    }

    if(error) {
        return <NotA404 />
    }

    return (
        <section className="itemListContainer">
            <div className="linkCategorias">
                <NavLink to='/menu/' className={({isActive}) => isActive ? "activeLinks" : "links"} onClick={(setCategories) => setCategories(categories)}>VER TODO</NavLink>
                { categories.map(cat => 
                    <NavLink key={cat.id} to={`/menu/${cat.id}`} className={({isActive}) => isActive ? "activeLinks" : "links"}>{cat.label}</NavLink>    
                )}
            </div>
            {
                data.length > 0
                ? <ItemList products={data} />
                : navigate('/menu/')
            }
        </section>
    )
}

export default ItemListContainer