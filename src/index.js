import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LangDet from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
	.use(initReactI18next)
	.use(LangDet)
	.use(HttpApi)
	.init({
		fallbackLng: "fa",
		detection: {
			order: ["path", "cookie", "localStorage", "subdomain"],
			caches: ["cookie"],
		},
		backend: {
			loadPath: "/locales/{{lng}}/translaton.json",
		},
	});

// ---
const loadingMarkUp = (
	<div>
		<h2>loading ...</h2>
	</div>
);
// ---

ReactDOM.render(
	<Suspense fallback={loadingMarkUp}>
		<App />
	</Suspense>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();