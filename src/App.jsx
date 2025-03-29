import { Provider } from "react-redux";
import Header from "./components/Header";
import Home from "./pages/Home";
import appStore from "./services/appStore";

const AppLayout = () => {
	return (
		<div className="bg-[#e9eef2] w-full min-h-[100vh] px-[1rem] py-[1.5rem] flex gap-[2rem]">
			<Header />
			<Home />
		</div>
	);
};

const App = () => {
	return (
		<Provider store={appStore}>
			<AppLayout />
		</Provider>
	);
};

export default App;
