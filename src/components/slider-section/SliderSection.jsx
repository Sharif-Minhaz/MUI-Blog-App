import { Grid } from "@mui/material";
import Slider from "./Slider";
import AdsImgCard from "../ads-card/AdsImgCard";
import Rightbar from "./../rightbar/Rightbar";

const SliderSection = () => {
	return (
		<section>
			<Grid container spacing={2}>
				<Grid item xs={12} md={9}>
					<Slider />
					<Grid container spacing={2} sx={{ mt: "1px" }} rowSpacing={3}>
						<Grid item xs={12} sm={6} className="transition">
							<AdsImgCard
								img="https://flexiblog-agency.netlify.app/static/90a14b9d2337e448de6a033b1c83c93b/6b99c/image.webp"
								topic="Advertising"
								link="/ads"
								title="Markdown Language Sample Blog Post Styling"
								author="John Doe"
								date="May 15, 2022"
								readTime="1 min"
								postLink="/post-1"
							/>
						</Grid>
						<Grid item xs={12} sm={6} className="transition">
							<AdsImgCard
								img="https://flexiblog-agency.netlify.app/static/d26d38bc3b4f390d1fb445ded2771158/6b99c/image.webp"
								topic="Advertising"
								link="/ads-2"
								title="An introduction to the third-party cookie crackdown"
								author="Jason Doe"
								date="May 10, 2022"
								readTime="6 min"
								postLink="/post-2"
							/>
						</Grid>
						<Grid item xs={12} sm={6} className="transition">
							<AdsImgCard
								img="https://flexiblog-agency.netlify.app/static/9c7ba411a547ca3314d874d779b9f462/6b99c/image.webp"
								topic="Advertising"
								link="/ads-3"
								title="A Marketer’s Guide to Price Comparison Websites"
								author="Morison Den"
								date="Jun 19, 2022"
								readTime="2 min"
								postLink="/post-3"
							/>
						</Grid>
						<Grid item xs={12} sm={6} className="transition">
							<AdsImgCard
								img="https://flexiblog-agency.netlify.app/static/ae6079884611eb3916af3ad9702705a2/6b99c/image.webp"
								topic="Advertising"
								link="/ads-4"
								title="Four ways to unlock the true power of TV"
								author="Arya Stark"
								date="Jun 05, 2022"
								readTime="2 min"
								postLink="/post-4"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} md={3}>
					<Rightbar />
				</Grid>
			</Grid>
		</section>
	);
};

export default SliderSection;
