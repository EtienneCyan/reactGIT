import { Fragment } from "react";

const Bienvenido =(props)=>{
    return(
        <Fragment>
            <h1>Hola {props.nombre} :) !!!</h1>
        </Fragment>
    );
}

export default Bienvenido;