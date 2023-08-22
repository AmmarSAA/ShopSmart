/**********************************
* File Name: Home.jsx 		        *
* Author: Ammar S.A.A 			      *
* Output: Sample Admin Dashboard 	*
**********************************/

import React, { useContext, useEffect, useRef } from 'react';
import { LoginContext } from '../../Context/Login-Context/login-context';
import Chart from 'chart.js/auto';

function AdminHome() {
  const { state } = useContext(LoginContext);
  const productSalesChartRef = useRef(null);
  const monthlyRevenueChartRef = useRef(null);

  useEffect(() => {
    // Sample data for the charts
    const productSalesData = {
      labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
      datasets: [
        {
          label: 'Sales',
          data: [120, 200, 150, 80, 250],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };

    const monthlyRevenueData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Revenue',
          data: [1500, 1800, 2300, 2100, 2700, 3200],
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
        },
      ],
    };

    // Create the charts
    if (productSalesChartRef.current && monthlyRevenueChartRef.current) {
      const productSalesChart = new Chart(productSalesChartRef.current, {
        type: 'bar',
        data: productSalesData,
        options: {
          scales: {
            y: { beginAtZero: true },
          },
        },
      });

      const monthlyRevenueChart = new Chart(monthlyRevenueChartRef.current, {
        type: 'line',
        data: monthlyRevenueData,
        options: {
          scales: {
            y: { beginAtZero: true },
          },
        },
      });

      // Return a cleanup function that destroys the Chart instances
      return () => {
        productSalesChart.destroy();
        monthlyRevenueChart.destroy();
      };
    }
  }, []);

  return (
    <div className="container container-fluid">
      <div className="col-md-9 p-4">
        <h2 className='text-capitalize pb-4 text-center'>{state.userName}'s {state.userRole} Dashboard</h2>
        <div className="row">
          <div className="col-md-6">
            <canvas ref={productSalesChartRef} width="400" height="300"></canvas>
          </div>
          <div className="col-md-6">
            <canvas ref={monthlyRevenueChartRef} width="400" height="300"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
