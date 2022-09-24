import React from 'react';
import * as Yup from 'yup';
import {  Link } from "react-router-dom";
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { yupEmail, yupPasswordLogin } from '../../helpers/formValidations';
import './Auth.css';
import { loginUser } from '../../services/usersServices';
import { setTokenLS } from '../../helpers/localStorage';

const LoginForm = () => {



  const registerSubmit = async (values) => {
    const {data} = await loginUser(values)
    setTokenLS(data.token)
   

  };


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: yupEmail(),
      password: yupPasswordLogin(),
    }),

    onSubmit: (values) => {
      registerSubmit(values);
     // formik.resetForm();
    },
  });

  return (

    <div className='container-form'>
      <div className='form shadow'>
        <div className='form-container-side '>
          <div className='form-container-nav'>
            <h4>Si aun no te registras puedes ir a hacerlo</h4>
            {/* <Link
              to='/auth/register'
              className='form-container-nav-link'
            >
              Registrate
            </Link> */}
          </div>
        </div>
        <form
          className="form-container"
          onSubmit={formik.handleSubmit}
        >
          <h4>Login</h4>
          <div>
            <label htmlFor="email">Email</label>
            <Form.Control
              autoComplete="off"
              id="email"
              type="email"
              className="input-field"
              {...formik.getFieldProps('email')}
            />
            {formik.touched?.email && formik.errors?.email && (
              <div className="error-message message">{formik.errors.email}</div>
            )}

            <label htmlFor="pass">Contraseña</label>
            <Form.Control
              autoComplete="off"
              id="pass"
              type="password"
              className="input-field"
              {...formik.getFieldProps('password')}
            />
            {formik.touched?.password && formik.errors?.password && (
              <div className="error-message message">{formik.errors.password}</div>
            )}

          </div>
          <div className='btn-container'>
            <div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div
             
              className="google-btn btn-container"
            >
         
              <p>Iniciar sesion con Google</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;