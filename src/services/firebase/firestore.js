import { db } from ".";
import { getDocs, collection, query, where} from 'firebase/firestore'

export const getCategories = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId 
            ? query(collection(db, 'categories'), where('category', '==', categoryId)) 
            : collection(db, 'categories')

            getDocs(collectionRef).then(response => {
                const categories = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                resolve(categories)
            }).catch(error => {
                reject(error)
            })
    })
}

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId 
            ? query(collection(db, 'menu'), where('category', '==', categoryId)) 
            : collection(db, 'menu')

            getDocs(collectionRef).then(response => {
                const products = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                resolve(products)
            }).catch(error => {
                reject(error)
            })
    })
}

export const getBusinessInfo = (businessInfoId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = businessInfoId 
            ? query(collection(db, 'businessInfo'), where('id', '==', businessInfoId)) 
            : collection(db, 'businessInfo')

            getDocs(collectionRef).then(response => {
                const products = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                resolve(products)
            }).catch(error => {
                reject(error)
            })
    })
}

export const getSocial = (socialId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = socialId 
            ? query(collection(db, 'social'), where('id', '==', socialId)) 
            : collection(db, 'social')

            getDocs(collectionRef).then(response => {
                const products = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                resolve(products)
            }).catch(error => {
                reject(error)
            })
    })
}



