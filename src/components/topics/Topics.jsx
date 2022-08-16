import SingleTopic from "./SingleTopic";
import { Article, TipsAndUpdates, ManageHistory, AddToHomeScreen } from "@mui/icons-material";
import { Grid } from "@mui/material";

const Topics = () => {
	return (
		<section>
			<Grid container spacing={2}>
				<Grid item xs={6} sm={6} md={3}>
					<SingleTopic
						icon={<Article color="info" fontSize="large" />}
						title="Case Studies"
						link="/"
					/>
				</Grid>
				<Grid item xs={6} sm={6} md={3}>
					<SingleTopic
						icon={<TipsAndUpdates color="info" fontSize="large" />}
						title="Innovation"
						link="/"
					/>
				</Grid>
				<Grid item xs={6} sm={6} md={3}>
					<SingleTopic
						icon={<ManageHistory color="info" fontSize="large" />}
						title="Management"
						link="/"
					/>
				</Grid>
				<Grid item xs={6} sm={6} md={3}>
					<SingleTopic
						icon={<AddToHomeScreen color="info" fontSize="large" />}
						title="Advertising"
						link="/"
					/>
				</Grid>
			</Grid>
		</section>
	);
};

export default Topics;
