import React from "react";
import { useTranslation } from "react-i18next";
import { BsClockHistory } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import imgReact from "../Assets/ProductsImage/React.svg";
import imgJS from "../Assets/ProductsImage/javascript.svg";
import imgGit from "../Assets/ProductsImage/git.svg";
import imgFlexGrid from "../Assets/ProductsImage/flex-grid.svg";
import imgVSCode from "../Assets/ProductsImage/vs-code.png";
import imgHC from "../Assets/ProductsImage/html-css.png";
import AOS from "aos";
import Button from "@mui/material/Button";

const Products = () => {
	const { t } = useTranslation();
	AOS.init();

	const ProductsInformation = [
		{
			name: t("name_course_1"),
			totalTimeLearn: t("totalTimeLearn_1"),
			priceCourse: t("priceCours_1"),
			imageCourse: imgReact,
			dataAos: "fade-up",
			dataAosDelay: "0",
			dataAosEasing: "ease",
		},
		{
			name: t("name_course_2"),
			totalTimeLearn: t("totalTimeLearn_2"),
			priceCourse: t("priceCours_2"),
			imageCourse: imgJS,
			dataAos: "fade-up",
			dataAosDelay: "100",
			dataAosEasing: "ease",
		},
		{
			name: t("name_course_3"),
			totalTimeLearn: t("totalTimeLearn_3"),
			priceCourse: t("priceCours_3"),
			imageCourse: imgGit,
			dataAos: "fade-up",
			dataAosDelay: "200",
			dataAosEasing: "ease",
		},
		{
			name: t("name_course_4"),
			totalTimeLearn: t("totalTimeLearn_4"),
			priceCourse: t("priceCours_4"),
			imageCourse: imgFlexGrid,
			dataAos: "fade-up",
			dataAosDelay: "300",
			dataAosEasing: "ease",
		},
		{
			name: t("name_course_5"),
			totalTimeLearn: t("totalTimeLearn_5"),
			priceCourse: t("priceCours_5"),
			imageCourse: imgVSCode,
			dataAos: "fade-up",
			dataAosDelay: "400",
			dataAosEasing: "ease",
		},
		{
			name: t("name_course_6"),
			totalTimeLearn: t("totalTimeLearn_6"),
			priceCourse: t("priceCours_6"),
			imageCourse: imgHC,
			dataAos: "fade-up",
			dataAosDelay: "500",
			dataAosEasing: "ease",
		},
	];

	return (
		<section className="w-full h-auto flex flex-row flex-wrap justify-between">
			{ProductsInformation.map((p) => (
				<div
					className="mb-6 w-full h-auto lg:h-44 xl:h-52 sm:w-[48%] bg-white dark:bg-subsidiary-dark border-b-4 border-solid border-purple-500 rounded-xl shadow-lg dark:shadow-zinc-700 lg:flex z-0"
					data-aos={`${p.dataAos}`}
					data-aos-easing={p.dataAosEasing}
					data-aos-delay={p.dataAosDelay}
					key={p.name}
				>
					<div className="mx-auto mb-1 lg:mb-0 w-full lg:w-1/2 h-60 lg:h-full rounded-lg">
						<img
							src={p.imageCourse}
							alt={p.imageCourse}
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="lg:px-2 mx-auto mt-1 w-11/12 lg:w-1/2 h-60 lg:h-44 xl:h-52 rounded-lg text-gray-700 dark:text-gray-300 font-bold flex flex-col justify-between">
						<div className="w-full h-[20%] flex items-center">
							<h1 className="text-[18px] lg:text-sm dark:text-white rtl:text-right ltr:text-left">
								{p.name}
							</h1>
						</div>
						<div className="w-full h-[30%] flex rtl:flex-col ltr:flex-col-reverse justify-between items-start text-gray-500 dark:text-gray-400">
							<div className="flex items-center">
								<BsClockHistory className="text-2xl lg:text-xl rtl:ml-2 ltr:mr-2 text-main-site-color " />
								<p className="lg:text-sm">
									{t("time")} :<span> </span>
									{p.totalTimeLearn}
									<span> </span>
									{t("hours")}
								</p>
							</div>
							<div className="flex lg:text-sm rtl:flex-row ltr:flex-row items-center text-main-site-color dark:text-purple-600 group">
								<a href="#">{t("information_courses")}</a>
								<FiArrowLeft className="text-xl lg:text-lg rtl:mr-2 ltr:ml-2 transform transition-all rtl:group-hover:-translate-x-2 ltr:group-hover:translate-x-2 ltr:rotate-180" />
							</div>
						</div>
						<div className="w-full h-[30%] flex rtl:flex-row ltr:flex-row justify-between items-center">
							<div>
								<Button
									variant="contained"
									className="w-36 lg:w-32 h-12 lg:h-9 lg:text-sm bg-gradient-to-tl from-purple-900 to-purple-700 rounded-lg"
								>
									<p className="text-white lg:text-xs font-bold">{t("course_registration")}</p>
								</Button>
							</div>
							<div className="w-auto lg:text-sm flex flex-row-reverse">
								<p className="rtl:mr-2 ltr:ml-2">{t("symbol_price")}</p>
								<p> {p.priceCourse}</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default Products;
