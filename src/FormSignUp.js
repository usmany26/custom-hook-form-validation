import React from "react";
import useForm from "./useForm";
import validate from './ValidateInfo'

const FormSignUp = () => {

  const { handleChange, values , handleSubmit, errors} = useForm(validate);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>SignUp to Continue</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
              id='username'
              type="text"
              className='form-input'
              name='username'
              placeholder='enter your user name'
              value={values.username}
              onChange={handleChange}
          /> 
          {errors.username && <p>{ errors.username }</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
              id='email'
              type="email"
              className='form-input'
              name='email'
              placeholder='enter your user email'
          />
            {errors.email && <p>{ errors.email }</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
              id='password'
              type="password"
              className='form-input'
              name='password'
              placeholder='enter your user password'
          />
          {errors.password && <p>{ errors.password }</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
              id='password2'
              type="password"
              className='form-input'
              name='password2'
              placeholder='enter your user password2'
          />
          {errors.password2 && <p>{ errors.password2 }</p>}
        </div>
        <button className="form-input-btn" type='submit'>
          Sign Up
        </button>
        <span className="form-input-login">
          Already Have an account? Login<a href="#"></a>
        </span>
      </form>
    </div>
  );
};

export default FormSignUp;
