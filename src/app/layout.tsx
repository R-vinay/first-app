// src/app/layout.tsx
"use client";
import React from "react";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
// export const metadata = {
// 	title: "My Next.js App",
// 	description: "Next js app",
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const navlinks = [
		{
			label: "Login",
			link: "/login",
		},
		{
			label: "Register",
			link: "/register",
		},
		{
			label: "Forgot Password",
			link: "/forgot-password",
		},
	];
	const pathname = usePathname();
	return (
		<html lang="en">
			<body>
				<header>
					<div className="flex justify-between bg-blue-600 text-xl text-center py-4 text-white gap-x-3">
						<h1 className="font-sans ">Header</h1>
						<div>
							{navlinks.map(links => {
								const isActive = pathname.startsWith(links.link);
								return (
									<Link className={`m-2 font-extrabold ${isActive ? "text-red-500" : ""}`} href={links.link}>
										{links.label}
									</Link>
								);
							})}
						</div>
					</div>
				</header>
				<main className="h-[90vh] items-center">{children}</main>
				<footer>
					<h1 className="font-sans text-xl text-center py-4 text-white bg-black">Footer</h1>
				</footer>
			</body>
		</html>
	);
};

export default RootLayout;
