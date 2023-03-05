import './App.css';
import React from 'react';
import ComponentC from './components/context/ComponentC';
// import CounterOne from './components/hookUseEffect/CounterOne';
// import DataFetching from './components/hookUseEffect/DataFetching';
// import IntervalCounter from './components/hookUseEffect/IntervalCounter';
// import MouseContainer from './components/hookUseEffect/MouseContainer';
// import CounterFour from './components/hookUseState/CounterFour';
// import CounterThree from './components/hookUseState/CounterThree';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    // <div className="App">
    //   <CounterThree/> <hr />
    //   <CounterFour/> <hr />
    //   <CounterOne/> <hr />
    //   <MouseContainer/> <hr />
    //   {/* <IntervalCounter/> */}
    //   <DataFetching/>
    // </div>
    <>
      <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={"Channel name"}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
