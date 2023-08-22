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
          <Card.Body style={{backgroundImage: 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%)', color: '#fff'}}>
            <Card.Title>{category.toUpperCase()}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default CategoryCard;
