
import './App.css';
import Navigation from './components/shared/Navigation';
import Welcome from './components/Welcome';
import Dashboard from './components/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateWallet from './components/dashboard/operations/CreateWallet';
function App() {
  return (
    
     <Router>
       
       <Routes>
       {/* <Route path="/" element={<Welcome />} /> */}
       <Route path="/" element={<Navigation />} /> 
          <Route path="/" exact element={<Welcome />} />
         <Route path="/dashboard" exact element={<Dashboard />} />
         <Route path="/createwallet" exact element={<CreateWallet />} />
      
         {/* <Route path="/CreateWallet" exact component={CreateWallet} />  */}
       </Routes>
    
     </Router>
    
  );
}

export default App;
