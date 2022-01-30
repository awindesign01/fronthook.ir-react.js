import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PageCart = () => {
	const { t } = useTranslation();
	return (
		<div className="w-full h-auto sm:h-[47vh] xl:h-[44.5vh]">
			<div className="px-2 my-1 mx-auto rounded-lg w-full sm:w-3/4 h-10 sm:h-12 bg-red-500 flex justify-start items-center">
				<p className="text-white">{t("cart_non_products")}</p>
			</div>
			<Link to="/courses">
				<div className="px-2 my-1 mx-auto rounded-lg w-full sm:w-3/4 h-10 sm:h-12 bg-purple-500 flex justify-start items-center">
					<p className="text-white">{t("cart_go_products")}</p>
				</div>
			</Link>
		</div>
	);
};

export default PageCart;
