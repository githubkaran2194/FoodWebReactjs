
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import NavbarNav from './Component/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import { CartProvider } from 'react-use-cart';
import LoginForm from './Pages/Login';
import SignIn from './Pages/SignIn';
import Footer from './Component/Footer';

function App() {
  return (
  <> <CartProvider>
  <BrowserRouter>
<NavbarNav/>
    <Routes>
      <Route path='/' element={<Home/>} />
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
