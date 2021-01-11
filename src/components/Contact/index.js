import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className="p-5">
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange} placeholder="John Smith"></input>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" defaultValue={email} onBlur={handleChange}></input>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" rows="5" defaultValue={message} onBlur={handleChange}>
              </textarea>
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button data-testid="button" className="btn btn-primary mb-3" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
