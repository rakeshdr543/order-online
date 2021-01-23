import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container} from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
function App() {
  return (
   <Router>
    <Header />
    <main className='py-3'>
      <Container >
      <Route path='/' component={HomeScreen} exact />
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/shipping' component={ShippingScreen} />
      <Route path='/payment' component={PaymentScreen} />
      <Route path='/placeorder' component={PlaceOrderScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
      </Container>
    </main>
    <Footer />
   </Router>
  );
}

export default App;
