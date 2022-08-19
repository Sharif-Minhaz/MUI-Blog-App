import { Stack, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CustomAvatar from "../avatar/CustomAvatar";

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

const SliderItem = ({ title, user, avatar, profileLink, postDate, readTime, bgImage, link }) => {
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
				<CustomAvatar
					avatar={avatar}
					user={user}
					postDate={postDate}
					readTime={readTime}
					profileLink={profileLink}
				/>
			</Box>
		</Stack>
	);
};

export default SliderItem;
