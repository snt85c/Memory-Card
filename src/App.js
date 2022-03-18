import './App.css';
import { useState } from 'react';
import GameBoard from './GameBoard';
import Header from './Header';
import Loading from './Loading';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App" style={isLoading?{backgroundColor:"red"}:{backgroundColor:"red", height:"100vh"}}>
      <Loading isLoading={isLoading}/>
      {!isLoading && <Header />}
      <GameBoard setIsLoading={setIsLoading}/>
    </div>
  );
}

export default App;
