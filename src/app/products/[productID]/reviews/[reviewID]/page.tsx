import React from "react";
import { notFound } from "next/navigation";

import { Metadata } from "next";
type Params = {
	params: {
		reviewID: string;
		productID: string;
	};
};
function getRandomInt(count: number) {
	return Math.floor(Math.random() * count);
}
export const generateMetadata = ({ params }: Params): Metadata => {
	return {
		// title: `Review ${params.reviewID}`,
		title: {
			absolute: `Review ${params.reviewID}`,
		},
	};
};

const ReviewPage = ({ params }: Params) => {
	const random = getRandomInt(2);
	if (random === 1) {
		throw new Error("Error loading review");
	}
	if (parseInt(params.reviewID) > 1000) {
		notFound();
	}
	return (
		<div>
			Review {params.reviewID} of product {params.productID}{" "}
		</div>
	);
};

export default ReviewPage;
