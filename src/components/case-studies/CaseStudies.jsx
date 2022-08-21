import { Grid } from "@mui/material";
import AdsImgCard from "../ads-card/AdsImgCard";
import DataCard from "../data-card/DataCard";

const CaseStudies = () => {
	return (
		<section>
			<Grid container spacing={2}>
				<Grid item md={4}>
					<DataCard
						img="https://flexiblog-agency.netlify.app/static/788678319c3e4fb03f21e9cf13954fa7/6b99c/image.webp"
						user="Edd Snow"
						avatar="https://mui.com/static/images/avatar/5.jpg"
						postLink="/post-link"
						postDate="April 16, 2020"
						readTime="1 min"
						profileLink="/profile-link"
						postTitle="Broadcaster Saves Hours of Admin with Innovative Digital Audio Solution"
						postDes="Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna fatebor. Levat placetque…"
						theme="dark"
					/>
				</Grid>
				<Grid item md={4} className="parent-1">
					<Grid container spacing={2} rowSpacing={2} className="parent-2">
						<Grid item md={12} className="parent-3">
							<AdsImgCard
								img="https://media.istockphoto.com/photos/case-studies-text-written-on-a-diary-cover-orange-on-black-business-picture-id1245879851?b=1&k=20&m=1245879851&s=170667a&w=0&h=L2yiCte0umOiG0R9bEsGSli9jJ-ypxkgPgVABMhMzo8="
								title="Charity engages 1m more supporters with revamped digital presence"
								author="John"
								date="August 03 2022"
								readTime="2 min"
								postLink="/post-1"
							/>
						</Grid>
						<Grid item md={12} className="parent-3">
							<AdsImgCard
								img="https://media.istockphoto.com/photos/case-studies-text-written-on-a-diary-cover-orange-on-black-business-picture-id1245879851?b=1&k=20&m=1245879851&s=170667a&w=0&h=L2yiCte0umOiG0R9bEsGSli9jJ-ypxkgPgVABMhMzo8="
								title="Charity engages 1m more supporters with revamped digital presence"
								author="John"
								date="August 03 2022"
								readTime="2 min"
								postLink="/post-1"
							/>
						</Grid>
						<Grid item md={12} className="parent-3">
							<AdsImgCard
								img="https://media.istockphoto.com/photos/case-studies-text-written-on-a-diary-cover-orange-on-black-business-picture-id1245879851?b=1&k=20&m=1245879851&s=170667a&w=0&h=L2yiCte0umOiG0R9bEsGSli9jJ-ypxkgPgVABMhMzo8="
								title="Charity engages 1m more supporters with revamped digital presence"
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
						img="https://flexiblog-agency.netlify.app/static/cf8b5f317021327d5776d37f65892f72/6b99c/image.webp"
						user="Morgan Jack"
						avatar="https://mui.com/static/images/avatar/1.jpg"
						postLink="/post-link"
						postDate="April 26, 2021"
						readTime="1 min"
						profileLink="/profile-link-2"
						postTitle="Trigger emails boost digital revenue by 9.1% for furniture retailer"
						postDes="Lorem markdownum illic venturi instructa nobis Echidnae, cum quid magna fatebor. Levat placetque…"
						theme="dark"
					/>
				</Grid>
			</Grid>
		</section>
	);
};

export default CaseStudies;
