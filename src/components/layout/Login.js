import React, { useCallback, useEffect } from "react";
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";

export default function Login() {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
        defaultValues: {
          email: "",
          password: "",
        },
    });

    const resetAsyncForm = useCallback(async () => {
      const result = await fetch('./api/formValues.json'); 
      reset(result); // asynchronously reset your form values
    }, [reset]);
    
    useEffect(() => {
      resetAsyncForm()
    }, [resetAsyncForm])

    return (
      <div className='login_form'>
        <form 
          className='login'
          onSubmit={handleSubmit((d) => console.log(d))}>

              <input
                id="email"
                className='login_email'
                placeholder='example@gmail.com'
                {...register("email", {
                  required: "Email is required",
                  validate: {
                    maxLength: (v) =>
                      v.length <= 20 || "The email should have at most 20 characters",
                    matchPattern: (v) =>
                      /[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) ||
                      "Email address must be a valid",
                  },
                })}
              />

              {errors.email?.message && (
                <small>{errors.email.message}</small>
              )}

              <input
                id="password"
                className='login_password'
                placeholder='Password'
                {...register("password", {
                  required: "Password is required",
                  validate: {
                    maxLength: (v) =>
                      v.length >= 8 || "The Password should have at list 8 characters",
                    matchPattern: (v) =>
                      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) ||
                      "Password should have at least 1 letter and 1 number",
                  },
                })}
              />

              {errors.password?.message && (
                <small>{errors.password.message}</small>
              )}
            <button
              type="button"
              onClick={() => {
                reset(
                  {
                    email: '',
                    password: ''
                  }, 
                  {keepDefaultValues: true}
                );
              }}
            >
              Reset data
            </button>
            <button 
              type="submit" 
              className='login_submit'
            >
              Submit
            </button>
        </form>
        <div className="registration_restore">
        <Link to="#">Registration</Link>
        <Link to="#">Restore password</Link>
      </div>
      </div>
    );
}