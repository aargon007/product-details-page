"use client";
import { Disclosure } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import {
	FaShopify,
	FaShoppingCart,
	FaRegHeart,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";

const NavBar = () => {
	const pathname = usePathname();

	const menuList = [
		{ name: <FaRegHeart />, href: "/wishlist", current: false },
		{ name: <FaShoppingCart />, href: "/cart", current: false },
		{ name: "Login", href: "/login", current: false },
	];

	return (
		<Disclosure as="nav" className="">
			{({ open }) => (
				<>
					<div className="mx-auto px-5 md:px-12 lg:px-28 md:shadow-lg shadow-md">
						<div className="relative flex h-16 items-center justify-between">
							{/* Mobile menu button*/}
							<div className="absolute inset-y-0 right-0 flex items-center md:hidden">
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-700 hover:text-white outline-none">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<HiX className="block h-6 w-6" aria-hidden="true" />
									) : (
										<HiMenu className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							{/* top navigation section  */}
							<div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
								<div>
									<h1 className="text-2xl font-semibold flex items-center gap-2">
										<FaShopify></FaShopify> <span>Arg Shop</span>
									</h1>
								</div>
							</div>
							{/* category navigation section  */}
							<div className="hidden md:ml-6 md:block">
								<div className="flex space-x-4">
									<Link
										className={pathname === "/" ? "active" : "default"}
										href="/"
									>
										Products
									</Link>
								</div>
							</div>
							{/* main navigation section  */}
							<div className="flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="hidden md:ml-6 md:block">
									<div className="flex items-center gap-6">
										<SearchBar />
										{menuList?.map((link, index) => {
											return (
												<Link
													className={
														pathname === link.href ? "active" : "default"
													}
													href={link.href}
													key={index}
												>
													{link.name}
												</Link>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
                    {/* mobile device menu  */}
					<Disclosure.Panel className="md:hidden">
						{({ close }) => (
							<div className="space-y-2 px-2 pb-5 mt-3">
								<Link
									className={
										pathname === "/" ? "active py-2 rounded-md hover:bg-gray-100" : "default"
									}
									href="/"
								>
									Products
								</Link>
								<Link
									className={pathname === "/wishlist" ? "active" : "default"}
									href="/wishlist"
								>
									My Wishlist <FaRegHeart className="inline ml-2" />
								</Link>
								<Link
									className={pathname === "/cart" ? "active" : "default"}
									href="/cart"
								>
									<span>My Cart</span>{" "}
									<FaShoppingCart className="inline ml-2" />
								</Link>
								<Link
									className={pathname === "/login" ? "active" : "default"}
									href="/login"
								>
									Login
								</Link>
							</div>
						)}
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default NavBar;
