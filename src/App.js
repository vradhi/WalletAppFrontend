
import './App.css';
import Navigation from './components/shared/Navigation';
import Welcome from './components/Welcome';
import Dashboard from './components/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateWallet from './components/dashboard/operations/CreateWallet';
import NotFound from './components/shared/NotFound';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
     <Provider store={store}>
     <Router>
       
       <Routes>
       {/* <Route path="/" element={<Welcome />} /> */}
       <Route path="/" element={<Navigation />} /> 
          <Route path="/" exact element={<Welcome />} />
         <Route path="/dashboard" exact element={<Dashboard />} />
         <Route path="/createwallet" exact element={<CreateWallet />} />
         <Route path="/" element={<NotFound />} />
         {/* <Route path="/CreateWallet" exact component={CreateWallet} />  */}
       </Routes>
    
     </Router>

     </Provider>
    
  );
}

export default App;
