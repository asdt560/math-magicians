import React, { useEffect } from 'react';

const Title = () => {
  useEffect(() => {
    document.title = 'Calculator';
  });
  return (
    <section><h2>Lets do some Math!</h2></section>
  );
};

export default Title;
