import { db } from ".";
import { getDocs, collection, query, where, getDoc, doc} from 'firebase/firestore'

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

export const getProduct = (productId) => {
    return new Promise((resolve, reject) => {
            getDoc(doc(db, 'menu', productId)).then(response => {
                const product = { id: response.id, ...response.data()}
                resolve(product)
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
                const businessInfo = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                resolve(businessInfo)
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
                const social = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                resolve(social)
            }).catch(error => {
                reject(error)
            })
    })
}

export const getBanners = (bannerId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = bannerId 
            ? query(collection(db, 'banners'), where('id', '==', bannerId)) 
            : collection(db, 'banners')

            getDocs(collectionRef).then(response => {
                const banners = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                resolve(banners)
            }).catch(error => {
                reject(error)
            })
    })
}


export const getOrder = (orderId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = orderId 
            ? query(collection(db, 'orders'), where('id', '==', orderId)) 
            : collection(db, 'orders')

            getDocs(collectionRef).then(response => {
                const orders = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                resolve(orders)
            }).catch(error => {
                reject(error)
            })
    })
} 



