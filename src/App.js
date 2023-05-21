import { useEffect, useState } from 'react';
import './App.css';
import Navigator from './components/navigator';
import Login from './components/authentication/login';

function App() {

  const [isActive, setActive] = useState(false)

  useEffect(() => {
    verifyUser()
  }, [isActive])
  
  const verifyUser = () => {
    const data = localStorage.getItem('key')
    if (data) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  return (
      isActive ? <Navigator setActive={setActive} /> : <Login setActive={setActive} />
  );
}

export default App;