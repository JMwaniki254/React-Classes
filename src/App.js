import Home from './Home';
import Header from './Header';
import Services from './Services';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Services' element={<Services/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
