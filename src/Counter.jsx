import React from 'react';
import Name from './Name';

const Counter = (props) => {
  const [count, setCount] = React.useState(5);

  const handleChange = (type) => {
    if(type === 'dec'){
      setCount(count - 1)
    }else{
      setCount(count + 1)
    }
  }

  const employees = [
    {
      name: 'Tarun',
      lname: 'Garg',
      address: {
        street: '2540',
        city: 'Ballabgarh',
        localities: {
          name: 'sec-2'
        }
      }
    },
    {
      name: 'Lalit',
      lname: 'Kumar',
      address: {
        street: '2343',
        city: 'Faridabad',
        localities: {
          name: 'NIT 5'
        }
      }
    }
  ]

  return (
    <div>
      The count is: {count}
      <br/>
      {employees.map((emp, i) =>
        <Name {...emp} key = {i} />
      )}
      <button onClick = {() => handleChange('inc')} >Increase</button>
      <button onClick = {() => handleChange('dec')} >Decrease</button>
    </div>
  );
}

export default Counter;
