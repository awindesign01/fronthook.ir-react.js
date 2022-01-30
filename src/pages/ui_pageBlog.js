import React from "react";
import { useTranslation } from "react-i18next";

const PageBlog = () => {
	const { t } = useTranslation();
	return (
		<div className="w-full h-auto sm:h-[47vh] xl:h-[44.5vh]">
			<p className="text-gray-500 dark:text-white">{t("blog_title")}</p>
		</div>
	);
};

export default PageBlog;
