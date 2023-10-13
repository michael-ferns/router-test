import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import {
  Button,
  ErrorMessage,
  Input,
  LoginContainer,
  LoginForm,
} from './styles';

const Login = () => {
  const [username, setUsername] = useState<string>('user');
  const [password, setPassword] = useState<string>('password');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === 'user' && password === 'password') {
      setError(null); // Clear any previous errors
      history.push('/dashboard');
      dispatch(login());
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError(null); // Clear error when user types
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(null); // Clear error when user types
          }}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
