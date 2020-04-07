import React, { useState } from 'react';
import './App.css';

const App = () => {
  //Setup the form state
  //If you need anything else on the form such as text input fields add them here and don't
  //forget to add them to the de-construction below
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

  //De-structure the form
  const {
    chk1,
    chk2,
    chk3,
    chk4,
    chk5,
    chk6,
    chk7,
    chk8,
    chk9,
    chk10,
  } = formData;

  //On submit event. Here you will create the code to post to your backend
  const onSubmit = async (e) => {
    e.preventDefault();
  };

  //Click event listener for checkboxes
  //This code puts all the names and the true or false flags into state.
  const checkboxClick = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  //Create the JSX for the form and the checkboxes.
  //The trick is to use the name attribute as the link to the formData object
  //and the defaultChecked attribute.
  return (
    <section className='section-container'>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk1'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={chk1}
          />
          <label className='label'>checkbox 1</label>
          <label className='label2'>{`In state = ${formData.chk1}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk2'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={chk2}
          />
          <label className='label'>checkbox 2</label>
          <label className='label2'>{`In state = ${formData.chk2}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk3'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={chk3}
          />
          <label className='label'>checkbox 3</label>
          <label className='label2'>{`In state = ${formData.chk3}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk4'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={chk4}
          />
          <label className='label'>checkbox 4</label>
          <label className='label2'>{`In state = ${formData.chk4}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk5'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={chk5}
          />
          <label className='label'>checkbox 5</label>
          <label className='label2'>{`In state = ${formData.chk5}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk6'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={chk6}
          />
          <label className='label'>checkbox 6</label>
          <label className='label2'>{`In state = ${formData.chk6}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk7'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={chk7}
          />
          <label className='label'>checkbox 7</label>
          <label className='label2'>{`In state = ${formData.chk7}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk8'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={chk8}
          />
          <label className='label'>checkbox 8</label>
          <label className='label2'>{`In state = ${formData.chk8}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk9'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={chk9}
          />
          <label className='label'>checkbox 9</label>
          <label className='label2'>{`In state = ${formData.chk9}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk10'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={chk10}
          />
          <label className='label'>checkbox 10</label>
          <label className='label2 adjust'>{`In state = ${formData.chk10}`}</label>
        </div>

        <button>Submit</button>
      </form>
    </section>
  );
};

export default App;
