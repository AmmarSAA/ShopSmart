/**********************************
* File Name: CaategoryCard.jsx 	  *
* Author: Ammar S.A.A 	      	  *
* Output: Category Card Component *
**********************************/

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <div className="col-md-4 my-3">
      <Link
        className="text-decoration-none"
        to={`/products/category/${category}`}
      >
        <Card>
          <Card.Body>
            <Card.Title>{category.toUpperCase()}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default CategoryCard;
