import React from "react";
// import { useTranslation } from "react-i18next";
// import cookies from "js-cookie";
// import { languages } from "./language";
import Layout from "./layout/layout";
import MainRoutes from "./routes/mainRoutes";

function App() {
	// const currLangCode = cookies.get("i18next") || "en";
	// const currLang = languages.find((l) => l.code === currLangCode);
	// const { t } = useTranslation();

	// React.useEffect(() => {
	// 	document.body.dir = currLang.dir || "ltr";
	// 	document.title = t("text");
	// }, [currLang, t]);

	return (
		<section>
			<Layout>
				<main className="mt-16 mx-auto w-[98%] xl:w-[1170px]">
					<MainRoutes />
				</main>
			</Layout>
		</section>
	);
}

export default App;
