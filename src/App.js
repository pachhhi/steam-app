import './App.css';
import Layout from "../src/components/Layout"
import Main  from "../src/components/Main"
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Badges from './pages/Badges';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={(
            <div>
              <Layout/>
              <Main/>
            </div>)}/>
            <Route path='/badges' element={<Badges/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
