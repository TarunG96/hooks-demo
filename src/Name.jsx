import React from 'react';

const Name = (props) => {
  const { name:firstName, lname:lastName, address: {street, city, localities: {name}} } = props;
  return (
    <div>
      {`Hello ${firstName} ${lastName}, Your address is ${street} ${city} ${name}`}
    </div>
  );
}

export default Name;
