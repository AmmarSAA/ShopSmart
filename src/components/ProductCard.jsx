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
      <Card>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}
          </Card.Text>
          <Link to={`/product/${product.id}`} className="btn btn-dark float-end"><BsCartPlusFill/></Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
