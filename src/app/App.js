import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/our-team" element={<OurTeam />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
};

export default App;
