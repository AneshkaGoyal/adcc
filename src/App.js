import './App.css';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from "./components/Banner";
import Review from "./components/Review";
import SuccessMetrics from "./components/SuccessMetrics";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

function App() {
  return (
      <div className="App">
          <NavBar/>
          <Banner/>
          <SuccessMetrics/>
          <Services/>
          <Contact/>
          <Review/>
          <Faq/>
          <Footer/>
      </div>
  );
}

export default App;
