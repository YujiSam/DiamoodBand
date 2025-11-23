import Nav from './components/Nav'
import Footer from './components/Footer'
import { useLocation, Outlet } from 'react-router-dom'


function App() {

  const location = useLocation();

  const shouldShowFooter = location.pathname === '/';

  return (
    <>
      <Nav/>
      <Outlet/>
      {shouldShowFooter && <Footer/>}
    </>
  )
}

export default App
