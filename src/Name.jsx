import React from 'react';

const Name = (props) => {
  const { name:firstName, lname:lastName } = props

  return (
    <div>
      Hello {firstName} {lastName}
    </div>
  );
}

export default Name;
