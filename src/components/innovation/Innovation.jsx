import { Grid } from "@mui/material";
import AdsTitleCard from "../ads-card/AdsTitleCard";
import DataCard from "../data-card/DataCard";

const Innovation = () => {
	return (
		<section>
			<Grid container spacing={2} rowSpacing={3}>
				<Grid item sm={12} md={4}>
					<DataCard
						bg="#fefcbf"
						img="https://flexiblog-agency.netlify.app/static/ba2457f09dca4e6a72821a35df140306/6b99c/image.webp"
						topic="Innovation"
						user="John Doe"
						avatar="https://mui.com/static/images/avatar/2.jpg"
						link="/link"
						postLink="/post-link"
						postDate="April 16, 2020"
						readTime="1 min"
						profileLink="/profile-link"
						postTitle="5 ingenious innovations triggered by chaos in startups"
						postDes="Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…"
						theme="dark"
					/>
				</Grid>
				<Grid item sm={12} md={4}>
					<DataCard
						bg="#fefcbf"
						img="https://flexiblog-agency.netlify.app/static/3884ba103a7e1fa4b5e3a8b5079aba13/6b99c/image.webp"
						topic="Innovation"
						user="Jane Bolton"
						avatar="https://flexiblog-agency.netlify.app/static/41bc1caf29080d62bd156256ffb0cd6a/a3542/jane-smith.webp"
						link="/link-2"
						postLink="/post-link-2"
						postDate="May 06, 2022"
						readTime="3 min"
						profileLink="/profile-link-2"
						postTitle="50 social impact innovations that might save the world"
						postDes="Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…"
						theme="dark"
					/>
				</Grid>
				<Grid item sm={12} md={4}>
					<DataCard
						bg="#fefcbf"
						topic="Innovation"
						img="https://flexiblog-agency.netlify.app/static/23a8236b35fdd6c4355a57c883756d11/6b99c/image.webp"
						user="Ramsey Bolton"
						avatar="https://flexiblog-agency.netlify.app/static/18c810c8f231ac22d5ec2cf2819ed68c/a3542/john-doe.webp"
						link="/link-3"
						postLink="/post-link-3"
						postDate="October 12, 2022"
						readTime="2 min"
						profileLink="/profile-link-3"
						postTitle="Business Model pivots in the Low Touch Economy"
						postDes="Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…"
						theme="dark"
					/>
				</Grid>
				<Grid item sm={12} md={4} sx={{ width: "100%" }}>
					<AdsTitleCard
						topic="Innovation"
						title="Can a designer sustainably transform the world?"
						author="John Doe"
						profileLink="/john"
						date="April 16, 2022"
						readTime="1 min"
						link="/advertising"
						postLink="/post-1"
						className="sp-no-img"
					/>
				</Grid>
				<Grid item sm={12} md={4} sx={{ width: "100%" }}>
					<AdsTitleCard
						topic="Innovation"
						title="Create an international team of innovation catalysts in 5 steps"
						author="Edd Doe"
						profileLink="/edd"
						date="May 26, 2022"
						readTime="2 min"
						link="/advertising"
						postLink="/post-2"
						className="sp-no-img"
					/>
				</Grid>
				<Grid item sm={12} md={4} sx={{ width: "100%" }}>
					<AdsTitleCard
						topic="Innovation"
						title="How to assess your company’s level of innovation"
						author="Steve Grant"
						profileLink="/steve"
						date="June 10, 2022"
						readTime="1 min"
						link="/advertising"
						postLink="/post-3"
						className="sp-no-img"
					/>
				</Grid>
			</Grid>
		</section>
	);
};

export default Innovation;
