import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../services/firebase';

export const sendCheckoutMail = (id, objOrder) => {

    addDoc(collection(db, "mail"), {
        to: 'agustin@momoagencia.com',
        message: {
            subject: `Nueva venta de 31190 con nro de orden ${id}`,
            text: 
            `
            hola
            `,
            html: 
            `<div style="font-size: 16px">
                <div>
                    <strong>NRO DE ORDEN: ${id}</strong><br/><br/>
                <div>
                <div>
                    NOMBRE: ${objOrder.buyer.name}<br/>
                    APELLIDO: ${objOrder.buyer.surname}<br/>
                    EMAIL: ${objOrder.buyer.email}<br/>
                    TELÉFONO: ${objOrder.buyer.phone}<br/>
                    DIRECCIÓN: ${objOrder.buyer.address}<br/>
                    CIUDAD: ${objOrder.buyer.city}<br/>  
                    MÉTODO DE PAGO: ${objOrder.buyer.paymentMethod}<br/>  
                    MENSAJE: ${objOrder.buyer.message}<br/><br/>  
                </div>
                <div style="font-size: 22px"
                    <strong>TOTAL: $${objOrder.total}</strong><br/><br/> 
                </div>
                <div>
                ${objOrder.items.map(item => 
                    `<div key=${item.id}>
                        <div>
                            <strong>${item.menuName}</strong>
                        </div>
                        <div>
                            <strong>Precio:</strong> $${item.menuPrice}
                        </div>
                        <div>
                            <strong>Cantidad:</strong> ${item.quantity}
                        </div>
                        <div>
                            <strong>Subtotal:</strong> $${item.menuPrice * item.quantity}
                        </div>
                    </div>`
                )}
                </div>
            </div>
            `,
        }
    })
}

export const sendClientMail = (id, objOrder) => {

    addDoc(collection(db, "mail"), {
        to: objOrder.buyer.email,
        message: {
            subject: `Gracias por tu compra ${objOrder.buyer.name}!`,
            from: 'MOMO',
            text: 
            `
            hola
            `,
            html: 
            `<div style="text-align: center">
                <a href="https://tienda31190.web.app/">
                    <img src="https://tienda31190.web.app/img/mail-header.jpg">
                </a>
                <div style="padding: 40px; font-size:14px">
                    <h1 style="font-size:26px">¡GRACIAS POR TU COMPRA!</h1>
                    <div>${objOrder.buyer.name}, tu número de orden es <strong>${id}</strong></div>
                    <br/><br/>
                    <div>
                        <strong>TOTAL: $${objOrder.total}</strong><br/><br/> 
                    </div>
                    <div>
                    ${objOrder.items.map(item => 
                        `<div key=${item.id}>
                            <div>
                                <strong>${item.menuName}</strong>
                            </div>
                            <div>
                                <strong>Precio:</strong> $${item.menuPrice}
                            </div>
                            <div>
                                <strong>Cantidad:</strong> ${item.quantity}
                            </div>
                            <div>
                                <strong>Subtotal:</strong> $${item.menuPrice * item.quantity}
                            </div>
                        </div>`
                    )}
                    </div><br/><br/>
                    <div>
                        Por cualquier consulta comunicate con nosotros a través de 
                        <br/>
                        <a href="https://api.whatsapp.com/send?phone=541166630456" target="_BLANK">WHATSAPP</a>
                        o también nos podés <a href="tel:+5491166630456">LLAMAR</a>
                    </div>
                </div>
                <img src="https://tienda31190.web.app/img/mail-footer.jpg">
            </div>
            `,
        }
    })
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
    })
}