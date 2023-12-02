import TodaysWeather from "./TodaysWeather";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div id="root">
      <div className="App">
        <div className="container">
          <div className="Weather">
            <TodaysWeather defaultCity="Budapest"/>
            <div className="row">

            </div>
            <Footer />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;