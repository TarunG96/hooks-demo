import React from 'react';

const Counter = (props) => {
  const [count, setCount] = React.useState(5);
  const { name } = props

  const handleChange = (type) => {
    if(type === 'dec'){
      setCount(count - 1)
    }else{
      setCount(count + 1)
    }

  }

  return (
    <div>
      The count is: {count}
      <br/>
      <p>Hello {name}</p>
      <button onClick = {() => handleChange('inc')} >Increase</button>
      <button onClick = {() => handleChange('dec')} >Decrease</button>
    </div>
  );
}

export default Counter;
