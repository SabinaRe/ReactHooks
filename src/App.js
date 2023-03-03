import './App.css';
import CounterOne from './components/hookUseEffect/CounterOne';
import IntervalCounter from './components/hookUseEffect/IntervalCounter';
import MouseContainer from './components/hookUseEffect/MouseContainer';
import CounterFour from './components/hookUseState/CounterFour';
import CounterThree from './components/hookUseState/CounterThree';

function App() {
  return (
    <div className="App">
      <CounterThree/> <hr />
      <CounterFour/> <hr />
      <CounterOne/> <hr />
      <MouseContainer/> <hr />
      {/* <IntervalCounter/> */}

    </div>
  );
}

export default App;
