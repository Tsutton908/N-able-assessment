import React from 'react'

//Routes to title specific stylesheet
import '../styles/title.css';

// Simple component to show the title, presented as a h2 tag. this is just done to show reusability of the component.
function Title({title}) {
  return (
    <div className="title">
        <h2>{title}</h2>
    </div>
  )
}

export default Title