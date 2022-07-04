import { getBusinessInfo } from "../../services/firebase/firestore";
import { useFirestore } from '../../hooks/useFirestore'


const Locations = () => {

    const { businessInfo } = useFirestore(() => getBusinessInfo())

    return (
        <section className="locations" style ={ {backgroundImage: "url('./img/locations.jpg')" } }>
            <div className="locationsContainer">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
                    <h2>UBICACIÓN</h2>
                    {businessInfo.map(prod => {
                        return(
                            <article key={prod.id}>
                                <span key={prod.id}>{prod.label}</span>
                                <br/>
                                {prod.address}
                                <br/>
                                {prod.city}
                                <br/>
                                <button className="button"><a href={prod.maps} target="_BLANK">VER MAPA</a></button>
                            </article>
                        )})
                    }
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/></svg>
                    <h2>HORARIOS</h2>
                    {businessInfo.map(prod => {
                        return(
                            <article key={prod.id}>
                                <span>{prod.label}</span><br/>
                                <strong>{prod.shift.label1}</strong>
                                <br/>
                                <p dangerouslySetInnerHTML={{__html:prod.shift.shift1}}></p>
                                <strong>{prod.shift.label2}</strong>
                                <br/>
                                <p dangerouslySetInnerHTML={{__html:prod.shift.shift2}}></p>
                            </article>
                        )})
                    }
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
                    <h2>CONTACTO</h2>
                    {businessInfo.map(prod => {
                        return(
                            <article key={prod.id}>
                                <span>{prod.label}</span><br/>
                                <a href={`tel:${prod.phone.phone1}`}>{prod.phone.label1}</a>
                            </article>
                        )})
                    }
                </div>
            </div>
        </section>
    )
}

export default Locations