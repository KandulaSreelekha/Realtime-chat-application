import React from "react";
import { FaPenAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="w-full min-h-32 shadow-inner shadow-[#FB923C]/20 flex flex-col justify-between items-start px-4 py-8 bg-[#FFF8F1] text-[#3F3F46]">
			<h1 className="font-bold text-lg flex items-center gap-4">
				<span>Chat Application</span>
				<FaPenAlt fontSize={16} />
			</h1>

			<div className="flex items-center justify-start w-full p-4 flex-wrap">
				{/* Contact Section */}
				<div className="flex flex-col min-w-[280px] w-[33%] my-3">
					<h1 className="font-semibold mb-2">Contact</h1>
					<span>Sreelekha</span>
					<span>Kurnool, Andhra Pradesh</span>
					<span>Pincode - 518002</span>
					<span>
						<Link
							to={"mailto:contact.kandulasreelekha@gmail.com"}
							target="_blank"
							className="hover:text-[#FB923C] hover:underline"
						>
							contact.kandulasreelekha@gmail.com
						</Link>
					</span>
				</div>

				{/* Pages Section */}
				<div className="flex flex-col min-w-[280px] w-[33%] my-3">
					<h1 className="font-semibold mb-2">Pages</h1>
					<span>
						<Link
							className="hover:text-[#FB923C] hover:underline"
							to={"/"}
						>
							Chat App
						</Link>
					</span>
					<span>
						<Link
							className="hover:text-[#FB923C] hover:underline"
							to={"/signin"}
						>
							SignIn
						</Link>
					</span>
					<span>
						<Link
							className="hover:text-[#FB923C] hover:underline"
							to={"/signup"}
						>
							SignUp
						</Link>
					</span>
					<span>
						<Link
							className="hover:text-[#FB923C] hover:underline"
							to={"/home"}
						>
							Home
						</Link>
					</span>
				</div>

				{/* Links Section */}
				<div className="flex flex-col min-w-[280px] w-[33%] my-3">
					<h1 className="font-semibold mb-2">Links</h1>
					<span>
						<a
							className="hover:text-[#FB923C] hover:underline"
							href="https://www.linkedin.com/in/sreelekha06/"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>
					</span>
					<span>
						<a
							className="hover:text-[#FB923C] hover:underline"
							href="https://github.com/KandulaSreelekha/"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
					</span>
					<span>
						<a
							className="hover:text-[#FB923C] hover:underline"
							href="mailto:contact.akashdeep023@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							E-Mail
						</a>
					</span>
				</div>
			</div>

			<h1 className="font-bold mt-2">
				All rights reserved 2025 &copy; ChatApp
			</h1>
		</div>
	);
};

export default Footer;
