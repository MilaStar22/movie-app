import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import sprite from "../img/sprites.svg";

const phone = {
  title: 'Phone',
  phone: 'Inquiry : (+88) 487 - 365 - 254',
  description: 'Hotline : 5879 - 6985'
};
const email = {
  title: 'Email',
  email: 'faime@example.com',
  description: 'career@example.fm'
};
const location = {
  title: 'Location',
  location: '1800 Abbot Kinney Blvd.',
  description: 'Unit D & E Venice, CA 90291'
};



function SendForm() {
  const [showText, setShowText] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            <h2 className={`hidden ${showText ? 'appear' : ''}`}>{email.title}</h2>
            <p>{email.email}</p>
            <p>{email.description}</p>
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
        className='form'
        onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register('Name', { required: true })} placeholder='Name' className='input_name'/>
        {errors.Name && <p>Your name is required.</p>}

        <input {...register('Email', { pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/ })} placeholder='Email' className='input_email'/>
        {errors.Email && <p>Invalid email adress.</p>}

        <input {...register('Subject', { required: true })} placeholder='Subject' className='input_subject'/>
        {errors.Subject && <p>Please enter the subject.</p>}

        <input {...register('Message', { required: true })} placeholder='Type your message...' className='input_message'/>
        {errors.Message && <p>Please enter your message.</p>}
        <input type="submit" className='input_submit'/>
      </form>
    </div>
  );
}

export default SendForm;