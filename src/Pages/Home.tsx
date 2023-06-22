import Reviews from '../components/Reviews'
import Details from '../components/homeComponent/Details'
import Header from '../components/homeComponent/Header'

const Home = () => {
  return (
    <>
    <Header/>
    <main>
      <Details/>
      <Reviews/>
    </main>
    </>
  )
}

export default Home