import React from 'react'

import '../styles/title.css';

function Title({title}) {
  return (
    <div className="title">
        <h2>{title}</h2>
    </div>
  )
}

export default Title