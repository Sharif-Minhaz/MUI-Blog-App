import { Paper, Stack, Typography } from "@mui/material";
import { Dry } from "@mui/icons-material";
import CustomButton from "../button/CustomButton";

const paperStyles = {
	alignItems: "center",
	justifyContent: "space-between",
	borderRadius: "14px",
	p: 4,
	backgroundColor: "#edf2f7",
	height: "100%",
	display: "flex",
	flexDirection: "column",
};

const Rightbar = () => {
	return (
		<Paper elevation={0} sx={paperStyles}>
			<Stack className="break-md">
				<Dry sx={{ color: "#9f7aea", fontSize: 50, mb: "20px" }} />
				<Typography
					fontSize={26}
					fontWeight="bold"
					variant="h4"
					mb={3}
					sx={{ color: "#718096" }}
				>
					Best Networking Workshops
				</Typography>
				<Typography sx={{ color: "#718096", lineHeight: "20px", mb: "22px" }}>
					In this workshop, learn when and how to network with modern best practices.
				</Typography>
				<Stack sx={{ gap: 1 }}>
					<Typography sx={{ color: "#718096", fontSize: "15px" }}>
						<span className="list-dot"></span>Explain the importance of networking for
						career-building
					</Typography>
					<Typography sx={{ color: "#718096", fontSize: "15px" }}>
						<span className="list-dot"></span>Practice modern tips for effective
						networking
					</Typography>
					<Typography sx={{ color: "#718096", fontSize: "15px" }}>
						<span className="list-dot"></span>Understand the steps towards building your
						own network
					</Typography>
				</Stack>
			</Stack>
			<Stack mt={3}>
				<CustomButton link="/our-team" text="Learn More" />
			</Stack>
		</Paper>
	);
};

export default Rightbar;
