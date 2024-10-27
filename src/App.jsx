import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hearts from './components/Hearts';
import Login from './components/Login';
import MainPage from './components/Main';
import MostM from './components/MostM';
import NavBar from './components/NavBar';
import Playing from './components/Player';
import NewArtists from './components/NewArtists';
function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <NavBar />
        <div className='flex-grow'>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/hearts" element={<Hearts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/newartists" element={<NewArtists />} />


            <Route path="/mostm" element={<MostM />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
