import React from 'react'
import "../../../css/estilos.css";
// imagen
import audi1 from '../../../img/audi1.jpg'
import HeaderCliente from "../componentes/HeaderCliente";
import FooterCliente from "../componentes/FooterCliente";
function DetalleProductoCliente() {
    return (
       <>
       <HeaderCliente />
            <div class="detalle__container">
                    <div class="detalle__pro-img">
                        <img src={audi1} class="detallepro"/>
                    </div>
                    <div class="detalle__pro">
                        <h5 class="card-title ">Audífonos Wireless G733</h5>
                        <p class="card-text">LogitechG</p>
                        <h3>S/. 682</h3>
                        <div class="detalle__btn">
                            <div>
                                <input type="number" class="form-control" sytle={{width:80 + 'px'}} id="cantidad"/>
                            </div>
                            <div >
                                <a href="./carrito.html"> <button class="btn btn-warning" ssytle={{width:200 + 'px'}} type="button"><i
                                        class="fas fa-shopping-cart"></i>
                                    Añadir</button></a>
                            </div>   
                        </div>
                    </div>
                </div>
            <div class=" container mt-lg-4 ">
                <div>
                    <h2 class="det__sub">Descripción</h2>
                    <hr sytle={{width:100 + 'px',marginRight:150 + 'px'}} />
                    <p class="det__des"sytle={{textAlign: "justify"}}>Por fin, unos audífonos que pueden ser tan expresivos como tú. Los audífonos
                            G733 son inalámbricos y se diseñaron pensando en el confort. Y están equipados con todo el sonido
                            envolvente, los filtros de voz y la iluminación avanzada que necesitas para lucir, sonar y jugar con más
                            estilo que nunca.
                            La tecnología inalámbrica LIGHTSPEED te proporciona más de 29 horas de duración de batería y hasta 20
                            metros de libertad inalámbrica confiable.
                            Alrededor de 16,8 millones de colores, dos zonas para personalizar la iluminación y hacerla
                            completamente tuya.
                            Sumérgete en el juego más que nunca con el sonido envolvente de próxima generación DTS Headphone:X 2.1
                    </p>
                </div>
                <div class="det__des mt-4">
                    <h2 class="det__sub">Características</h2>
                    <hr sytle={{width:100 + 'px',marginRight:20 + 'px'}} />
                    <p>Largo (cm) 13.7</p>
                    <p> Peso (kg) 0.280</p>
                    <p>Ancho (cm) 9.4</p>
                    <p> Micrófono integrado Sí</p>
                    <p> Impedancia (Ohmios) 39</p>
                    <p> Alto (cm) 19.5</p>
                    <p>Color Blanco</p>
                    <p>Modelo G733</p>
                       <p>Sensibilidad (Db) 87.5</p>
                </div>
            </div>
            <FooterCliente />
       </>
    );
}

export default DetalleProductoCliente;
