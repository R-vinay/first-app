"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	useEffect(() => {
		// Log the error to the console (or send to monitoring tools)
		console.error(error);
	}, [error]);

	return (
		<div>
			<h1>Something went wrong!</h1>
			<p>{error.message}</p>
			<button onClick={reset}>Retry</button>
		</div>
	);
}
