const Contact = () => {
    return (
        <section className="contact" style ={ {backgroundImage: "url('./img/contact.jpg')" } }>
            <div className="formContainer">
                <h2>CONTACTATE CON NOSOTROS</h2>
                <form>
                    <input type="text" name="nombre" placeholder="NOMBRE" required="" />
                    <input type="text" name="apellido" placeholder="APELLIDO" required="" />
                    <input type="number" name="telefono" placeholder="TELÉFONO" pattern="[0-9]+" required="" />
                    <input type="email" name="mail" placeholder="EMAIL" required="" />
                    <textarea type="text" name="mensaje" rows="6" placeholder="MENSAJE" required="" />
                    <input type="submit" value="ENVIAR" className="button" />
                </form>
            </div>
        </section>
    )
}

export default Contact