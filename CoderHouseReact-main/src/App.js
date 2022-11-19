import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Container from 'react-bootstrap/Container'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import CartProvider from "./context/CartContext"
import CartScreen from "./Components/CartScreen/CartScreen"
import UIProvider from "./context/UIContext"
import Checkout from "./Components/Checkout/Checkout"



function App() {


  return (
    <>
      <UIProvider>

        <CartProvider>

          <BrowserRouter>

            <Header />

            <Container fluid>

                <Switch> 
                  <Route exact path="/" component={ItemListContainer}/>

                  <Route path="/productos/:categoryId" component={ItemListContainer}/>

                  <Route path="/item/:id" component={ItemDetailContainer}/>

                  <Route path="/cart" component={CartScreen}/>

                  <Route path="/checkout" component={Checkout}/>

                </Switch>


            </Container>
              <Footer />

          </BrowserRouter>

        </CartProvider>
      </UIProvider>
    </> 
  );
}

export default App;