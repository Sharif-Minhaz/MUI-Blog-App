import { Grid } from "@mui/material";
import Slider from "./Slider";
import AdsImgCard from "../ads-card/AdsImgCard";
import Rightbar from './../rightbar/Rightbar';

const SliderSection = () => {
	return (
		<section>
			<Grid container spacing={2}>
				<Grid item xs={9}>
					<Slider />
					<Grid container spacing={2} sx={{ mt: "8px" }}>
						<Grid item xs={6} className="transition">
							<AdsImgCard
								img="https://flexiblog-agency.netlify.app/static/90a14b9d2337e448de6a033b1c83c93b/6b99c/image.webp"
								topic="Advertising"
								title="Markdown Language Sample Blog Post Styling"
								author="John Doe"
								date="May 15, 2022"
								readTime="1 min"
							/>
						</Grid>
						<Grid item xs={6} className="transition">
							<AdsImgCard
								img="https://flexiblog-agency.netlify.app/static/d26d38bc3b4f390d1fb445ded2771158/6b99c/image.webp"
								topic="Advertising"
								title="An introduction to the third-party cookie crackdown"
								author="Jason Doe"
								date="May 10, 2022"
								readTime="6 min"
							/>
						</Grid>
						<Grid item xs={6} className="transition">
							<AdsImgCard
								img="https://flexiblog-agency.netlify.app/static/9c7ba411a547ca3314d874d779b9f462/6b99c/image.webp"
								topic="Advertising"
								title="A Marketer’s Guide to Price Comparison Websites"
								author="Morison Den"
								date="Jun 19, 2022"
								readTime="2 min"
							/>
						</Grid>
						<Grid item xs={6} className="transition">
							<AdsImgCard
								img="https://flexiblog-agency.netlify.app/static/ae6079884611eb3916af3ad9702705a2/6b99c/image.webp"
								topic="Advertising"
								title="Four ways to unlock the true power of TV through programmatic"
								author="Arya Stark"
								date="Jun 05, 2022"
								readTime="2 min"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={3}>
					<Rightbar />
				</Grid>
			</Grid>
		</section>
	);
};

export default SliderSection;
