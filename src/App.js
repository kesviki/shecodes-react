import TodaysWeather from "./TodaysWeather";
import Forecast from "./Forecast";
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
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
            <Forecast />
            </div>
            <Footer />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;