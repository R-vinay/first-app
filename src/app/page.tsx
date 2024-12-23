import Link from "next/link";
import React from "react";

const Home = () => {
	return (
		<div>
			Home page<Link href={"/about"}>About</Link>
			<Link href={"/contact"}>Contact</Link>
		</div>
	);
};

export default Home;
