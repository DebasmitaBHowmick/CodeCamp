
import AllRoutes from './routers/AllRoutes';
import { Footer, Header } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Header/>
       
      <AllRoutes/>
      <ToastContainer autoClose={3000} closeOnClick="true"/>
      <Footer/>
    </div>
  );
}

export default App;
