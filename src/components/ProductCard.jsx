/******************************
* File Name: ProductCard.jsx  *
* Author: Ammar S.A.A         *
* Output: Each Product Card   *
******************************/

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { BsCartPlusFill } from 'react-icons/bs'

function ProductCard({product}) {
  return (
    <div className="col-md-6 my-4">
      <div className="container">
      <Card style={{width: '100%', height: '70vh'}}>
        <Card.Img variant="top" src={product.thumbnail} style={{width: '100%', height: '40vh'}}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description.length > 50 ?
            `${product.description.substring(0, 55)} ...` : product.description
          }
          </Card.Text>
          <Card.Text> <b>Price: </b>{product.price}$ </Card.Text>
          <Link to={`/product/${product.id}`} className="btn btn-dark float-end"><BsCartPlusFill/></Link>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default ProductCard;
