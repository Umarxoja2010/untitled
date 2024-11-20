
import './App.css';
import Banner from './components/Banner';
import Banner2 from './components/Banner2';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Revi from './components/Revi';
import Teams from './components/Teams';

function App() {
  return (
    <div className="App">
     <Header/>
     <main>
      <Hero/>
      <Banner/>
      <Banner2/>
      <Revi/>
      <Teams/>
      <Content/>
     </main>
     <Footer/>
    </div>
  );
}

export default App;
