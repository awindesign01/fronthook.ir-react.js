import React from "react";
import { useTranslation } from "react-i18next";
import { FiHome, FiCode, FiUsers, FiUser } from "react-icons/fi";
import { ImBlog } from "react-icons/im";
import { NavLink } from "react-router-dom";

const MenuPhone = () => {
	const { t } = useTranslation();
	const NavLinkApi = [
		{ name: t("courses"), path: "/courses", icon: <FiCode /> },
		{ name: t("blog"), path: "/blog", icon: <ImBlog /> },
		{ name: t("home"), path: "/", icon: <FiHome />, exact: "true" },
		{ name: t("about-us"), path: "/about-us", icon: <FiUsers /> },
		{ name: t("account"), path: "/account", icon: <FiUser /> },
	];
	const activeStyle = {
		position: "relative",
		transitionProperty: "all",
		transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
		transitionDuration: "150ms",
		transform: "translateY(-1.75rem) rotate(45deg)",
		backgroundColor: "rgba(109, 40, 217)",
		color: "#fff",
	};

	return (
		<nav className="sm:hidden fixed bottom-0 left-0 w-full h-16 bg-white dark:bg-main-dark border-t-2 dark:border-zinc-700">
			<nav className="mx-auto w-[98%] h-[98%] bg-white dark:bg-main-dark rounded-tl-lg rounded-tr-lg shadow-lg flex justify-center items-center">
				<ul className="flex w-full h-full justify-between ">
					{NavLinkApi.map((e) => (
						<li
							className="list menu_Phone h-full w-1/6 transition-all flex justify-center items-center"
							key={e.path}
						>
							<NavLink
								to={e.path}
								exact={e.exact}
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
								className="NavLink rounded-lg w-12 h-12 bg-white dark:bg-main-dark flex justify-center items-center text-3xl text-[#733dd8] z-20"
							>
								{e.icon}
							</NavLink>
							<nav className="nav_text fixed bottom-3 z-10">
								<p className="text text-xs text-gray-500 font-bold text-center">{e.name}</p>
							</nav>
						</li>
					))}
				</ul>
			</nav>
		</nav>
	);
};

export default React.memo(MenuPhone);
