import GlobalStyle from './styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';
import Pages from './routes.js';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Pages />
    </BrowserRouter>
  );
};

export { App };