import './App.css';

import { Routes, Route } from 'react-router';

import Main from '../pages/Main/Main';
import StarshipsList from '../pages/StarshipsList/StarshipsList';
import Starship from '../pages/Starship/Starship';
import Nav from './Nav';
import Four04 from '../pages/404/Four04'

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="container">

      <Routes>
          <Route path="/" element={<Main />} />
        
        <Route path="/ships" element={<StarshipsList />} />
        
          <Route path="/ships/:id" element={<Starship />} />

          <Route path="*" element={<Four04 />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
