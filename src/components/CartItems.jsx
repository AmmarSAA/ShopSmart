import React, { useContext } from "react";
import { GlobalContext } from "../Context/context";
import { useState } from "react";

export default function CartItems({ cartData }) {

    const delete_item = () => {
        console.log("Delte Item")
        
        
        
        const item = { ...cartData };
        dispatch({
            type: "DELTE_ITEM",
            payload: item,
        });
    }


    // Context APi

    const [count, setCount] = useState(1);
    let { state, dispatch } = useContext(GlobalContext);



    return (

        <div className="card mb-3" style={{width:'100%', height: 'auto', overflow:'hidden'}}>
            <div className="d-flex align-items-center justify-content-between">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={cartData.thumbnail} className="img-fluid rounded-start" alt="..." style={{width:'100%', height: '120px'}} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h6 className="card-title">{cartData.title} - {cartData.price}</h6>
                            <p className="card-text">
                                <small className="text-body-secondary">
                                    <b>Quantity</b> - {cartData.count}
                                </small>
                                <br />

                                <small className="text-body-secondary">
                                    <b>Total</b> - {cartData.price * cartData.count}$
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="del-but mb-2 me-3">
                    <small className="btn btn-outline-danger" onClick={delete_item}>Delete</small>
                </div>
            </div>
        </div>

    );
}
