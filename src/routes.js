import { Routes, Route } from 'react-router-dom';
import FrontPage from './pages/front-page/index.jsx';

const Pages = () => {
  return (
    <Routes>
      <Route exact path='/' element={<FrontPage />} />
    </Routes>
  );
};

export default Pages;