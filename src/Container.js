import React, { Fragment, useState } from 'react';
import { Context } from './Context';

//We pass in props to the Container so we can access the children
const Container = (props) => {
  //Create state and setState functions with useState as needed
  const [formData, setFormData] = useState({
    chk1: false,
    chk2: false,
    chk3: false,
    chk4: false,
    chk5: false,
    chk6: false,
    chk7: false,
    chk8: false,
    chk9: false,
    chk10: false,
  });

  return (
    //Pass the states and setState functions through the context.provider. Wrap around the children.
    <Context.Provider value={{ formData, setFormData }}>
      <Fragment>{props.children}</Fragment>
    </Context.Provider>
  );
};

export default Container;
