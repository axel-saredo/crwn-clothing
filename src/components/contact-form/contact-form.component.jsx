import React from 'react';

import './contact-form.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component';

const ContactForm = () => {
  return (
    <div className='group'>
      <input type='text' className='form-input' placeholder='Enter e-mail' />
      <textarea
        name=''
        id=''
        cols='150'
        rows='20'
        placeholder='Go ahead, we are listening...'
        className='textarea'
      ></textarea>
      <CustomButton type='submit'>Submit</CustomButton>
    </div>
  );
};

export default ContactForm;
