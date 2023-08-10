/******************************
* File Name: ProductCard.jsx  *
* Author: Ammar S.A.A         *
* Output: Each Product Card   *
******************************/

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProductCard({product}) {
  return (
    <div className="col-md-4 my-4">
      <div className="container">
      <Card style={{width: '250px', height: '63vh', border:'none', outline:'none',position:'relative'}} className="card-css">
        <Card.Img variant="top" src={product.thumbnail} style={{width: '100%', height: '150px'}}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description.length > 50 ?
            `${product.description.substring(0, 40)} ...` : product.description
          }
          </Card.Text>
          <Card.Text> <b>Price: </b>$ {product.price}</Card.Text>
          <Link to={`/product/${product.id}`} style={{position:'absolute', bottom:'20%',right:'12px'}} className="btn btn-outline-dark float-end">View Details</Link>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default ProductCard;
