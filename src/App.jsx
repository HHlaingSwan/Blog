import HomeBlog from "./components/pages/HomeBlog";
import PageOne from "./components/pages/PageOne";
import PageTwo from "./components/pages/PageTwo";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeBlog />,
	},
	{
		path: "/page-one",
		element: <PageOne />,
	},
	{
		path: "/page-two",
		element: <PageTwo />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
