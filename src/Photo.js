import React from 'react'

const Photo = ({urls:{regular}, alt_description}) => {
  return <article className='photo'>
<img src={regular} />
  </article>
}

export default Photo;
