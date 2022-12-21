import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js'
import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutiles - Dark Mode";
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutiles - light Mode";
    }
  }

  return (
    <>

      <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={
            <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              mode={mode}
            />
          } />
        </Routes>

      </div>

    </>
  );
}

export default App;
