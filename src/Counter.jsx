import React, { useState, useEffect } from 'react';
import Name from './Name';
import Post from './Post';
import axios from 'axios'

const Counter = (props) => {

  // source = "https://www.youtube.com/watch?v=3Wb9l18KoxI"

  const [count, setCount] = useState(5);
  const [employee, setEmp] = useState({demo: 'aasdfdfdbc'});
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

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

  let emp1 = {...employee,...employees}

  // In this case it will work as componentDidUpdate - on mount as well as every update
  // useEffect(() => {
  //   console.log('Ho raha hai!')
  // })

  // In this case it will work as componentDidMount - on mounting but not on component update
  useEffect(() => {
    console.log('Will run only when component is loaded/mounted in the DOM')
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        // handle success
        setPosts(response.data.slice(0, 5))
      })

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        // handle success
        setUsers(response.data.slice(0, 5))
      })

  }, [])

  // In this case it will work as componentDidUpdate - on mounting and on update of the item mentioned in the array
  // useEffect(() => {
  //   console.log('Count is being changed')
  // }, [count])

  // In this case it will work as componentDidUpdate - on mounting and on update of the item mentioned in the array , the cleanup will run jst before the element updates
  // useEffect(() => {
  //   console.log('Count is being mounted into the DOPM')
  //   return () => {
  //     console.log('Compoent is removed from the DOM')
  //   }
  // }, [count])

  return (
    <div>
      The count is: {count}
      <br/>
      {posts.map((post, i) =>
        <Post {...post} key = {i} />
      )}

      {users.map((user, i) =>
        <Name {...user} key = {i} />
      )}
      <button onClick = {() => handleChange('inc')} >Increase</button>
      <button onClick = {() => handleChange('dec')} >Decrease</button>
    </div>
  );
}

export default Counter;
