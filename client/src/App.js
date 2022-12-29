import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

import { Route, Routes  } from 'react-router-dom';
import { auth } from './config/firebase.config';
import StateProvider from './context/StateProvider';
import AdminPage from './pages/AdminPage';
import CustomAlert from './components/CustomAlert';

console.log(auth);
function App() {
  return (
    <StateProvider>
      <div className=" w-screen h-screen overflow-scroll overflow-x-hidden">
        <CustomAlert />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </div>
    </StateProvider>
  );
}

export default App;
