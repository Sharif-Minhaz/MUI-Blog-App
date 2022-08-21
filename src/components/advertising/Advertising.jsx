import { Grid } from "@mui/material";
import AdsTitleCard from "../ads-card/AdsTitleCard";
import DataCard from "../data-card/DataCard";

const Advertising = () => {
	return (
		<section>
			<Grid container spacing={2} rowSpacing={3}>
				<Grid item sm={12} md={4}>
					<DataCard
						bg="#e9d8fd"
						img="https://flexiblog-agency.netlify.app/static/9c7ba411a547ca3314d874d779b9f462/6b99c/image.webp"
						topic="Advertising"
						user="John Snow"
						avatar="https://mui.com/static/images/avatar/2.jpg"
						link="/link"
						postLink="/post-link"
						postDate="April 16, 2020"
						readTime="1 min"
						profileLink="/profile-link"
						postTitle="A Marketer’s Guide to Price Comparison Websites"
						postDes="Lorem markdown um suarum successibus Auram dilled. Aqua exegit silvae exiguam templi, cui linquit…"
						theme="dark"
					/>
				</Grid>
				<Grid item sm={12} md={4}>
					<DataCard
						bg="#e9d8fd"
						img="https://flexiblog-agency.netlify.app/static/d26d38bc3b4f390d1fb445ded2771158/6b99c/image.webp"
						topic="Advertising"
						user="Jane Bolton"
						avatar="https://flexiblog-agency.netlify.app/static/41bc1caf29080d62bd156256ffb0cd6a/a3542/jane-smith.webp"
						link="/link-2"
						postLink="/post-link-2"
						postDate="May 06, 2022"
						readTime="3 min"
						profileLink="/profile-link-2"
						postTitle="Markdown Language Sample Blog Post Styling"
						postDes="Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…"
						theme="dark"
					/>
				</Grid>
				<Grid item sm={12} md={4}>
					<DataCard
						bg="#e9d8fd"
						topic="Advertising"
						img="https://flexiblog-agency.netlify.app/static/90a14b9d2337e448de6a033b1c83c93b/6b99c/image.webp"
						user="Ramsey Bolton"
						avatar="https://flexiblog-agency.netlify.app/static/18c810c8f231ac22d5ec2cf2819ed68c/a3542/john-doe.webp"
						link="/link-3"
						postLink="/post-link-3"
						postDate="October 12, 2022"
						readTime="2 min"
						profileLink="/profile-link-3"
						postTitle="An introduction to the third-party cookie crackdown"
						postDes="Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…"
						theme="dark"
					/>
				</Grid>
				<Grid item sm={12} md={4} sx={{ width: "100%" }}>
					<AdsTitleCard
						topic="Advertising"
						title="Four ways to unlock the true power of TV through programmatic"
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
						topic="Advertising"
						title="The Best Digital Marketing Stats We’ve Seen This Week"
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
						topic="Advertising"
						title="The Consultancy Vs. Agency Debate It’s All About Effectiveness"
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

export default Advertising;
