import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Speakers from './Component/Speakers/Speakers';


function App() {
  return (
    <div className="body">
      {/* this is header part  */}
     <Header></Header>
     <Speakers></Speakers>
    </div>
  );
}

export default App;
