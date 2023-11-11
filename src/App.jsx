import './App.scss';
import Home from './components/Home';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testi from './components/testimonials/Testi';
import Join from './components/join/Join.jsx';
import Footer from './components/footer/Footer.jsx';



function App() {
  return (
    <div className="App">
          <Home/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testi/>
          <Join/>
          <Footer/>

        {/* <Router>
          <Home/>
          <Routes>
            <Route path='/#programs' element={<Programs/>}/>
            <Route path='/#programs' element={<Reasons/>}/>
          </Routes>
      </Router> */}
    </div>
  );
}

export default App;
