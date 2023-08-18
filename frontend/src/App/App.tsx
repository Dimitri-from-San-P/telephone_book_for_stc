import React, { useReducer } from 'react';
import './App.css';
import Table from '../Table/Table';
import stateContext from '../reducer/context';
import { init, reducer } from '../reducer/reducer';
import Header from './Header/Header';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, init);
  return (
    <stateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <Table />
      </div>
    </stateContext.Provider>
  );
}

export default App;
