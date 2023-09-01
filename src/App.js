import './App.css';
import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import Statistics from './Components/statistics/statistics';
import About from './Components/about/about';
import Aboutus from './Components/about/aboutus';
import Watch from './Components/about/watch';
import OurFoods from './Components/OurFoods/ourFoods';
import Cart from './Components/cart/cart';
import CheckOut from './Components/checkout/checkout';
import { FoodContextProvider } from './context/food-context';
import Reviews from './Components/reviews/reviews';
import FAQ from './Components/FAQ/faq';
import Footer from './Components/footer/footer'

function App() {
  return (
    <FoodContextProvider>
      <div className="App">
        <div className='header'>
          <Navbar />
        </div>
        <div id='Home'>
          <Home />
        </div>
        <Statistics />
        <div id='about'>
          <About />
          <div className='item-about'>
            <Aboutus />
          </div>
          <div className='item-watch'>
            <Watch />
          </div>
        </div>
        <div className='item-OurFoods' id="Explore_Foods">
          <OurFoods />
          <Cart />
          {CheckOut.length > 0 && <CheckOut />}
        </div>
        <div id='Reviews'>
          <Reviews />
        </div>
        <div id='FAQ'>
          <FAQ/>
        </div>
      </div>

     <Footer/>
    </FoodContextProvider>

  );
}

export default App;
