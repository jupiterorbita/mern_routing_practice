import React from 'react';

const Colors = ({word, color1, color2}) => {

// {{backgroundColor: box.color

const styleObj ={
  color: color1, 
  backgroundColor: color2
}

  return(
    <div>
      <h4>ColorsComponent</h4>
      <h3 style={styleObj}>
        The word is : {word}
      </h3>
    </div>
  )
}
export default Colors;