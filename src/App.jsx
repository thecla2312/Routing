import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage'; 
import Contactpage from './Components/SearchForm';
import Error from './Pages/Error';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {

return (
    <div className="container-md">
      <Router>
        <Header/>
      <Routes>
        <Route path= '/' element={<Homepage /> } />
         <Route path= '/about' element={<Aboutpage />} />
        <Route path='*' element={< Error />} />
      </Routes>
      <Footer />
      </Router>  
      </div>
  );
};
export default App;
  
