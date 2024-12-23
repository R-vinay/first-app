import React from "react";
export const metadata = {
	title: "Auth Page",
	description: "Authentication page",
};
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return <div className="h-[90vh] flex justify-center items-center">{children}</div>;
};

export default AuthLayout;
