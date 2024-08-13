import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <section className="home-section">
      <>
        <img
          src="https://res.cloudinary.com/dfxytykhs/image/upload/v1723532317/image_5_aiurbu.png"
          alt="traveller"
          className="img-small"
        />
      </>
      <div className="container-large">
        <div className="text-container">
          <h1 className="trave-relax">Travel. Relax. Memories.</h1>
          <p className="description">
            With travel trip you can experience new travel and the best tourist
            destinations.
          </p>
        </div>
        <button type="button" className="book-trip">
          Book a New Trip
        </button>
      </div>
      <>
        <img
          src="https://res.cloudinary.com/dfxytykhs/image/upload/v1723532317/image_5_aiurbu.png"
          alt="traveller"
          className="img-large"
        />
      </>
    </section>
  </>
)

export default Home
