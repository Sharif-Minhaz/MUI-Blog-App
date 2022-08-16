import { Box } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import SliderSection from "../../components/slider-section/SliderSection";
import Topics from "../../components/topics/Topics";

const Home = () => {
	return (
		<Box>
			<Navbar />
			<Topics />
			<SliderSection />
		</Box>
	);
};

export default Home;
