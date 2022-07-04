import { LinkCall, LinkWhatsApp } from "../Assets/Variables";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../services/firebase';

export const sendCheckoutMail = (id, objOrder) => {

    addDoc(collection(db, "mail"), {
        to: 'agustin@momoagencia.com',
        message: {
            subject: 'Nueva venta de 31190!',
            text: 
            `
            hola
            `,
            html: 
            `<div>
                <h1>NRO DE ORDEN: ${id}<h1>
                <pre>${objOrder}</pre>
            </div>
            }
            `,
        }
    }).then(() => console.log('Queued email for delivery!'));
}

export const sendClientMail = (id, objOrder) => {

    addDoc(collection(db, "mail"), {
        to: objOrder.buyer.email,
        message: {
            subject: 'Gracias por tu compra!',
            from: 'MOMO',
            text: 
            `
            hola
            `,
            html: 
            `<div style="text-align: center">
                <a href="https://tienda31190.web.app/">
                    <img width=600 height=150 src="https://tienda31190.web.app/img/mail-header.jpg">
                </a>
                <div style="padding: 40px; font-size:18px">
                    <h1 style="font-size:26px">¡GRACIAS POR TU COMPRA!</h1>
                    <p>Tu número de orden es <strong>${id}</strong></p>
                    <br/>
                    <p>
                        Por cualquier consulta comunicate con nosotros a través de 
                        <br/>
                        <a href="https://api.whatsapp.com/send?phone=541166630456" target="_BLANK">WHATSAPP</a>
                        o también nos podés <a href="tel:+5491166630456">LLAMAR</a>
                    </p>
                </div>
                <img width=600 height=50 src="https://tienda31190.web.app/img/mail-footer.jpg">
            </div>
            `,
        }
    }).then(() => console.log('Queued email for delivery!'));
}

export const sendContactMail = (contact) => {

    addDoc(collection(db, "mail"), {
        to: 'agustin@momoagencia.com',
        message: {
            subject: 'Contacto recibido desde tienda 31190',
            text: 
            `<h1>Contacto recibido de:</h1>
            Nombre: ${contact.name}
            Apellido: ${contact.surname}
            Mail: ${contact.email}
            Teléfono: ${contact.phone}
            Mensaje: ${contact.message}`,
            html: 
            `
            <p >
            <h1 style="font-size: 26px; font-weight: bold">Contacto recibido de:</h1>
            - <span style="font-size: 18px;"><strong>Nombre:</strong> ${contact.name}</span><br/>
            - <span style="font-size: 18px;"><strong>Apellido:</strong> ${contact.surname}</span><br/>
            - <span style="font-size: 18px;"><strong>Mail:</strong> ${contact.email}</span><br/>
            - <span style="font-size: 18px;"><strong>Teléfono:</strong> ${contact.phone}</span><br/>
            - <span style="font-size: 18px;"><strong>Mensaje:</strong> ${contact.message}</span>
            </p>`,
        }
    }).then(() => console.log('Queued email for delivery!'));
}