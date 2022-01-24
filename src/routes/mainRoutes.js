import React from "react";
import { Route, Routes } from "react-router-dom";
import PageHome from "../pages/pageHome";
import PageCourses from "../pages/pageCourses";
import PageBlog from "../pages/pageBlog";
import PageAboutUs from "../pages/pageAboutUs";
import PageCart from "../pages/pageCart";
import PageAccount from "../pages/pageAccount";

const MainRoutes = () => {
	return (
		<Routes>
			<Route index path="/" element={<PageHome />} />
			<Route path="/courses" element={<PageCourses />} />
			<Route path="/blog" element={<PageBlog />} />
			<Route path="/about-us" element={<PageAboutUs />} />
			<Route path="/shoping-cart" element={<PageCart />} />
			<Route path="/account" element={<PageAccount />} />
		</Routes>
	);
};

export default MainRoutes;
