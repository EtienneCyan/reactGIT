import { Fragment } from "react";

const Articulos = (props) =>{    
    return(
        <Fragment>
           <div>
            <p>
            <b>Nombre:</b> {props.nombre}
            <br/>  
            <b>Color: </b> {props.color}
            <br/>  
            <b>Marca:</b> {props.marca}
            <br/>   
            <b>Precio:</b> {props.precio}
            <br/> 
            </p>   
           </div>           
        </Fragment>
    );
}

export default Articulos