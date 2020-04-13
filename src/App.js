import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { withAlert } from 'react-alert'


ReactDOM.render (
  <Routes />, document.getElementById('root')
);

const App = ({ alert }) => (
  <button
    onClick={() => {
      alert.show('Oh look, an alert!')
    }}
  >
    Show Alert
  </button>
);
 
export default withAlert()(App);