import './App.css';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from "./components/Banner";
import Review from "./components/Review";
import SuccessMetrics from "./components/SuccessMetrics";

function App() {
  return (
      <div className="App">
          <NavBar/>
          <Banner/>
          <SuccessMetrics/>
          <Review/>
      </div>
  );
}

export default App;
