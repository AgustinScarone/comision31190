import React from "react";
import { useForm  } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const CheckoutForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="text" 
                name="name" 
                placeholder="NOMBRE" 
                {...register("name", { required: "El campo NOMBRE es obligatorio" })}
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
                {...register('surname', { required: "El campo APELLIDO es obligatorio" })}
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
                {...register('phone', { required: "El campo TELÉFONO es obligatorio" })}
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
                {...register('email', { required: "El campo EMAIL es obligatorio" })}
            />
            <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <p>{message}</p>}
            />

            <input 
                type="text" 
                name="adress" 
                placeholder="DIRECCIÓN" 
                {...register('adress', { required: "El campo DIRECCIÓN es obligatorio" })}
            />
            <ErrorMessage
                errors={errors}
                name="adress"
                render={({ message }) => <p>{message}</p>}
            />

            <select 
                name="paymentMethod" {...register('paymentMethod')}>
                <option value="">ELEGÍ MEDIO DE PAGO</option>
                <option value="efectivo">EFECTIVO</option>
                <option value="mercadoPago">MERCADO PAGO</option>
            </select>

            <textarea 
                type="text" 
                name="message" 
                rows="6" 
                placeholder="COMENTARIOS" 
                {...register('message')}
            />

            <input type="submit" value="FINALIZAR COMPRA" className="button" />
        </form>
    )
}

export default CheckoutForm