import React from "react";
import '../assets/css/buscador.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Buscador = () => {
    return(
        <div className="buscador container">
        <form action="">
            <div  className="input-group mx-0" >
                <input type="text" className="form-control" placeholder="Buscar Productos"/>
                <div className="input-group-append">
                    <span className="input-group-text bg-transparent text-primary">
                    <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>
            </div>
        </form>
    </div>
    );
}
export default Buscador;