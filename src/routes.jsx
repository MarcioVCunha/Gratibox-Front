import { Routes, Route } from 'react-router-dom';
import FrontPage from './pages/front-page/index.jsx';
import Homepage from './pages/homepage/index.jsx';
import SignIn from './pages/sign-in/index.jsx';
import SignUp from './pages/sign-up/index.jsx';
import Plan from './pages/sing-plan/index.jsx';

const Pages = () => {
  return (
    <Routes>
      <Route exact path='/' element={<FrontPage />} />
      <Route exact path='/sign-in' element={<SignIn />} />
      <Route exact path='/sign-up' element={<SignUp />} />
      <Route exact path='/homepage' element={<Homepage />} />
      <Route exact path='/plans' element={<Plan />} />
    </Routes>
  );
};

export default Pages;