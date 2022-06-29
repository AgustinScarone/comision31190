import { useState, useEffect} from 'react'
 
export const useFirestore = (asyncFn, dependencies = []) => {
    const [categories, setCategories] = useState([])
    const [data, setData] = useState()
    const [social, setSocial] = useState([])
    const [order, setOrder] = useState([])
    const [banners, setBanners] = useState([])
    const [businessInfo, setBusinessInfo] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(true)


    // CATEGORIES - ITEM LIST CONTAINER
    
    useEffect(() => {

        asyncFn().then(response => {
            setCategories(response)
        })
    }, dependencies)

    // BUSINESS INFO - LOCATIONS
    useEffect(() => {

        asyncFn().then(response => {
            setBusinessInfo(response)
        })
    }, dependencies)

    // SOCIAL - FOOTER
    useEffect(() => {

        asyncFn().then(response => {
            setSocial(response)
        })
    }, dependencies)

    // BANNERS - SWIPER HOME
    useEffect(() => {

        asyncFn().then(response => {
            setBanners(response)
        })
    }, dependencies)

    // PRODUCTS
    useEffect(() => {
        setIsLoading(true)

        asyncFn().then(response => {
            setData(response)
        }).catch(error => {
            setError(error)
        }).finally(() => {
            setIsLoading(false)
        })

    }, dependencies)

    // ORDERS - THANK YOU
    useEffect(() => {

        asyncFn().then(response => {
            setOrder(response)
        })
    }, dependencies)
    
    return {
        order,
        banners,
        social,
        businessInfo,
        categories,
        data,
        isLoading,
        error
    }
}