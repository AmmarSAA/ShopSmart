/*******************************
* File Name: ProductPage.jsx   *
* Author: Ammar S.A.A          *
* Output: Product Order Page   *
*******************************/

import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";
import { getProduct } from "../services/apiService";
import {GlobalContext} from '../Context/context';

export default function ProductPage() {
  const [count, setCount] = useState(1);
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  

  // Context APi data transfering

  let {state, dispatch} = useContext(GlobalContext); // It's similar to the state with the replacement of setProperty to dispatch


  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getProduct(productId);
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [productId]);

  const addToCart = () => {
    if (count <= 0) {
      Swal.fire({
        title: "Error!",
        text: "Please select a valid quantity",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }

    const item = { ...product, count };
    dispatch ({
      type: "ADD_TO_CART",
      payload: item,
    });


    console.log(item);
    Swal.fire({
      title: "Success!",
      text: "Added to Cart Successfully",
      icon: "success",
      confirmButtonText: "Close",
    });
  };

  const placeOrder = () => {
    if (count <= 0) {
      Swal.fire({
        title: "Error!",
        text: "Please select a valid quantity",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }

    const item = { ...product, count };
    console.log(item);
    // Swal.fire({
    //   title: "Success!",
    //   text: "Order Placed Successfully",
    //   icon: "success",
    //   confirmButtonText: "Close",
    // });
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Order it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Order Place Successfully!',
          'Your order has been placed.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your order is cancel:)',
          'error'
        )
      }
    })
  };

  return (
    <div className="container-fluid">
      <div className="text-center">
        <h1 className="mt-5 mb-3">{product.title}</h1>
      </div>

      <div className="container">
      <div className="row">
      
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
         
          <Carousel>
            {product?.images?.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image} style={{width: '100%', height: '65vh'}} alt={`Slide ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto p-4">
          <div>
            <p className="color-secondary"><b>Description</b>: {product.description}</p>
            <p>
              <b>Price:</b> <del>{product.price}</del> - <ins>{product.discountPercentage}</ins>
            </p>
            <div className="d-flex align-items-center mb-2">
              <StarRatings
                rating={product.rating}
                starRatedColor="#ffc107"
                starEmptyColor="#e4e5e9"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
              />
              <span className="ms-2 mt-2">{product.rating}</span>
            </div>
            <p><b>Stock Left:</b> {product.stock}</p>
            <div className="btn-group">
              <button
                className="btn btn-outline-danger me-2 px-4"
                onClick={() => setCount((prevCount) => Math.max(prevCount - 1, 0))}
              >
                -
              </button>
              <div className="m-2">{count}</div>
              <button
                className="btn btn-outline-primary ms-2 px-4"
                onClick={() => setCount((prevCount) => prevCount + 1)}
              >
                +
              </button>
            </div>
            <div className="mt-3">
              <button className="btn btn-outline-success me-2" onClick={addToCart}>
                Add to Cart
              </button>
              <button className="btn btn-outline-secondary" onClick={placeOrder}>
                Place Order
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
