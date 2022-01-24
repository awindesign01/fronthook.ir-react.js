import React from "react";
import { useTranslation } from "react-i18next";
import { BsClockHistory } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import imgReact from "../../Assets/ProductsImage/React.svg";
import imgJS from "../../Assets/ProductsImage/javascript.svg";
import imgGit from "../../Assets/ProductsImage/git.svg";
import imgFlexGrid from "../../Assets/ProductsImage/flex-grid.svg";
import imgVSCode from "../../Assets/ProductsImage/vs-code.png";
import imgHC from "../../Assets/ProductsImage/html-css.png";
import AOS from "aos";

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
			dataAosDelay: "300",
			dataAosEasing: "ease",
		},
		{
			name: t("name_course_3"),
			totalTimeLearn: t("totalTimeLearn_3"),
			priceCourse: t("priceCours_3"),
			imageCourse: imgGit,
			dataAos: "fade-up",
			dataAosDelay: "600",
			dataAosEasing: "ease",
		},
		{
			name: t("name_course_4"),
			totalTimeLearn: t("totalTimeLearn_4"),
			priceCourse: t("priceCours_4"),
			imageCourse: imgFlexGrid,
			dataAos: "fade-up",
			dataAosDelay: "900",
			dataAosEasing: "ease",
		},
		{
			name: t("name_course_5"),
			totalTimeLearn: t("totalTimeLearn_5"),
			priceCourse: t("priceCours_5"),
			imageCourse: imgVSCode,
			dataAos: "fade-up",
			dataAosDelay: "1200",
			dataAosEasing: "ease",
		},
		{
			name: t("name_course_6"),
			totalTimeLearn: t("totalTimeLearn_6"),
			priceCourse: t("priceCours_6"),
			imageCourse: imgHC,
			dataAos: "fade-up",
			dataAosDelay: "1500",
			dataAosEasing: "ease",
		},
	];
	return (
		<section className="w-full h-auto flex flex-row flex-wrap justify-between">
			{ProductsInformation.map((p) => (
				<div
					className="py-1 mb-6 w-full h-auto sm:w-[48%] xl:w-[30%] bg-white dark:bg-subsidiary-dark rounded-xl shadow-lg dark:shadow-zinc-700"
					data-aos={`${p.dataAos}`}
					data-aos-easing={p.dataAosEasing}
					data-aos-delay={p.dataAosDelay}
				>
					<div className="mx-auto mb-1 w-[98%] h-60 rounded-lg">
						<img
							src={p.imageCourse}
							alt={p.imageCourse}
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>
					<div className="mx-auto mt-1 w-11/12 h-60 rounded-lg text-gray-700 dark:text-gray-300 font-bold flex flex-col justify-between">
						<div className="w-full h-[20%] flex items-center">
							<h1 className="text-[18px] dark:text-white rtl:text-right ltr:text-left">{p.name}</h1>
						</div>
						<div className="w-full h-[30%] flex rtl:flex-col ltr:flex-col-reverse justify-between items-start text-gray-500 dark:text-gray-400">
							<div className="flex items-center">
								<BsClockHistory className="text-2xl rtl:ml-2 ltr:mr-2 text-main-site-color " />
								<p>
									{t("time")} :<span> </span>
									{p.totalTimeLearn}
									<span> </span>
									{t("hours")}
								</p>
							</div>
							<div className="flex rtl:flex-row ltr:flex-row-reverse items-center text-main-site-color dark:text-purple-600">
								<a href="#">{t("information_courses")}</a>
								<FiArrowLeft className="text-xl rtl:mr-2 ltr:ml-2 transform transition-all rtl:hover:-translate-x-2 ltr:hover:translate-x-2" />
							</div>
						</div>
						<div className="w-full h-[30%] flex rtl:flex-row ltr:flex-row-reverse justify-between items-center">
							<div>
								<button className="w-36 h-12 text-white font-bold bg-gradient-to-tl from-purple-900 to-purple-700 rounded-lg">
									{t("course_registration")}
								</button>
							</div>
							<div className="w-auto flex flex-row-reverse">
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
