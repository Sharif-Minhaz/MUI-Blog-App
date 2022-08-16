import { Grid } from "@mui/material";
import Slider from "./Slider";

const SliderSection = () => {
	return (
		<section>
			<Grid container spacing={2}>
				<Grid item xs={9}>
					<Slider />
				</Grid>
				<Grid item xs={3}>side</Grid>
			</Grid>
		</section>
	);
};

export default SliderSection;
