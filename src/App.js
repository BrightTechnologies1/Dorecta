import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Collection from './components/collection';

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Collection />
    </div>
  );
}

export default App;