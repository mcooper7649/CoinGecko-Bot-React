import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />

      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
