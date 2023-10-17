import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { TextField } from '@mui/material';
import { login } from '../../redux/slices/authSlice';
import {
  LoginContainer,
  LoginCardContainer,
  LoginCard,
  LoginTitle,
  LoginButton,
} from './Login.styles';

const tempEmail = 'user@test.com';
const tempPassword = 'mYP@ssW0rd';

interface LoginFormValues {
  email: string;
  password: string;
}

const validateForm = (values: LoginFormValues) => {
  const errors: { email?: string; password?: string } = {};

  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    ({ email, password }: LoginFormValues) => {
      if (email === tempEmail && password === tempPassword) {
        dispatch(login());
      }
    },
    [dispatch],
  );

  return (
    <LoginContainer>
      <LoginCardContainer>
        <Formik
          initialValues={{ email: tempEmail, password: tempPassword }}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form>
              <LoginCard>
                <LoginTitle>Login</LoginTitle>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
                <Field
                  as={TextField}
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                />
              </LoginCard>
              <LoginButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!isValid}
              >
                Log In
              </LoginButton>
            </Form>
          )}
        </Formik>
      </LoginCardContainer>
    </LoginContainer>
  );
};

export default Login;
