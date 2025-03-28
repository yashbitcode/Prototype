import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
	return (
		<div className="bg-[#e9eef2] w-full min-h-[100vh] px-[1rem] py-[1.5rem] flex gap-[2rem]">
			<Header />
			<Home />
		</div>
	);
};

export default App;
