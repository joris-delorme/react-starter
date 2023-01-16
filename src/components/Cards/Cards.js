import React from 'react'

const Cards = ({title, children}) => {

  return (
    <div>
        <h1>{title}</h1>    
        <section>
            {children}
        </section>
    </div>
  )
}

export default Cards