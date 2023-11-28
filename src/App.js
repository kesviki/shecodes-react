import './App.css';

import Search from "./Search";
import TodaysWeather from "./TodaysWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div id="root">
      <div className="App">
        <div className="container">
          <div className="Weather">
            <Search />
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
