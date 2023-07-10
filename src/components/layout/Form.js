import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import sprite from "../img/sprites.svg";

const phone = {
  title: 'Phone',
  phone: 'Inquiry : (+88) 487 - 365 - 254',
  description: 'Hotline : 5879 - 6985'
};
const mail = {
  title: 'Email',
  mail: 'faime@example.com',
  description: 'career@example.fm'
};
const location = {
  title: 'Location',
  location: '1800 Abbot Kinney Blvd.',
  description: 'Unit D & E Venice, CA 90291'
};

function SendForm() {
  const [showText, setShowText] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const {
    register,
    formState: { errors },
  } = useForm();

    // get name value from form
  function nameChangeHandler(event) {
    setName(event.target.value);
  }
  // get email value from form
  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }
  // get subject value from form
  function subjectChangeHandler(event) {
    setSubject(event.target.value);
  }
  // get text value from form
  function textChangeHandler(event) {
    setText(event.target.value);
  }
  // gather our data: name, email, subject and text
  let allData = {
    name: name,
    email: email,
    subject: subject,
    text: text,
  };
  // clear inputs after submit (convert event.target to array + use from method to convert event.target to array + use forEach to go through every input to clear it)
  function clearFields(event) {
    Array.from(event.target).forEach((e) => (e.value = ""));
  }
  const submitFormHandler = event => {
    alert('Form submitted');
    event.preventDefault(); // prevent page refresh
    console.log(allData);
    clearFields(event);
     // clear all input values in the form
     setName('');
     setEmail('');
     setSubject('');
     setText('');
   };

  return (
    <div className='form_container'>
      <div className='contacts_description'>
        <div className='item_description'>
          <span>
            <svg><use href={sprite + "#icon-phone"} /></svg>
          </span>
          <div className='item_about'>
            <h2 className={`hidden ${showText ? 'appear' : ''}`}>{phone.title}</h2>
            <p>{phone.phone}</p>
            <p>{phone.description}</p>
          </div>
        </div>
        <div className='item_description'>
          <svg><use href={sprite + "#icon-email"} /></svg>
          <div className='item_about'>
            <h2 className={`hidden ${showText ? 'appear' : ''}`}>{mail.title}</h2>
            <p>{mail.mail}</p>
            <p>{mail.description}</p>
          </div>
        </div>
        <div className='item_description'>
          <span>
            <svg><use href={sprite + "#icon-location"} /></svg>
          </span>
          <div className='item_about'>
            <h2 className={`hidden ${showText ? 'appear' : ''}`}>{location.title}</h2>
            <p>{location.location}</p>
            <p>{location.description}</p>
          </div>
        </div>
      </div>
      <form 
        className='form_contacts'
        onSubmit={submitFormHandler}
      >
        <input 
          {...register('Name', { required: true })} 
          type='text'
          placeholder='Name'
          className='input_name'
          onChange={nameChangeHandler}
        />
        {errors.Name && <p>Your name is required.</p>}

        <input 
          {...register('Email', { pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/ })} 
          required={true} 
          type="email"
          placeholder='Email' 
          className='input_email'
          onChange={emailChangeHandler}
        />
        {errors.Email && <p>Invalid email address.</p>}

        <input 
          {...register('Subject', { required: true })} 
          type="text"
          placeholder='Subject' 
          className='input_subject'
          onChange={subjectChangeHandler}
        />
        {errors.Subject && <p>Please enter the subject.</p>}

        <input 
          {...register('Message', { required: true })} 
          type="text"
          placeholder='Type your message...' 
          className='input_message'
          onChange={textChangeHandler}
        />
        {errors.Message && <p>Please enter your message.</p>}
        <input 
          type="submit" 
          className='input_submit'
        />
      </form>
    </div>
  );
}

export default SendForm;