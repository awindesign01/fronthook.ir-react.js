import React from "react";
import Logo from "../Assets/Icons/fh-logo.svg";
import { NavLink } from "react-router-dom";
import { FiUser, FiShoppingCart, FiSun, FiMoon } from "react-icons/fi";
import { NavigationsLink } from "../apis/apis";

const Header = () => {
	const [isTheme, setIsTheme] = React.useState(true);
	const [isLan, setIsLan] = React.useState(true);

	const activeStyle = {
		transitionProperty: "all",
		transitionDuration: "150ms",
		backgroundColor: "rgba(109, 40, 217)",
		color: "#fff",
	};

	return (
		<header className="fixed top-0 left-0 mx-auto w-full h-16 bg-white shadow-lg">
			<nav className="mx-auto w-[98%] xl:w-[1170px] h-full bg-transparent flex">
				<nav className="w-1/2 h-full flex justify-start items-center">
					<div className="sm:ml-4 w-7 h-7 grid place-items-center">
						<NavLink to="/">
							<img src={Logo} alt="logo site" />
						</NavLink>
					</div>
					<div className="hidden sm:block w-auto h-full">
						<ul className="h-full flex items-center justify-between">
							{NavigationsLink.map((e) => (
								<li className="mr-2 w-16 h-8 rounded-md grid place-items-center">
									<NavLink
										to={e.path}
										exact={e.exact}
										style={({ isActive }) => (isActive ? activeStyle : undefined)}
										className="NavLink rounded-lg w-full h-full bg-white flex justify-center items-center text-md text-gray-500 z-20"
									>
										{e.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</nav>
				<nav className="w-1/2 h-full flex justify-end items-center">
					<div className="h-6 w-10 flex">
						<button className="w-full h-full text-gray-500" onClick={() => setIsLan(!isLan)}>
							{isLan ? "fa" : "en"}
						</button>
					</div>
					<div className="h-6 w-10 flex">
						<NavLink to="#">
							<button onClick={() => setIsTheme(!isTheme)} className="h-full w-full">
								{isTheme ? (
									<FiSun className="w-full h-full text-main-site-color" />
								) : (
									<FiMoon className="w-full h-full text-main-site-color" />
								)}
							</button>
						</NavLink>
					</div>
					<div className="h-6 w-10 flex justify-center">
						<NavLink to="/shoping-cart">
							<FiShoppingCart className="w-full h-full text-main-site-color" />
							<div className="w-5 h-5 relative bottom-8 left-3 bg-red-500 rounded-full grid place-items-center text-sm text-white">
								0
							</div>
						</NavLink>
					</div>
					<div className="hidden sm:block h-6 w-10">
						<NavLink to="/account">
							<FiUser className="w-full h-full text-main-site-color" />
						</NavLink>
					</div>
				</nav>
			</nav>
		</header>
	);
};

export default Header;
