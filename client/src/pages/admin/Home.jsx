/**********************************
* File Name: Home.jsx 		        *
* Author: Ammar S.A.A 			      *
* Output: Sample Admin Dashboard 	*
**********************************/

import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../../Context/Login-Context/login-context";
import "./card9.css";
import axios from "axios";
import { SERVER } from "../../App";
import { Link } from "react-router-dom";
//import Chart from "chart.js/auto";

function AdminHome() {
  const { state } = useContext(LoginContext);
  // const productSalesChartRef = useRef(null);
  // const monthlyRevenueChartRef = useRef(null);

  // useEffect(() => {
  //   // Sample data for the charts
  //   const productSalesData = {
  //     labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
  //     datasets: [
  //       {
  //         label: "Sales",
  //         data: [120, 200, 150, 80, 250],
  //         backgroundColor: "rgba(54, 162, 235, 0.6)",
  //         borderColor: "rgba(54, 162, 235, 1)",
  //         borderWidth: 1,
  //       },
  //     ],
  //   };

  //   const monthlyRevenueData = {
  //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  //     datasets: [
  //       {
  //         label: "Revenue",
  //         data: [1500, 1800, 2300, 2100, 2700, 3200],
  //         fill: false,
  //         borderColor: "rgba(75, 192, 192, 1)",
  //         borderWidth: 2,
  //       },
  //     ],
  //   };

  //   // Create the charts
  //   if (productSalesChartRef.current && monthlyRevenueChartRef.current) {
  //     const productSalesChart = new Chart(productSalesChartRef.current, {
  //       type: "bar",
  //       data: productSalesData,
  //       options: {
  //         scales: {
  //           y: { beginAtZero: true },
  //         },
  //       },
  //     });

  //     const monthlyRevenueChart = new Chart(monthlyRevenueChartRef.current, {
  //       type: "line",
  //       data: monthlyRevenueData,
  //       options: {
  //         scales: {
  //           y: { beginAtZero: true },
  //         },
  //       },
  //     });

  //     // Return a cleanup function that destroys the Chart instances
  //     return () => {
  //       productSalesChart.destroy();
  //       monthlyRevenueChart.destroy();
  //     };
  //   }
  // }, []);

  const [users, setUsers] = useState([]);
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  let userCount;
  let productCount;
  let orderCount;
  let brandCount;
  let categoryCount;

  //Count Users
  useEffect(() => {
    axios
      .get(`${SERVER}api/users/getUsers`)
      .then((json) => setUsers(json.data.users))
      .catch((err) => console.log(err));
  }, []);
  // console.log(users);
  userCount = users?.length ?? 0;
  // console.log(userCount);

  // //Count Products
  useEffect(() => {
    axios
      .get(`${SERVER}api/product/getProduct`)
      .then((json) => setProduct(json.data.products))
      .catch((err) => console.log(err));
  }, []);
  productCount = product?.length ?? 0;

  //Count Orders
  useEffect(() => {
    axios
      .get(`${SERVER}api/order/getorder`)
      .then((json) => setOrder(json.data.orders))
      .catch((err) => console.log(err));
  }, []);
  orderCount = order?.length ?? 0;

  //Count Brands
  useEffect(() => {
    axios
      .get(`${SERVER}api/brand/getBrand`)
      .then((json) => setBrand(json.data.brands))
      .catch((err) => console.log(err));
  }, []);
  brandCount = brand?.length ?? 0;

  //Count Categories
  useEffect(() => {
    axios
      .get(`${SERVER}api/category/getCategory`)
      .then((json) => setCategory(json.data.categories))
      .catch((err) => console.log(err));
  }, []);
  categoryCount = category?.length ?? 0;

  return (
    <div className="container container-fluid justify-content-center align-items-center">
      <h2 className="text-capitalize pb-1 text-center mt-1">
        {state.userName}&apos;s {state.userRole} Dashboard
      </h2>

      {/* Cards Start */}
      <div className="row m-2">

        {/* User Card */}
        <div className="col-auto">
          <div className="card9 text-decoration-none m-1 bg-primary">
            <div className="card__img9">
              <img src="./images/users.png" height="220vh" alt="Users" />
            </div>
            <div className="card__subtitle9">Total Users: {userCount}</div>
            <div className="card__wrapper9">
              <div className="card__title9">Details</div>
              <Link to="/admin/users">
                <div className="card__icon9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    style={{
                      userSelect: "none",
                      width: "100%",
                      height: "100%",
                      display: "inline-block",
                      fill: "rgb(224, 223, 220)",
                      flexShrink: 0,
                      cursor: "auto",
                    }}
                    color="rgb(224, 223, 220)"
                  >
                    <g color="rgb(224, 223, 220)">
                      <circle cx={128} cy={128} r={96} opacity="0.2" />
                      <circle
                        cx={128}
                        cy={128}
                        r={96}
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeMiterlimit={10}
                        strokeWidth={16}
                      />
                      <polyline
                        points="134.1 161.9 168 128 134.1 94.1"
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                      />
                      <line
                        x1={88}
                        y1={128}
                        x2={168}
                        y2={128}
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                      />
                    </g>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Card */}
        <div className="col-auto">
          <div className="card9 text-decoration-none m-1 bg-warning">
            <div className="card__img9">
              <img src="./images/product.png" height="220vh" alt="Products" />
            </div>
            <div className="card__subtitle9">
              Total Products: {productCount}
            </div>
            <div className="card__wrapper9">
              <div className="card__title9">Details</div>
              <Link to="/admin/product">
                <div className="card__icon9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    style={{
                      userSelect: "none",
                      width: "100%",
                      height: "100%",
                      display: "inline-block",
                      fill: "rgb(224, 223, 220)",
                      flexShrink: 0,
                      cursor: "auto",
                    }}
                    color="rgb(224, 223, 220)"
                  >
                    <g color="rgb(224, 223, 220)">
                      <circle cx={128} cy={128} r={96} opacity="0.2" />
                      <circle
                        cx={128}
                        cy={128}
                        r={96}
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeMiterlimit={10}
                        strokeWidth={16}
                      />
                      <polyline
                        points="134.1 161.9 168 128 134.1 94.1"
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                      />
                      <line
                        x1={88}
                        y1={128}
                        x2={168}
                        y2={128}
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                      />
                    </g>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Order Card */}
        <div className="col-auto">
          <div className="card9 text-decoration-none m-1 bg-info">
            <div className="card__img9">
              <img src="./images/order.png" height="220vh" alt="Orders" />
            </div>
            <div className="card__subtitle9">Total Orders: {orderCount}</div>
            <div className="card__wrapper9">
              <div className="card__title9">Details</div>
              <Link to="/admin/order">
                <div className="card__icon9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    style={{
                      userSelect: "none",
                      width: "100%",
                      height: "100%",
                      display: "inline-block",
                      fill: "rgb(224, 223, 220)",
                      flexShrink: 0,
                      cursor: "auto",
                    }}
                    color="rgb(224, 223, 220)"
                  >
                    <g color="rgb(224, 223, 220)">
                      <circle cx={128} cy={128} r={96} opacity="0.2" />
                      <circle
                        cx={128}
                        cy={128}
                        r={96}
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeMiterlimit={10}
                        strokeWidth={16}
                      />
                      <polyline
                        points="134.1 161.9 168 128 134.1 94.1"
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                      />
                      <line
                        x1={88}
                        y1={128}
                        x2={168}
                        y2={128}
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                      />
                    </g>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Category Card */}
        <div className="col-auto">
          <div className="card9 text-decoration-none m-1 bg-success">
            <div className="card__img9">
              <img src="./images/category.png" height="220vh" alt="Categories" />
            </div>
            <div className="card__subtitle9">
              Total Categories: {categoryCount}
            </div>
            <div className="card__wrapper9">
              <div className="card__title9">Details</div>
              <Link to="/admin/category">
                <div className="card__icon9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    style={{
                      userSelect: "none",
                      width: "100%",
                      height: "100%",
                      display: "inline-block",
                      fill: "rgb(224, 223, 220)",
                      flexShrink: 0,
                      cursor: "auto",
                    }}
                    color="rgb(224, 223, 220)"
                  >
                    <g color="rgb(224, 223, 220)">
                      <circle cx={128} cy={128} r={96} opacity="0.2" />
                      <circle
                        cx={128}
                        cy={128}
                        r={96}
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeMiterlimit={10}
                        strokeWidth={16}
                      />
                      <polyline
                        points="134.1 161.9 168 128 134.1 94.1"
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                      />
                      <line
                        x1={88}
                        y1={128}
                        x2={168}
                        y2={128}
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                      />
                    </g>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Brand Card */}
        <div className="col-auto">
          <div className="card9 text-decoration-none m-1 bg-danger">
            <div className="card__img9">
              <img src="./images/brand.png" height="220vh" alt="Brands" />
            </div>
            <div className="card__subtitle9">
              Total Brands: {brandCount}
            </div>
            <div className="card__wrapper9">
              <div className="card__title9">Details</div>
              <Link to="/admin/brand">
                <div className="card__icon9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    style={{
                      userSelect: "none",
                      width: "100%",
                      height: "100%",
                      display: "inline-block",
                      fill: "rgb(224, 223, 220)",
                      flexShrink: 0,
                      cursor: "auto",
                    }}
                    color="rgb(224, 223, 220)"
                  >
                    <g color="rgb(224, 223, 220)">
                      <circle cx={128} cy={128} r={96} opacity="0.2" />
                      <circle
                        cx={128}
                        cy={128}
                        r={96}
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeMiterlimit={10}
                        strokeWidth={16}
                      />
                      <polyline
                        points="134.1 161.9 168 128 134.1 94.1"
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                      />
                      <line
                        x1={88}
                        y1={128}
                        x2={168}
                        y2={128}
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                      />
                    </g>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
      {/* Cards End */}

      {/* <div className="col-9 p-4">
        <div className="row">
          <div className="col-6">
            <canvas
              ref={productSalesChartRef}
              width="400"
              height="300"
            ></canvas>
          </div>
          <div className="col-6">
            <canvas
              ref={monthlyRevenueChartRef}
              width="400"
              height="300"
            ></canvas>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AdminHome;
