import GlobalStyle from './styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';
import Pages from './routes.js';
import UserContext from './context/userContext';
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  return (
    <UserContext.Provider value={{ name, setName, email, setEmail, password, setPassword, passwordRepeat, setPasswordRepeat }}>
      <BrowserRouter>
        <GlobalStyle />
        <Pages />
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export { App };