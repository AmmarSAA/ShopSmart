import React, { useContext } from "react";
import { GlobalContext } from "../Context/context";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function CartItems({ cartData }) {
  const { dispatch } = useContext(GlobalContext);
  const [count, setCount] = useState(1);

  const deleteItem = () => {
    console.log("Delete Item");
    dispatch({
      type: "DELETE_ITEM",
      payload: cartData,
    });
  };

  const increaseItem = () => {
    console.log("Increase Item");
    dispatch({
      type: "INCREASE_ITEM",
      payload: cartData,
    });
  };

  const decreaseItem = () => {
    console.log("Decrease Item");
    dispatch({
      type: "DECREASE_ITEM",
      payload: cartData,
    });
  };

  return (
    <div className="card mb-3" style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
      <div className="d-flex align-items-center justify-content-between">
        <div className="row g-0">
          <div className="col-md-4 col-6">
            <img src={cartData.thumbnail} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: '120px' }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title">{cartData.title} - {cartData.price}</h6>
              <p className="card-text">
                <small className="text-body-secondary">
                  <b>Total</b> - ${cartData.price * cartData.count}
                </small>
                <br />
                <small className="text-body-secondary">
                  <b>Quantity</b>:
                </small>
                <div className="btn-group">
                  <button
                    className="btn btn-outline-danger me-2 px-4"
                    onClick={decreaseItem}
                  >
                    -
                  </button>
                  <div className="m-2">{cartData.count}</div>
                  <button
                    className="btn btn-outline-primary ms-2 px-4"
                    onClick={increaseItem}
                  >
                    +
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="del-but mb-2 me-3">
          <small className="btn btn-outline-danger" onClick={deleteItem}><FaTrashAlt /></small>
        </div>
      </div>
    </div>
  );
}
