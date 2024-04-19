import React from 'react';
import { ReactDOM } from 'react';

import './App.css'
import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import MainPage from './pages/MainPage'

function App() {
  return (
    <>
      {/* <ErrorComponent information={''} severity={'info'} /> */}
      <MainPage />
    </>
  )
}

export default App;
