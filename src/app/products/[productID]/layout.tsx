// src/app/layout.tsx
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: {
		absolute: "",
		default: "Explore Products", //applied as default if child components don't have a title
		template: "%s | Products",
	},
	description: "Next js app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex items-center justify-center mt-4 py-4 h-[90vh]">
			{children}
			<br />
			<div>Featured products</div>
		</div>
	);
};

export default RootLayout;
