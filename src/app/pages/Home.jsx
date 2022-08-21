import MidLabel from "../../components/MidLabel";
import Navbar from "../../components/navbar/Navbar";
import Topics from "../../components/topics/Topics";
import Heading from "../../components/heading/Heading";
import Advertising from "../../components/advertising/Advertising";
import CaseStudies from "../../components/case-studies/CaseStudies";
import SliderSection from "../../components/slider-section/SliderSection";
import Innovation from "../../components/innovation/Innovation";
import Management from "../../components/management/Management";
import NewsLetter from "../../components/newsletter/NewsLetter";

const Home = () => {
	return (
		<>
			<Navbar />
			<Topics />
			<SliderSection />
			<Heading text="Advertising" link="/advertising" />
			<Advertising />
			<MidLabel />
			<Heading text="Case Studies" link="/case-studies" />
			<CaseStudies />
			<Heading text="Innovation" link="/innovation" />
			<Innovation />
			<Heading text="Management" link="/management" />
			<Management />
			<NewsLetter />
		</>
	);
};

export default Home;
