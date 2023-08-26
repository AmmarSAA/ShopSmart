/********************************
 * File Name: Checkout.jsx 		*
 * Author: Ammar S.A.A 			*
 * Output: Checkout Component 	*
 ********************************/

import React from "react";
import "./checkout.css";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../Context/Login-Context/login-context";
import { GlobalContext } from "../Context/context";
import axios from "axios";
import { SERVER } from "../App";

export default function Checkout() {
	const { loginState } = useContext(LoginContext);
	let { state } = useContext(GlobalContext);

	const [customerName, setName] = useState("");
	const [message, setMessage] = useState("");
	const [customerContact, setContact] = useState("");
	const [customerAddress, setAddress] = useState("");
	const [items, setitems] = useState([]);
	const [totalBill, settotalBill] = useState("");
	const [customerEmail, setCustomerEmail] = useState("");
	const [status, setstatus] = useState("pending");

	const setCustomerName = (e) => {
		setName(e.target.value);
	};

	const setCustomerAddress = (e) => {
		setAddress(e.target.value);
	};

	const setCustomerContact = (e) => {
		setContact(e.target.value);
	};

	const CustomerEmail = (e) => {
		setCustomerEmail(e.target.value);
	};

	useEffect(() => {
		if (state.cart) {
			setitems(state.cart);
			calculateTotalBill();
		}
	}, [state.cart]);

	const calculateTotalBill = () => {
		const total = state.cart.reduce(
			(acc, item) => acc + item.price * item.count,
			0
		);
		settotalBill(total);
	};

	useEffect(() => {
		calculateTotalBill(); // Calculate the total when the cart changes
	}, [state.cart]);
	const placeOrder = async () => {
		// Prepare the payload
		const payload = {
			items: items,
			totalBill: totalBill,
			customerAddress: customerAddress,
			customerContact: customerContact,
			customerName: customerName,
			customerEmail: customerEmail,
			status: status,
		};

		const userResponse = await axios.get(
			`${SERVER}api/users/getUserByEmail?email=${customerEmail}`
		);
		const userData = userResponse.data.user;
		{
			userData
				? setName(userData.name)
				: setMessage("User not Found Login First");
		}

		try {
			// Fetch user data
			// Make the POST request to create an order
			const orderResponse = await axios.post(
				`${SERVER}api/order/createOrder`,
				payload
			);
			setMessage(orderResponse.data.message);
			console.log(orderResponse.data);
		} catch (error) {
			console.error(error);
			alert("An error occurred while placing the order.");
		}
	};

	return (
		<>
			<form className="form3  justify-content-center align-items-center text-center">
				{message ? (
					<h4 className="alert alert-danger text-center text-capitalize">
						{message}
					</h4>
				) : null}

				<div className="form-title3">
					<span className="span3">enter details for placing</span>
				</div>
				<div className="title-2">
					<span className="span3">Order</span>
				</div>
				<div className="input-container3">
					<input
						className="input-mail3 input3"
						type="email"
						placeholder="Enter email"
						required={true}
						value={customerEmail}
						onChange={CustomerEmail}
					/>
					{/* <span> </span> */}
				</div>
				<div className="input-container3">
					<input
						className="input-cntct3 input3"
						type="number"
						placeholder="Enter Contact No."
						required={true}
						value={customerContact}
						onChange={setCustomerContact}
					/>
				</div>
				{/* <section className="bg-stars3">
					<span className="star3" />
					<span className="star3" />
					<span className="star3" />
					<span className="star3" />
				</section> */}
				<div className="input-container3">
					<input
						className="input-pwd3 input3"
						type="text"
						placeholder="Enter Address"
						required={true}
						value={customerAddress}
						onChange={setCustomerAddress}
					/>
				</div>
				<button type="submit" className="submit3 button3" onClick={placeOrder}>
					<span className="sign-text3 span3">Place Order</span>
				</button>
				<p class="signup-link3">
					Note: Cash On Delivery
					{/* <a href="" class="up3 a3">Sign up!</a> */}
				</p>
			</form >
		</>
	);
}
