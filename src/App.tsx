import './App.css';
import Search from './pages/movieSearch/Search';
import Header from './components/header/Header';
import EachMovie from './pages/eachMovie/EachMovie';
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
