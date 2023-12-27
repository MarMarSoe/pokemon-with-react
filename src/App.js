import './App.css';
import React from 'react';
import PokeList from './components/PokeList';

function App() {
  return (
    <div className='p-2'>
      <header className="py-1 font-bold text-violet-900">
       Poke List
      </header>
      <PokeList/>
    </div>
  );
}

export default App;
