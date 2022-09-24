import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import {
  yupConfirmPass,
  yupEmail,
  yupPassRegister,
  yupTitles,
} from '../../helpers/formValidations';
import {
  PASSWORD_DONT_MATCH,
  PASSWORD_REGISTER_CONTAIN,
  PASSWORD_SHORT
} from '../../config/config';

import './Auth.css';
import { addUser } from '../../services/usersServices';
import { setTokenLS } from '../../helpers/localStorage';

const RegisterForm = () => {

  

  const handleLogin= async (user) => {
    const tokenAuth = await addUser(user)
    setTokenLS(tokenAuth)
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    },

    validationSchema: Yup.object({
      name: yupTitles(),
      email: yupEmail(),
      password: yupPassRegister(PASSWORD_SHORT, PASSWORD_REGISTER_CONTAIN),
      confirmPassword: yupConfirmPass('password', PASSWORD_DONT_MATCH),
      role: yupTitles()
    }),

    onSubmit: (values) => {
      handleLogin(values)
      //formik.resetForm();
    },
  });

  return (
    <div className='container-form'>
      <div className='form shadow'>
        <div className='form-container-side'>
          <div className='form-container-nav'>
            <h4>Si ya te registraste púedes ir al login</h4>
            {/* <Link
              to='/auth/login'
              className='form-container-nav-link'
            >
              Login
            </Link> */}
          </div>
        </div>
        <form className="form-container" onSubmit={formik.handleSubmit}>
          <div className='form-container_title'>
            <h4>Registrate</h4>
          </div>

          <label htmlFor="name" className='form-container-label'>Nombre</label>
          <Form.Control
            autoComplete="off"
            id="name"
            type="text"
            className="input-field"
            {...formik.getFieldProps('name')}
          />
          {formik.touched?.name && formik.errors?.name && (
            <div className="error-message message">{formik.errors.name}</div>
          )}

          <label htmlFor="email">Email </label>
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

          <label htmlFor="confirmPassword">Confirma la contraseña</label>
          <Form.Control
            autoComplete="off"
            id="confirmPassword"
            type="password"
            className="input-field"
            {...formik.getFieldProps('confirmPassword')}
          />
          {formik.touched?.confirmPassword && formik.errors?.confirmPassword && (
            <div className="error-message message">{formik.errors?.confirmPassword}</div>
          )}

           <label htmlFor="role">Rol</label>
          <Form.Control
            autoComplete="off"
            id="role"
            type="text"
            className="input-field"
            {...formik.getFieldProps('role')}
          />
          {formik.touched?.role && formik.errors?.role && (
            <div className="error-message message">{formik.errors?.role}</div>
          )}

          <div className='btn-container'>
            <div>
              <button type="submit" className="btn btn-primary">
                Registrar
              </button>
            </div>            
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;