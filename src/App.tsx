import './App.css';
import Search from './pages/Search';
import Header from './pages/header/Header';
import EachMovie from './pages/EachMovie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Search />}/>
          <Route path="/movie/:id" element={<EachMovie />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
