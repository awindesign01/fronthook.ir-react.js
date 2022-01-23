import Footer from "./footer";
import Header from "./header";
import MenuPhone from "./menuPhone";

const index = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<MenuPhone />
			<Footer />
		</>
	);
};

export default index;
