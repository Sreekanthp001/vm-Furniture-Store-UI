import Features from "./components/Features";
import FeaturesSecond from "./components/FeaturesSecond";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewItems from "./components/NewItems";
import NewsLetters from "./components/NewsLetters";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";

function App() {
    return (
        <div className='w-full mx-auto bg-white'>
            <Header />
            <div id="home"><Hero /></div>
            <div id="features">
                <Features />
                <FeaturesSecond />
            </div>
            <div id="products"><Products /></div>
            <Testimonial />
            <div id="contact"><NewsLetters /></div>
            <Footer />
        </div>
    );
}

export default App;
