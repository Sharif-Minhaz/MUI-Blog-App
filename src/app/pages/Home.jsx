import { Box } from "@mui/material";
import Advertising from "../../components/advertising/Advertising";
import Heading from "../../components/heading/Heading";
import Navbar from "../../components/navbar/Navbar";
import SliderSection from "../../components/slider-section/SliderSection";
import Topics from "../../components/topics/Topics";

const Home = () => {
	return (
		<Box>
			<Navbar />
			<Topics />
			<SliderSection />
			<Heading text="Advertising" link="/advertising" />
			<Advertising />
		</Box>
	);
};

export default Home;
