import React from 'react'

const Page = (props) => {
  return (
    <>
    <div className="page">
        <header>
             <h2>{props.titulo}</h2>
             <h3>{props.subtitulos}</h3>
        </header>
        <div className="contenido">
            {props.children}
        </div>
     </div>
    </>
  ) 
}

export default Page

