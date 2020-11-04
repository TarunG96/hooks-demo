import React from 'react';

const Name = (props) => {  
  const { name:firstName, email, address: {street, city} } = props;
  return (
    <div>
      {`Hello ${firstName} ${email}, Your address is ${street} ${city}`}
    </div>
  );
}

export default Name;
