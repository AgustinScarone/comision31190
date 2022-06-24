import { useState, useEffect} from 'react'

export const useFirestore = (asyncFn, dependencies = []) => {
    const [categories, setCategories] = useState([])
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        asyncFn().then(response => {
            setCategories(response)
        })
    }, dependencies)

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

    return {
        categories,
        data,
        isLoading,
        error
    }
}