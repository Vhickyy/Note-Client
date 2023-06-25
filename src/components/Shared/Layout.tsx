import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../homeComponent/Footer'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout