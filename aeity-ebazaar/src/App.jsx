import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import CategoryPage from './pages/CategoryPage';
import VendorPage from './pages/VendorPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AuthPage from './pages/AuthPage';

<Route path="/cart" element={<Cart />} />

<Route path="/auth" element={<AuthPage />} />

<Route path="/checkout" element={<Checkout />} />



export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/vendor/:name" element={<VendorPage />} />
      </Routes>
      <Footer />
    </>
  );
}
