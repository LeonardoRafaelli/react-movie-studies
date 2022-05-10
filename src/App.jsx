import './App.css';
import Search from './pages/Search';
import Header from './pages/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Search />}/>
          <Route path="/movie"/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
