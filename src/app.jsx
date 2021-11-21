import GlobalStyle from './styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';
import Pages from './routes.jsx';
import UserContext from './context/userContext';
import { useState } from 'react';
import BuyContext from './context/buyContext';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const buyInfo = {
    product: {
      plan: 'Semanal',
      tea: false,
      incense: false,
      organic: false
    },
    delivery: {
      date: 1,
      state: 'Estado',
      buyerName: '',
      address: '',
      zipCode: '',
      city: ''
    }
  };

  return (
    <UserContext.Provider value={{ name, setName, email, setEmail, password, setPassword, passwordRepeat, setPasswordRepeat }}>
      <BuyContext.Provider value={{ buyInfo }}>
        <BrowserRouter>
          <GlobalStyle />
          <Pages />
        </BrowserRouter>
      </BuyContext.Provider>
    </UserContext.Provider>
  );
};

export { App };