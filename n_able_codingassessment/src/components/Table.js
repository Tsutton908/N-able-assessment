import React, { useState } from 'react';


import Title from './Title';
import Grid from './Grid';

// Simple component so that I can easily input both seperate title content and main content.
// This is a little unnecessary and redundant, however I found it more easily to control for this funcitonaility.
function Table({ title, content}) {
  return (
    <div>
        <Title title={title} />
        <Grid content={content}/>
    </div>
  )
}

export default Table