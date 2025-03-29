import { Provider } from "react-redux";
import Header from "./components/Header";
import Home from "./pages/Home";
import appStore from "./services/appStore";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import HistoryShowcase from "./pages/HistoryShowcase";

const AppLayout = () => {
	return (
		<div className="bg-[#e9eef2] w-full min-h-[100vh] px-[1rem] py-[1.5rem] flex gap-[2rem]">
			<Header />
			<Outlet />
		</div>
	);
};

const appRoutes = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/history",
				element: <HistoryShowcase />
			},
		]
	}
])

const App = () => {
	return (
		<Provider store={appStore}>
			<RouterProvider router={appRoutes} />
		</Provider>
	);
};

export default App;
