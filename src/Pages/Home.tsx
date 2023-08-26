import Reviews from '../components/Home/Reviews'
import Details from '../components/Home/Details'
import Header from '../components/Home/Header'
import Pricing from '../components/Home/Pricing';

const Home = () => {
  return (
    <>
    <Header/>
    {/* <main> */}
      <Details/>
      <Reviews/>
      <Pricing/>
    {/* </main> */}
    </>
  )
}

export default Home