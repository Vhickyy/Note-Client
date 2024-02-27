import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"

const Layout = () => {
  return (
    <>
    <Navbar/>
    <main>
      <Outlet/>
      <ToastContainer />
    </main>
    <Footer/>
    </>
  )
}

export default Layout