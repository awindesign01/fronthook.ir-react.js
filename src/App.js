import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { languages } from "./language";
import Layout from "./layout/layout";

function App() {
	const currLangCode = cookies.get("i18next") || "en";
	const currLang = languages.find((l) => l.code === currLangCode);
	const { t } = useTranslation();

	React.useEffect(() => {
		document.body.dir = currLang.dir || "ltr";
		document.title = t("text");
	}, [currLang, t]);

	return (
		<section className="w-full h-full">
			<Layout>
				<main>
					<h2>hello</h2>
				</main>
			</Layout>
		</section>
		// <>
		// 	<h2>{t("text")}</h2>
		// 	<ul>
		// 		{languages.map((i, index) => (
		// 			<li key={index}>
		// 				<button onClick={() => i18next.changeLanguage(i.code)}>{i.name}</button>
		// 			</li>
		// 		))}
		// 	</ul>
		// </>
	);
}

export default App;
