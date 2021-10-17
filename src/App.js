import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// function based component 

function App() {
  const [mode, setMode] = useState('dark')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    // type - it is the type of alert you want to send in Bootstrap.
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Xenator" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try Xenator - Word Counter, Character Counter, Remove Extra Spaces:" mode={mode} />
            </Route>
          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;
