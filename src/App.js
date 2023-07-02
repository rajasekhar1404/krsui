import { useEffect, useState } from 'react';
import './App.css';
import Navigator from './components/navigator';
import DashBoardService from './components/dashboard/dashboardService';
import { getLoggedInUser } from './components/apis/userRequests';

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


  return (
      isActive ? <Navigator setActive={setActive} /> : <DashBoardService setActive={setActive} />
  );
}

export default App;
