import './App.css';
import DustieBio from './components/Challenges/day01/Dustie';
import Header from './components/Header';
import Footer from './components/Challenges/day01/Footer'
import Home from './components/Challenges/day01/Home'

function App() {
  const name = 'Dustie'
  return(
    <div className ='App'>
      <Home />
      <h1>Welcome to React, {name}</h1>
      <h2>We just modified our root component</h2>
      <Header />
      <DustieBio />
      <Footer />
      </div>
  );
}

export default App;