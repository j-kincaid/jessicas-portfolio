import Header from './components/Header';
import Aside from './components/Aside';
import Second from './components/Second';
import Footer from './components/Footer';

const App = () => {
  return (

    <div>
    <Header />

    <div className='row'>
    <Aside />
    <Second />
    </div>

   
    <Footer />
  </div>

  );
};

export default App;