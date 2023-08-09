import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GlobalContext } from '../Context/context';
import CartItems from './CartItems';
import Checkout from './Checkout';

function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // Context APi Fetching data from productPage

  let { state, dispatch } = useContext(GlobalContext);

  // -------------- Just For Check -------------------

  // useEffect(() => {
  //   console.log("Value from context :", state);
  // }, [show]);


  return (
    <>
      <Button variant="" onClick={handleShow} style={{background:'none', color: '#fff'}}>
        Cart
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={"end"} name={"end"} backdrop='static'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {state.cart.length > 0 && (
            <div className="container">
              {state.cart.map((val, key) => (
                <CartItems key={key} cartData={val} />
              ))}
            </div>
          )}
          <Checkout />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;