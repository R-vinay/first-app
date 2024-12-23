import React from "react";
import { Metadata } from "next";
type Params = {
	params: {
		productID: string;
	};
};
export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
	const title = await new Promise(resolve => resolve(`Product ${params.productID}`));
	return {
		title: `${title}`,
	};
};

const ProductDetails = ({ params }: Params) => {
	return <div>Product details of product {params.productID}</div>;
};

export default ProductDetails;
