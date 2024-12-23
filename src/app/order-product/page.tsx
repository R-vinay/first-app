"use client";
import React from "react";
import { useRouter } from "next/navigation";
const OrderProduct = () => {
	const router = useRouter();
	const handleClick = () => {
		console.log("placing your order");
		router.push("/");
		router.replace("/");
		router.back(); //go back to prev page
		router.forward(); // navigate to the next page
	};
	return (
		<div className="flex justify-center items-center">
			<button className="m-4 bg-blue-800 text-white font-sans p-2 rounded-sm" onClick={handleClick}>
				Place Order
			</button>
		</div>
	);
};

export default OrderProduct;
