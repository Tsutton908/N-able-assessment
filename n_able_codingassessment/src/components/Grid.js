import React, { Fragment, useState } from 'react';

import '../styles/grid.css';

function Grid({content}) {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <Fragment>{content}</Fragment>
  )
}

export default Grid