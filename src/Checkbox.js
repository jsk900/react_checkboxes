import React, { useContext } from 'react';
import { Context } from './Context';

const Checkbox = (props) => {
  const data = useContext(Context);

  //On submit event. Here you will create the code to post to your backend
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('submitted to the backend');
  };

  //Click event listener for checkboxes
  //This code puts all the names and the true or false flags into state.
  const checkboxClick = (e) => {
    data.setFormData({ ...data.formData, [e.target.name]: e.target.checked });
  };

  //Create the JSX for the form and the checkboxes.
  //The trick is to use the name attribute as the link to the formData object
  //and the defaultChecked attribute.

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk4'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={data.chk4}
          />
          <label className='label'>checkbox 4</label>
          <label className='label2'>{`In state = ${data.formData.chk4}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk5'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={data.chk5}
          />
          <label className='label'>checkbox 5</label>
          <label className='label2'>{`In state = ${data.formData.chk5}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk6'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={data.chk6}
          />
          <label className='label'>checkbox 6</label>
          <label className='label2'>{`In state = ${data.formData.chk6}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk7'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={data.chk7}
          />
          <label className='label'>checkbox 7</label>
          <label className='label2'>{`In state = ${data.formData.chk7}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk8'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={data.chk8}
          />
          <label className='label'>checkbox 8</label>
          <label className='label2'>{`In state = ${data.formData.chk8}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk9'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={data.chk9}
          />
          <label className='label'>checkbox 9</label>
          <label className='label2'>{`In state = ${data.formData.chk9}`}</label>
        </div>

        <div className='checkbox-container'>
          <input
            className='checkbox'
            type='checkbox'
            name='chk10'
            onClick={(e) => checkboxClick(e)}
            defaultChecked={data.chk10}
          />
          <label className='label'>checkbox 10</label>
          <label className='label2 adjust'>{`In state = ${data.formData.chk10}`}</label>
        </div>

        <button>Submit</button>
      </form>
    </section>
  );
};

export default Checkbox;
