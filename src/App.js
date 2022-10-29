import Home from './pages/home/home';
import CommonContextProvider from './context/commonContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <CommonContextProvider>
        <Home />
        <ToastContainer />
      </CommonContextProvider>
    </div>
  );
}

export default App;
