import React from "react";
import Logo from "../Assets/Icons/fh-logo.svg";
import { NavLink } from "react-router-dom";
import { FiUser, FiShoppingCart, FiSun, FiMoon } from "react-icons/fi";
import { IoLanguage } from "react-icons/io5";
import { languages } from "../language";
import i18next from "i18next";
import UseDarkMode from "../hooks/theme/useDarkMode";
import { useTranslation } from "react-i18next";

const Header = () => {
	const [isTheme, setIsTheme] = React.useState(true);
	const [theme, setTheme] = UseDarkMode();
	const { t } = useTranslation();

	const NavigationsLink = [
		{ name: t("home"), path: "/", exact: "true" },
		{ name: t("courses"), path: "/courses" },
		{ name: t("blog"), path: "/blog" },
		{ name: t("about-us"), path: "/about-us" },
	];

	const activeStyle = {
		transitionProperty: "all",
		transitionDuration: "150ms",
		backgroundColor: "rgb(126 ,34 ,206)",
		color: "#fff",
	};

	return (
		<header className="fixed top-0 left-0 mx-auto w-full h-16 bg-white dark:bg-main-dark shadow-lg dark:shadow-zinc-700 z-[99]">
			<nav className="mx-auto w-[98%] xl:w-[1170px] h-full bg-transparent flex">
				<nav className="w-1/2 h-full flex justify-start items-center">
					<div className="sm:ml-4 ltr:mr-4 w-7 h-7 grid place-items-center">
						<NavLink to="/">
							<img src={Logo} alt="logo site" className="sm:w-10" />
						</NavLink>
					</div>
					<div className="hidden sm:block w-auto h-full">
						<ul className="h-full flex items-center justify-between">
							{NavigationsLink.map((e) => (
								<li className="mr-2 w-20 h-8 grid place-items-center" key={e.path}>
									<NavLink
										to={e.path}
										exact={e.exact}
										style={({ isActive }) => (isActive ? activeStyle : undefined)}
										className="NavLink rounded-md w-full h-full bg-white hover:bg-purple-700 dark:hover:bg-purple-700 dark:bg-main-dark flex justify-center items-center text-md font-bold text-gray-500 hover:text-white dark:text-white z-20"
									>
										{e.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</nav>
				<nav className="w-1/2 h-full flex justify-end items-center">
					<div className="dropdown relative ml-2 h-1/2 w-8 flex justify-center items-center group">
						<button className="w-full h-[80%] bg-white dark:bg-main-dark grid place-items-center">
							<IoLanguage className="text-xl text-purple-700" />
						</button>
						<nav
							className="hidden w-20 h-auto absolute top-full left-0 opacity-0 invisible bg-white dark:bg-main-dark transition-all border-2 dark:border-zinc-700 rounded-md transform group-focus-within:block group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-2"
							tabindex="0"
						>
							{languages.map((i) => (
								<button
									key={i.code}
									className="my-2 w-full h-full text-gray-500 dark:text-gray-300"
									onClick={() => {
										i18next.changeLanguage(i.code);
									}}
								>
									{i.name}
								</button>
							))}
						</nav>
					</div>
					<div className="h-6 w-10 flex">
						<NavLink to="#">
							<button
								onClick={() => {
									setIsTheme(!isTheme);
									setTheme(theme);
								}}
								className="h-full w-full"
							>
								{!isTheme ? (
									<FiSun className="w-full h-full text-purple-700" />
								) : (
									<FiMoon className="w-full h-full text-purple-700" />
								)}
							</button>
						</NavLink>
					</div>
					<div className="h-6 w-10 flex justify-center">
						<NavLink to="/shoping-cart">
							<FiShoppingCart className="w-full h-full text-purple-700" />
							<div className="w-5 h-5 relative bottom-8 left-3 bg-red-500 rounded-full grid place-items-center text-sm text-white">
								0
							</div>
						</NavLink>
					</div>
					<div className="hidden sm:block h-6 w-10">
						<NavLink to="/account">
							<FiUser className="w-full h-full text-purple-700" />
						</NavLink>
					</div>
				</nav>
			</nav>
		</header>
	);
};

export default Header;
