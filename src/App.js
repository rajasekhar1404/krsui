import { useEffect, useState } from 'react';
import './App.css';
import Navigator from './components/navigator';
import Login from './components/authentication/login';
import { LOGGEDINUSER } from './components/apis/taskApis';
import { OK } from './components/utils/constants';
import PublicDashboard from './components/dashboard/publicDashboard';

function App() {

  const [isActive, setActive] = useState(false)

  useEffect(() => {
    verifyUser()
  }, [isActive])
  
  const verifyUser = () => {
    const token = localStorage.getItem('key')
    if (token) {
      const isLoggedIn = getLoggedInUser()
      if (isLoggedIn) {
        setActive(true)
      } else {
        localStorage.clear()
        setActive(false)
      }
    } else {
      setActive(false)
    }
  }

  const getLoggedInUser = async () => {
    const response = await fetch(LOGGEDINUSER, {
        method: 'GET',
        headers: {
            'Authorization' : `Bearer ${localStorage.getItem('key')}`
        }
    })
    if (response.status === OK) {
      return await response.json()
    }
    return false
}

  return (
      isActive ? <Navigator setActive={setActive} /> : <Login setActive={setActive} /> // <PublicDashboard /> //
  );
}

export default App;