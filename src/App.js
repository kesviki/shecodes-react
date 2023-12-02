import Weather from "./Weather";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div id="root">
      <div className="App">
        <div className="container">
          <div className="Weather">
            <Weather defaultCity="Budapest"/>
            <Footer />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;