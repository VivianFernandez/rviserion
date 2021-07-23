import React from 'react'
import "../../../css/estilos.css";
import { Link } from 'react-router-dom'
// imagenes categorias
import cataudi from '../../../img/cat_audi.png'
import catilu from '../../../img/cat_ilu.png'
import catmon from '../../../img/cat_mon.png'
import catmou from '../../../img/cat_mou.png'
import catmp from '../../../img/cat_mp.png'
import catsill from '../../../img/cat__sill.png'
import cattec from '../../../img/cat_tec.png'
import HeaderCliente from "../componentes/HeaderCliente";
import FooterCliente from "../componentes/FooterCliente";
function CategoriasCliente() {
    return (
        <>
         <HeaderCliente/>
         <div class="categorias">
            <h2>Nuestras Categorías</h2>
            <hr/>
            <div class="container__categorias bd-grid mt-5">
                <div class="categorias__img mb-4">
                    <Link to={{pathname:"/cliente/audifono"}}class="categorias__link-name"><img class="categorias__img-img" src={cataudi}/></Link>    
                </div>
                <div class="categorias__img mb-4">
                    <Link to={{pathname:"/cliente/iluminacion"}} class="categorias__link-name"><img class="categorias__img-img" src={catilu}/></Link>
                </div>
                <div class="categorias__img mb-4">
                    <Link to={{pathname:"/cliente/monitor"}} class="categorias__link-name"><img class="categorias__img-img" src={catmon}/></Link>
                </div>
                <div class="categorias__img mb-4">
                    <Link to={{pathname:"/cliente/mouse"}} class="categorias__link-name"><img class="categorias__img-img" src={catmou}/></Link>
                </div>
                <div class="categorias__img mb-4">
                    <Link to={{pathname:"/cliente/mousepad"}} class="categorias__link-name"><img class="categorias__img-img" src={catmp}/></Link>   
                </div>
                <div class="categorias__img mb-4">
                    <Link to={{pathname:"/cliente/silla"}} class="categorias__link-name"><img class="categorias__img-img" src={catsill}/></Link>    
                </div>
                <div class="categorias__img mb-4">
                    <Link to={{pathname:"/cliente/teclado"}} class="categorias__link-name"><img class="categorias__img-img" src={cattec}/></Link>
                </div>     
            </div>
        </div>   
        <FooterCliente/>
        </>
    )
}

export default CategoriasCliente
