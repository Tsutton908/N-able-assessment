import React, { useState } from 'react';


import Title from './Title';
import Grid from './Grid';

function Table({ title, content}) {
  return (
    <div>
        <Title title={title} />
        <Grid content={content}/>
    </div>
  )
}

export default Table