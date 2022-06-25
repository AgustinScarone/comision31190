import { useState } from "react";
import { useForm  } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';


const Contact = () => {

    // const [contact, setcontact] = useState({
    //     name: "",
    //     surname: "",
    //     email: "",
    //     phone: "",
    //     message: ""
    // });

    // const navigate = useNavigate();

    // const { setNotification } = useNotification()

    // const { register, handleSubmit, formState: { errors } } = useForm();

    // const createContact = () => {

    //     const objContact = {
    //         contact
    //     }

    //     const batch = writeBatch(db)

    //     getDocs(query(collectionRef, where(documentId(), 'in', ids)))
    //         .then(response => {
    //             response.docs.forEach(doc => {
    //                 const dataDoc = doc.data()
    //             })
    //         }).then(({ id }) => {
    //             batch.commit()
    //             setNotification('success',`Gracias por contactarte. Te respondemos a la brevedad`)
    //             navigate('/')
    //         }).catch(error => {
    //             console.log(error)
    //         })
    // }

    return (
        // <section className="contact" style ={ {backgroundImage: "url('./img/contact.jpg')" } }>
        //     <div className="formContainer">
        //         <h2>CONTACTATE CON NOSOTROS</h2>
        //         <form onSubmit={handleSubmit(createContact)}>
        //             <input 
        //                 type="text" 
        //                 name="name" 
        //                 placeholder="NOMBRE" 
        //                 value={contact.name}
        //                 {...register("name", { required: "El campo NOMBRE es obligatorio" })}
        //                 onChange={(e) => setcontact({...contact, name: e.target.value})}
        //             />
        //             <ErrorMessage
        //                 errors={errors}
        //                 name="name"
        //                 render={({ message }) => <p>{message}</p>}
        //             />

        //             <input 
        //                 type="text" 
        //                 name="surname" 
        //                 placeholder="APELLIDO" 
        //                 value={contact.surname}
        //                 {...register('surname', { required: "El campo APELLIDO es obligatorio" })}
        //                 onChange={(e) => setcontact({...contact, surname: e.target.value})}
        //             />
        //             <ErrorMessage
        //                 errors={errors}
        //                 name="surname"
        //                 render={({ message }) => <p>{message}</p>}
        //             />

        //             <input 
        //                 type="number" 
        //                 name="phone" 
        //                 placeholder="TELÉFONO" 
        //                 pattern="[0-9]+" 
        //                 value={contact.phone}
        //                 {...register('phone', { required: "El campo TELÉFONO es obligatorio" })}
        //                 onChange={(e) => setcontact({...contact, phone: e.target.value})}
        //             />
        //             <ErrorMessage
        //                 errors={errors}
        //                 name="phone"
        //                 render={({ message }) => <p>{message}</p>}
        //             />

        //             <input 
        //                 type="email" 
        //                 name="email" 
        //                 placeholder="EMAIL" 
        //                 value={contact.email}
        //                 {...register('email', { required: "El campo EMAIL es obligatorio" })}
        //                 onChange={(e) => setcontact({...contact, email: e.target.value})}
        //             />
        //             <ErrorMessage
        //                 errors={errors}
        //                 name="email"
        //                 render={({ message }) => <p>{message}</p>}
        //             />

        //             <textarea 
        //                 type="text" 
        //                 name="message" 
        //                 rows="6" 
        //                 placeholder="COMENTARIOS" 
        //                 value={contact.message}
        //                 {...register('message')}
        //                 onChange={(e) => setcontact({...contact, message: e.target.value})}
        //             />

        //             <input type="submit" value="FINALIZAR COMPRA" className="button"/>
        //         </form>
        //     </div>
        // </section>
        <h1>asd</h1>
    )
}

export default Contact