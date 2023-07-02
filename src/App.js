
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import NavbarNav from './Component/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import { CartProvider } from 'react-use-cart';
import LoginForm from './Pages/Login';
import SignIn from './Pages/SignIn';
import Footer from './Component/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact'

function App() {
  return (
  <> <CartProvider>
  <BrowserRouter>
<NavbarNav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} /> 
      <Route path='/contact' element={<Contact/>} /> 
      <Route path='/cart' element={<Cart/>} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path='/signIn' element={<SignIn/>} />
    </Routes>
  </BrowserRouter>
  <Footer/>
  </CartProvider>
  </>
  );
}

export default App;
