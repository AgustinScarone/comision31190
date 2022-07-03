import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../services/firebase';

export const sendCheckoutMail = (order, item) => {

    addDoc(collection(db, "mail"), {
        to: 'agustin@momoagencia.com',
        message: {
            subject: 'Nueva venta de 31190!',
            text: 
            `
            hola
            `,
            html: 
            `
            { !!order && order.id &&
                <div className="thankYouInfo">
                    <h1>¡GRACIAS POR TU COMPRA ${order.buyer.name}!</h1>
                    <article>
                        TU NÚMERO DE ORDEN ES ${order.id}                
                        <br/><br/>
                        EL TOTAL DE TU COMPRA FUE POR <span className="moneyFont">$${order.total}</span>
                    </article>
                    {order.items.map(item => 
                        <div key={item.id} className="thankYouDetail">
                            <div>
                                <span className="titulo">${item.menuName}</span>
                            </div>
                            <div>
                                Precio: <span className='moneyFont'>$${item.menuPrice}</span>
                            </div>
                            <div>
                                Cantidad: ${item.quantity}
                            </div>
                            <div>
                                <span className="subtotal ">
                                    Subtotal: <span className='moneyFont'>$${item.menuPrice * item.quantity}</span>
                                </span>
                            </div>
                        </div>
                    )}
                </div>
                }
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