import React, { Fragment } from 'react';

//Routes to content specific css stylesheet
import '../styles/grid.css';

// Simple component to show content. this is just done to show reusability of the component.
function Grid({content}) {

  return (
    <Fragment>{content}</Fragment>
  )
}

export default Grid