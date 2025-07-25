import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="w-full h-dvh flex flex-col items-center justify-center bg-[#FFF8F1] text-[#3F3F46]">
			<h1 className="text-xl sm:text-2xl font-bold">
				Something went wrong
			</h1>
			<h1 className="text-lg sm:text-xl font-bold">404 | Bad request</h1>
			<Link
				className="underline underline-offset-2 hover:text-[#FB923C]"
				to={"/"}
			>
				Home
			</Link>
		</div>
	);
};

export default Error;
