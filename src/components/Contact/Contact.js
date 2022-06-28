import { useState } from "react";
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import { useForm  } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import swal from 'sweetalert'

import Loading from "../Assets/Loading";


const Contact = () => {
    
    const [loading, setLoading] = useState(false);
    const [contact, setContact] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        message: ""
    });

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const createContact = () => {

        setLoading(true)
        
        addDoc(collection(db, "contact"), {
            contact
        }).then(() => {
            swal(
                "¡GRACIAS POR CONTACTARTE!", 
                `Te respondemos en breve`, 
                "success");
            navigate('/')
        }).catch(error => {
            console.log(error)
            swal(
                "¡Ups!", 
                `Algo falló`, 
                "error");
        }).finally(() => {
            setLoading(false)
        })
    }

    if(loading) {
        return <Loading />
    }

    return(
        <section className="contact" style ={ {backgroundImage: "url('./img/checkout.jpg')" } }>
            <div className="formContainer">
                <h2>CONTANOS CÓMO PODEMOS AYUDARTE</h2>
                <form onSubmit={handleSubmit(createContact)}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="NOMBRE" 
                        value={contact.name}
                        {...register("name", { required: "El campo NOMBRE es obligatorio" })}
                        onChange={(e) => setContact({...contact, name: e.target.value})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ message }) => <p>{message}</p>}
                    />

                    <input 
                        type="text" 
                        name="surname" 
                        placeholder="APELLIDO" 
                        value={contact.surname}
                        {...register('surname', { required: "El campo APELLIDO es obligatorio" })}
                        onChange={(e) => setContact({...contact, surname: e.target.value})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="surname"
                        render={({ message }) => <p>{message}</p>}
                    />

                    <input 
                        type="number" 
                        name="phone" 
                        placeholder="TELÉFONO" 
                        pattern="[0-9]+" 
                        value={contact.phone}
                        {...register('phone', { required: "El campo TELÉFONO es obligatorio" })}
                        onChange={(e) => setContact({...contact, phone: e.target.value})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="phone"
                        render={({ message }) => <p>{message}</p>}
                    />

                    <input 
                        type="email" 
                        name="email" 
                        placeholder="EMAIL" 
                        value={contact.email}
                        {...register('email', { required: "El campo EMAIL es obligatorio" })}
                        onChange={(e) => setContact({...contact, email: e.target.value})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => <p>{message}</p>}
                    />

                    <textarea 
                        type="text" 
                        name="message" 
                        rows="6" 
                        placeholder="COMENTARIOS" 
                        value={contact.message}
                        {...register('message')}
                        onChange={(e) => setContact({...contact, message: e.target.value})}
                    />
                    { !contact
                        ? ""
                        : <input type="submit" value="ENVIAR" className="button" onClick={()=> {}}/>
                    }
                </form>
            </div>
        </section>
    )
}

export default Contact