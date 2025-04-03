import './style/style.scss';
import Header from './components/Header'
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <Menu/>
    </>
  );
}

export default App;
