import { Paper, Stack, Typography } from "@mui/material";
import { Dry } from "@mui/icons-material";
import CustomButton from "../button/CustomButton";
const Rightbar = () => {
	return (
		<Paper elevation={0} sx={{ borderRadius: "14px", p: 4, backgroundColor: "#edf2f7" }}>
			<Dry sx={{ color: "#9f7aea", fontSize: 40 }} />
			<Typography>Best Networking Workshops</Typography>
			<Typography>
				In this workshop, learn when and how to network with modern best practices.
			</Typography>
			<Stack>
				<Typography>Explain the importance of networking for career-building</Typography>
				<Typography>Practice modern tips for effective networking</Typography>
				<Typography>Understand the steps towards building your own network</Typography>
			</Stack>
			<Stack>
				<CustomButton link="/our-team" text="Learn More" />
			</Stack>
		</Paper>
	);
};

export default Rightbar;
