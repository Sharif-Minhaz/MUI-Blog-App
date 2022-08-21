import { Grid } from "@mui/material";
import AdsImgCard from "../ads-card/AdsImgCard";
import DataCard from "../data-card/DataCard";

const Management = () => {
	return (
		<section>
			<Grid container spacing={2}>
				<Grid item md={4}>
					<DataCard
						img="https://flexiblog-agency.netlify.app/static/229719c4a6095356046c239508f6835c/6b99c/image.webp"
						user="Edd Snow"
						avatar="https://mui.com/static/images/avatar/5.jpg"
						postLink="/post-link"
						postDate="April 16, 2020"
						readTime="1 min"
						profileLink="/profile-link"
						postTitle="Learning from Digital Disruptors Best Practice Guide"
						postDes="Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna fatebor. Levat placetque…"
						theme="dark"
					/>
				</Grid>
				<Grid item md={4} className="parent-1">
					<Grid container spacing={2} rowSpacing={2} className="parent-2">
						<Grid item md={12} className="parent-3">
							<AdsImgCard
								img="https://www.managementstudyhq.com/wp-content/uploads/2013/08/management1.jpg"
								title="Effective Leadership in the Digital Age"
								author="John"
								date="August 03 2022"
								readTime="2 min"
								postLink="/post-1"
							/>
						</Grid>
						<Grid item md={12} className="parent-3">
							<AdsImgCard
								img="https://www.managementstudyhq.com/wp-content/uploads/2013/08/management1.jpg"
								title="How to Choose the Right Business Management Software"
								author="John"
								date="August 03 2022"
								readTime="2 min"
								postLink="/post-1"
							/>
						</Grid>
						<Grid item md={12} className="parent-3">
							<AdsImgCard
								img="https://www.managementstudyhq.com/wp-content/uploads/2013/08/management1.jpg"
								title="How to Use Technology to Increase Your Productivity"
								author="John"
								date="August 03 2022"
								readTime="2 min"
								postLink="/post-1"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={4}>
					<DataCard
						img="https://flexiblog-agency.netlify.app/static/90a14b9d2337e448de6a033b1c83c93b/6b99c/image.webp"
						user="Morgan Jack"
						avatar="https://mui.com/static/images/avatar/1.jpg"
						postLink="/post-link"
						postDate="April 26, 2021"
						readTime="1 min"
						profileLink="/profile-link-2"
						postTitle="5 Easy Ways to Boost Your Team Performance Immediately"
						postDes="Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna fatebor. Levat placetque…"
						theme="dark"
					/>
				</Grid>
			</Grid>
		</section>
	);
};

export default Management;
