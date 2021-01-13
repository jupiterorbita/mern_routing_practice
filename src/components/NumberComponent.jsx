import React from 'react';

const Numbers = (props) => {

  const {num: id} = props


  const output = parseInt(id) + 5;
  // const output = id + 5; // id is a STRING

  console.log('\nprops ->', props)
  console.log('\nprops.num ->', props.num)

  return(
    <div>
      {/* <h4>NumbersComponent</h4> */}
      {
        isNaN(id) ? 
        <p>
          The word is : {id}
        </p>
        :
        <div>
          <p>The number is : {id}</p>
          <p> {id} + 5 = {output}</p>
        </div>
      }
    </div>
  )
}
export default Numbers;