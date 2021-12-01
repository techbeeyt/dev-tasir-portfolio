
import { Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import Hire from './components/Hire';
import Home from './components/Home'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Error from './components/Error';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Course from './components/Course';
function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/hire' element={<Hire />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/course' element={<Course />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
