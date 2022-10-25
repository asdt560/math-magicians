import React, { useEffect } from 'react';

const Title = () => {
  useEffect(() => {
    document.title = 'Calculator';
  });
  return (
    <section hidden><div>Lets do some Math</div></section>
  );
};

export default Title;
