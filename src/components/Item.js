import * as React from 'react';
import { Link } from "react-router-dom"

const Item = ({productos}) => {

  return (
        <article className="card px-3 mx-1">
            <img src={productos.img} alt="producto" />
            <p>{productos.nombre}</p>
            <p>$ {productos.precio}</p>
            <Link to={`/detail/${productos.id}`} className="button">Ver detalle</Link>
        </article>
  )}

export default Item;