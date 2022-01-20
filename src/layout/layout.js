import Footer from "./footer";
import Header from "./header";

const index = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default index;
