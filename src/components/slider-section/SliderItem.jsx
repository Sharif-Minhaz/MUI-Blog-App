import { Stack, Box, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { AccessTime } from "@mui/icons-material";

const sliderStyle = {
	background: "linear-gradient( 120deg, #2d3748 0%, transparent 180% )",
	borderRadius: "14px",
	height: "100%",
	p: "70px 45px 136px 120px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
};

const sliderBg = {
	backgroundSize: "cover",
	backgroundPosition: "center",
	height: "100%",
	borderRadius: "14px",
};

const SliderItem = ({ title, user, avatar, postDate, readTime, bgImage, link }) => {
	return (
		<Stack sx={{ ...sliderBg, backgroundImage: `url(${bgImage})` }}>
			<Box sx={sliderStyle}>
				<Link to={link} className="rm-underline">
					<Typography
						align="left"
						variant="h4"
						fontWeight="bold"
						sx={{ color: "#ffffff", textShadow: "1px 1px 0px #2d3748" }}
					>
						{title}
					</Typography>
				</Link>
				<Box sx={{ display: "flex", gap: 2 }}>
					<Box>
						<Avatar alt={user} src={avatar} sx={{ width: 56, height: 56 }} />
					</Box>
					<Stack>
						<Typography
							align="left"
							sx={{ color: "#e2e8f0", mb: "5px" }}
							fontWeight="bold"
						>
							{user}
						</Typography>
						<Typography align="left" sx={{ color: "#e2e8f0" }}>
							{postDate} . <AccessTime sx={{ fontSize: "18px", mb: "-3px" }} />{" "}
							{readTime}
						</Typography>
					</Stack>
				</Box>
			</Box>
		</Stack>
	);
};

export default SliderItem;
