import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane, FaYoutube, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import img from "../Assets/zarinPale.svg";

const Footer = () => {
	const { t } = useTranslation();

	const iconsLink = [
		{ path: "#", icons: <FiInstagram /> },
		{ path: "#", icons: <FaLinkedin /> },
		{ path: "#", icons: <FaGithub /> },
		{ path: "#", icons: <FaTwitter /> },
		{ path: "#", icons: <FaTelegramPlane /> },
		{ path: "#", icons: <FaYoutube /> },
	];

	return (
		<footer className="pb-8 mb-16 sm:mb-0 border-t-4 border-solid border-purple-500 rounded-tl-lg rounded-tr-lg w-full bg-gray-100 dark:bg-main-dark">
			<div className="mx-auto w-[95%] xl:w-[1170px]">
				<section className="mx-auto w-[95%] sm:w-full h-[92%] sm:flex">
					<div className="w-full h-auto sm:w-4/5">
						<h1 className="my-4 text-sm font-bold text-purple-700">{t("title_footer")}</h1>
						<p className="text-sm text-gray-500 dark:text-gray-400 leading-7">{t("text_footer")}</p>
						<div className="w-full h-auto">
							<ul className="mt-4 flex justify-between items-center">
								{iconsLink.map((i) => (
									<IconButton>
										<li className="text-2xl text-gray-500 dark:text-gray-300">
											{i.icons}
										</li>
									</IconButton>
								))}
							</ul>
						</div>
					</div>
					<div className="mt-4 sm:mr-2 w-full h-auto sm:w-1/5">
						<img src={img} alt="zarin pale img" />
					</div>
				</section>
				<section className="mx-auto mt-2 w-[95%] sm:w-full text-gray-500 dark:text-white">
					<p>{t("version_footer")}</p>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
