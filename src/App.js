import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataScience from './components/DataScience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SoftwareTesting from './components/SoftTesting';
import WebDevelopment from './components/WebDevelopment';
import DigitalMarketing from './components/DigitalMarketing';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/webdevelopment' element={<WebDevelopment />} />
      <Route path='/datascience' element={<DataScience />} />
      <Route path='/testing' element={<SoftwareTesting />} />
      <Route path='/digitalmarketing' element={<DigitalMarketing />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
