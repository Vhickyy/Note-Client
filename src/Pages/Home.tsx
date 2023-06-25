import Reviews from '../components/homeComponent/Reviews'
import Details from '../components/homeComponent/Details'
import Header from '../components/homeComponent/Header'
import Pricing from '../components/homeComponent/Pricing';

const Home = () => {
  return (
    <>
    <Header/>
    <main>
      <Details/>
      <Reviews/>
      <Pricing/>
    </main>
    </>
  )
}

export default Home