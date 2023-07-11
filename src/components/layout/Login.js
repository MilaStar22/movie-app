import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect( () => {
    document.title = 'Login';
  }, []);

  const {
    register,
    formState: { errors },
  } = useForm();

  // get email value from form
  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }
  // get name value from form
  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }
  // gather our data: email and password 
  let allData = {
    password: password,
    email: email,
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
     setPassword('');
     setEmail('');
   };


  return (
    <div className='login_form'>
      <form 
        className='login'
        onSubmit={submitFormHandler}
      >
        <input 
          {...register('Email', { pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/ })} 
          required={true} 
          placeholder='Email' 
          type="email"
          className='login_email'
          onChange={emailChangeHandler}
        />
        {errors.Email && <p>Invalid email address.</p>}

        <input 
          {...register('Password', { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/} )} 
          required={true} 
          placeholder='Password'
          type="password"
          className='login_password'
          onChange={passwordChangeHandler}
        />
        {errors.Name && <p>Minimum eight characters, at least one letter and one number.</p>}
        
        <span className="hover_text" data-hover='Password: minimum 8 symbols, at least 1 letter and 1 number'>Hint</span>

        <input type="submit" value='Login' className='login_submit'/>
      </form>
      <div className="registration_restore">
        <Link to="#">Registration</Link>
        <Link to="#">Restore password</Link>
      </div>
    </div>
  );
}

export default Login;